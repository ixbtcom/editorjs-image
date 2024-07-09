import { IconPicture } from '@codexteam/icons';
import { make } from './utils/dom';
import type { API } from '@editorjs/editorjs';
import { ImageToolData, ImageConfig } from './types/types';

/**
 * Enumeration representing the different states of the UI.
 */
enum UiState {
  /**
   * The UI is in an empty state, with no image loaded or being uploaded.
   */
  Empty = "empty",

  /**
   * The UI is in an uploading state, indicating an image is currently being uploaded.
   */
  Uploading = "uploading", 

  /**
   * The UI is in a filled state, with an image successfully loaded.
   */
  Filled = "filled"
};

/**
 * Nodes interface representing various elements in the UI.
 */
interface Nodes {
  /**
   * Wrapper element in the UI.
   */
  wrapper: HTMLElement;

  /**
   * Container for the image element in the UI.
   */
  imageContainer: HTMLElement;

  /**
   * Button for selecting files.
   */
  fileButton: HTMLElement;

  /**
   * Represents the image element in the UI, if one is present; otherwise, it's undefined.
   */
  imageEl?: HTMLElement;

  /**
   * Preloader element for the image.
   */
  imagePreloader: HTMLElement;
  
  /**
   * Caption element for the image.
   */
  caption: HTMLElement;

  /**
   * Link element for the image
   */

  link: HTMLElement;

  /**
   * Alt element for the image
   */

  alt: HTMLElement;
}

/**
 * ConstructorParams interface representing parameters for the Ui class constructor.
 */
interface ConstructorParams {
  /**
   * Editor.js API.
   */
  api: API;
  /**
   * Configuration for the image.
   */
  config: ImageConfig;
  /**
   * Callback function for selecting a file.
   */
  onSelectFile: () => void;
  /**
   * Flag indicating if the UI is in read-only mode.
   */
  readOnly: boolean;
}

/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 *  - apply tune view
 */
export default class Ui {
/**
 * API instance for Editor.js.
 */
private api: API;

/**
 * Configuration for the image tool.
 */
private config: ImageConfig;

/**
 * Callback function for selecting a file.
 */
private onSelectFile: () => void;

/**
 * Flag indicating if the UI is in read-only mode.
 */
private readOnly: boolean;

/**
 * Nodes representing various elements in the UI.
 */
public nodes: Nodes;
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api, config, onSelectFile, readOnly }: ConstructorParams) {
    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.readOnly = readOnly;
    this.nodes = {
      wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: make('div', [ this.CSS.imageContainer ]),
      fileButton: this.createFileButton(),
      imageEl: undefined,
      imagePreloader: make('div', this.CSS.imagePreloader),
      caption: make('div', [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly,
      }),
      alt: make('div', [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly,
      }),
      link: make('div', [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly,
      }),

    };

    /**
     * Create base structure
     *  <wrapper>
     *    <image-container>
     *      <image-preloader />
     *    </image-container>
     *    <caption />
     *    <select-file-button />
     *  </wrapper>
     */

    this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;
    this.nodes.alt.dataset.placeholder = this.config.altPlaceholder;
    this.nodes.link.dataset.placeholder = this.config.linkPlaceholder;
    this.nodes.imageContainer.appendChild(this.nodes.imagePreloader);
    this.nodes.wrapper.appendChild(this.nodes.imageContainer);
    this.nodes.wrapper.appendChild(this.nodes.caption);
    this.nodes.wrapper.appendChild(this.nodes.alt);
    this.nodes.wrapper.appendChild(this.nodes.link);
    this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }

  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS(): Record<string, string> {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,

      /**
       * Tool's classes
       */
      wrapper: 'image-tool',
      imageContainer: 'image-tool__image',
      imagePreloader: 'image-tool__image-preloader',
      imageEl: 'image-tool__image-picture',
      caption: 'image-tool__caption',
    };
  };

  /**
   * Renders tool UI
   *
   * @param {ImageToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(toolData: ImageToolData): HTMLElement  {
    if (!toolData.file || Object.keys(toolData.file).length === 0) {
      this.toggleStatus(UiState.Empty);
    } else {
      this.toggleStatus(UiState.Uploading);
    }
    return this.nodes.wrapper;
  }

  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton(): HTMLElement {
    const button = make('div', [ this.CSS.button ]);

    button.innerHTML = this.config.buttonContent || `${IconPicture} ${this.api.i18n.t('Select an Image')}`;

    button.addEventListener('click', () => {
      this.onSelectFile();
    });

    return button;
  }

  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(src: string): void {
    this.nodes.imagePreloader.style.backgroundImage = `url(${src})`;

    this.toggleStatus(UiState.Uploading);
  }

  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader(): void {
    this.nodes.imagePreloader.style.backgroundImage = '';
    this.toggleStatus(UiState.Empty);
  }

  /**
   * Shows an image
   *
   * @param {string} url - image source
   * @returns {void}
   */
  fillImage(url: string): void {
    /**
     * Check for a source extension to compose element correctly: video tag for mp4, img — for others
     */
    const tag = /\.mp4$/.test(url) ? 'VIDEO' : 'IMG';

    const attributes: { [key: string]: any} = {
      src: url,
    };

    /**
     * We use eventName variable because IMG and VIDEO tags have different event to be called on source load
     * - IMG: load
     * - VIDEO: loadeddata
     *
     * @type {string}
     */
    let eventName = 'load';

    /**
     * Update attributes and eventName if source is a mp4 video
     */
    if (tag === 'VIDEO') {
      /**
       * Add attributes for playing muted mp4 as a gif
       *
       * @type {boolean}
       */
      attributes.autoplay = true;
      attributes.loop = true;
      attributes.muted = true;
      attributes.playsinline = true;

      /**
       * Change event to be listened
       *
       * @type {string}
       */
      eventName = 'loadeddata';
    }

    /**
     * Compose tag with defined attributes
     *
     * @type {Element}
     */
    this.nodes.imageEl = make(tag, this.CSS.imageEl, attributes);

    /**
     * Add load event listener
     */
    this.nodes.imageEl.addEventListener(eventName, () => {
      this.toggleStatus(UiState.Filled);

      /**
       * Preloader does not exists on first rendering with presaved data
       */
      if (this.nodes.imagePreloader) {
        this.nodes.imagePreloader.style.backgroundImage = '';
      }
    });

    this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }

  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(text: string): void {
    if (this.nodes.caption) {
      this.nodes.caption.innerHTML = text;
    }
  }

  /**
   * Shows link input
   *
   * @param {string} text - link text
   * @returns {void}
   */
  fillLink(text: string):void {
    if (this.nodes.link) {
      this.nodes.link.innerHTML = text;
    }
  }

  /**
   * Shows alt input
   *
   * @param {string} text - alt text
   * @returns {void}
   */
  fillAlt(text: string):void {
    if (this.nodes.alt) {
      this.nodes.alt.innerHTML = text;
    }
  }

  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(status: UiState): void {
    for (const statusType in UiState) {
      if (Object.prototype.hasOwnProperty.call(UiState, statusType)) {
          this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${UiState[statusType as keyof typeof UiState]}`, status === UiState[statusType as keyof typeof UiState]);
      }
    }
  }

  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(tuneName: string, status: boolean): void {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${tuneName}`, status);
  }
}