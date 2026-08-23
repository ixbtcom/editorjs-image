/**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/ixbtcom/editorjs-image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.ts — main Tool's interface, public API and methods for working with data
 *  2) uploader.ts — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.ts — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */

import type { TunesMenuConfig } from "@editorjs/editorjs/types/tools";
import type { API, ToolboxConfig, PasteConfig, BlockToolConstructorOptions, BlockTool, BlockAPI } from '@editorjs/editorjs';
import './index.css';

import Ui from './ui';
import Uploader from './uploader';

import { IconAddBorder, IconStretch, IconAddBackground, IconPicture } from '@codexteam/icons';
import type { ActionConfig, UploadResponseFormat, ImageToolData, ImageConfig } from './types/types';


type ImageToolConstructorOptions = BlockToolConstructorOptions<ImageToolData, ImageConfig>

export default class ImageTool implements BlockTool {
  /**
   * Editor.js API instance
   */
  private api: API;

  /**
   * Flag indicating read-only mode
   */
  private readOnly: boolean;

  /**
   * Current Block API instance
   */
  private block: BlockAPI;

  /**
   * Configuration for the ImageTool
   */
  private config: ImageConfig;

  /**
   * Uploader module instance
   */
  private uploader: Uploader;

  /**
   * UI module instance
   */
  private ui: Ui;

  /**
   * Stores current block data internally
   */
  private _data: ImageToolData;

  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {ImageToolData} tool.data - previously saved data
   * @param {ImageConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   * @param {BlockAPI|{}} tool.block - current Block API
   */
  constructor({ data, config, api, readOnly, block }: ImageToolConstructorOptions) {
    this.api = api;
    this.readOnly = readOnly;
    this.block = block;
    const toolConfig = config ?? {} as ImageConfig;

    /**
     * Tool's initial config
     */
    this.config = {
      endpoints: toolConfig.endpoints ?? {},
      additionalRequestData: toolConfig.additionalRequestData,
      additionalRequestHeaders: toolConfig.additionalRequestHeaders,
      field: toolConfig.field,
      types: toolConfig.types,
      captionPlaceholder: this.api.i18n.t(toolConfig.captionPlaceholder ? toolConfig.captionPlaceholder: 'Caption'),
      altPlaceholder: this.api.i18n.t(toolConfig.altPlaceholder ? toolConfig.altPlaceholder: 'Source'),
      linkPlaceholder: this.api.i18n.t(toolConfig.linkPlaceholder ? toolConfig.linkPlaceholder: 'Link'),
      buttonContent: toolConfig.buttonContent,
      uploader: toolConfig.uploader,
      actions: toolConfig.actions,
      mediaHost: toolConfig.mediaHost,
      cover: toolConfig.cover,
      onMediaRemoved: toolConfig.onMediaRemoved,
    };

    /**
     * Module for file uploading
     */
    this.uploader = new Uploader({
      config: this.config,
      onUpload: (response) => this.onUpload(response),
      onError: (error) => this.uploadingFailed(error),
    });

    /**
     * Module for working with UI
     */
    this.ui = new Ui({
      api,
      config: this.config,
      onDelete: () => this.deleteBlock(),
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (src: string) => {
            this.ui.showPreloader(src);
          },
        });
      },
      onSetCover: () => this.selectCover(),
      readOnly,
    });

    /**
     * Set saved state
     */
    this._data = {
      caption: '',
      alt: '',
      link: '',
      withBorder: false,
      withBackground: false,
      stretched: false,
      file: {
        url: '',
      },
    };
    this.data = data;
  }
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported(): boolean {
    return true;
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox(): ToolboxConfig {
    return {
      icon: IconPicture,
      title: 'Image',
    };
  }

  /**
   * Available image tools
   *
   * @returns {Array}
   */
  static get tunes(): Array<ActionConfig> {
    return [
      {
        name: 'withBorder',
        icon: IconAddBorder,
        title: 'With border',
        toggle: true,
      },
      {
        name: 'stretched',
        icon: IconStretch,
        title: 'Stretch image',
        toggle: true,
      },
      {
        name: 'withBackground',
        icon: IconAddBackground,
        title: 'With background',
        toggle: true,
      },
    ];
  }

  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render(): HTMLDivElement  {
    return this.ui.render(this.data) as HTMLDivElement;
  }

  /**
   * Validate data: check if Image exists
   *
   * @param {ImageToolData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(savedData: ImageToolData): boolean {
    return !!savedData.file.url;
  }

  /**
   * Return Block data
   *
   * @public
   *
   * @returns {ImageToolData}
   */
  save(): ImageToolData {
    const caption = this.ui.nodes.caption;
    const alt = this.ui.nodes.alt;
    const link = this.ui.nodes.link;


    this._data.caption = caption.innerHTML;
    this._data.alt = alt.innerHTML;
    this._data.link = link.innerHTML;


    return this.data;
  }

  /** Queue permanent media cleanup when a legacy block is removed. */
  removed(): void {
    const mediaId = this._data.file.media_id;

    if (typeof mediaId === 'string' && mediaId !== '') {
      this.config.onMediaRemoved?.(mediaId);
    }
  }

  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   *
   * @public
   *
   * @returns TunesMenuConfig
   */
  renderSettings(): TunesMenuConfig {
    // Merge default tunes with the ones that might be added by user
    // @see https://github.com/editor-js/image/pull/49
    const tunes = ImageTool.tunes.concat(this.config.actions || []);

    return tunes.map(tune => ({
      icon: tune.icon,
      label: this.api.i18n.t(tune.title),
      name: tune.name,
      toggle: tune.toggle,
      isActive: this.data[tune.name as keyof ImageToolData] as boolean,
      onActivate: () => {
        /**If it'a user defined tune, execute it's callback stored in action property */
        if (typeof tune.action === 'function') {
          tune.action(tune.name);

          return;
        }
        this.tuneToggled(tune.name as keyof ImageToolData);
      },
    }));
  }

  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   *
   * @public
   */
  appendCallback(): void {
    this.ui.nodes.fileButton.click();
  }

  /**
   * Specify paste substitutes
   *
   * ⛔ Пустой конфиг, а НЕ `false`: legacy-блок вставку не перехватывает (новые
   * картинки ведёт блок `media`), но `false` кладёт тул в `exceptionList`
   * EditorJS, и вставка внутри его блока не обрабатывается вообще — картинка из
   * буфера при курсоре в старом блоке уходила бы в никуда.
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @returns {{tags: string[], patterns: object<string, RegExp>, files: {extensions: string[], mimeTypes: string[]}}}
   */
  static get pasteConfig(): PasteConfig | false {
    return {} as PasteConfig;
  }

  /**
   * Specify paste handlers
   *
   * @public
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param {CustomEvent} event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   * @returns {void}
   */
  async onPaste(event: CustomEvent): Promise<void> {
    switch (event.type) {
      case 'tag': {
        const image = event.detail.data;

        /** Images from PDF */
        if (/^blob:/.test(image.src)) {
          const response = await fetch(image.src);

          const file = await response.blob();

          this.uploadFile(file);
          break;
        }

        this.uploadUrl(image.src);
        break;
      }
      case 'pattern': {
        const url = event.detail.data;

        this.uploadUrl(url);
        break;
      }
      case 'file': {
        const file = event.detail.file;

        this.uploadFile(file);
        break;
      }
    }
  }

  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */

  /**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {ImageToolData} data - data in Image Tool format
   */
  set data(data: ImageToolData) {
    const file = data.file || { url: '' };

    this._data = { ...this._data, ...data, file };
    this.image = file;

    const imagorPathValue = file.imagor_path ?? file.imagorPath;
    const imagorPath = typeof imagorPathValue === 'string' ? imagorPathValue : undefined;
    const crop = typeof data.crop === 'string' && data.crop !== '' ? data.crop : undefined;
    const croppedWidth = typeof data.croppedWidth === 'number' ? data.croppedWidth : undefined;
    const croppedHeight = typeof data.croppedHeight === 'number' ? data.croppedHeight : undefined;
    const originalWidth = typeof file.width === 'number' ? file.width : undefined;
    const originalHeight = typeof file.height === 'number' ? file.height : undefined;

    this.ui.applyCrop(file.url, imagorPath, crop, croppedWidth, croppedHeight, originalWidth, originalHeight);

    this._data.caption = data.caption || '';
    this._data.alt = data.alt || '';
    this._data.link = data.link || '';

    this.ui.fillCaption(this._data.caption);
    this.ui.fillAlt(this._data.alt);
    this.ui.fillLink(this._data.link);


    ImageTool.tunes.forEach(({ name: tune }) => {
      const value = typeof data[tune as keyof ImageToolData] !== 'undefined' ? data[tune as keyof ImageToolData] === true || data[tune as keyof ImageToolData] === 'true' : false;

      this.setTune(tune as keyof ImageToolData, value);
    });
  }

  /**
   * Return Tool data
   *
   * @private
   *
   * @returns {ImageToolData}
   */
  get data(): ImageToolData {
    return this._data;
  }

  /**
   * Set new image file
   *
   * @private
   *
   * @param {object} file - uploaded file data
   */
  set image(file: { url: string } | undefined) {
    this._data.file = file || {url: ''};

    if (file && file.url) {
      this.ui.fillImage(file.url);
    }
  }

  /** Select this media item as the publication cover. */
  private selectCover(): boolean {
    if (this.config.cover?.enabled !== true) {
      return false;
    }

    const mediaId = this._data.file.media_id;

    if (typeof mediaId !== 'string' || mediaId === '') {
      this.api.notifier.show({
        message: this.api.i18n.t('Сначала дождитесь загрузки картинки'),
        style: 'error',
      });

      return false;
    }

    this.config.cover.onCoverChanged?.(mediaId, this.block.id);
    this.api.notifier.show({ message: this.api.i18n.t('Базовая обложка обновлена') });

    return true;
  }

  /** Delete this block through the Editor.js API. */
  private deleteBlock(): void {
    const blockIndex = this.api.blocks.getBlockIndex(this.block.id);

    if (blockIndex >= 0) {
      this.api.blocks.delete(blockIndex);
    }
  }

  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(response: UploadResponseFormat): void {
    if (response.success && response.file) {
      this.image = response.file;
    } else {
      this.uploadingFailed('incorrect response: ' + JSON.stringify(response));
    }
  }

  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(errorText: string): void {
    console.log('Image Tool: uploading failed because of', errorText);

    this.api.notifier.show({
      message: this.api.i18n.t('Couldn’t upload image. Please try another.'),
      style: 'error',
    });
    this.ui.hidePreloader();
  }

  /**
   * Callback fired when Block Tune is activated
   *
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   * @returns {void}
   */
  tuneToggled(tuneName: keyof ImageToolData): void {
    // inverse tune state
    this.setTune(tuneName, !this._data[tuneName as keyof ImageToolData]);
  }

  /**
   * Set one tune
   *
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   * @returns {void}
   */
  setTune(tuneName: keyof ImageToolData, value: boolean): void {
    (this._data[tuneName] as boolean) = value;

    this.ui.applyTune(tuneName, value);
    if (tuneName === 'stretched') {
      /**
       * Wait until the API is ready
       */
      Promise.resolve().then(() => {
        this.block.stretched = value;
      })
        .catch(err => {
          console.error(err);
        });
    }
  }

  /**
   * Show preloader and upload image file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */
  uploadFile(file: Blob): void {
    this.uploader.uploadByFile(file, {
      onPreview: (src: string) => {
        this.ui.showPreloader(src);
      },
    });
  }

  /**
   * Show preloader and upload image by target url
   *
   * @param {string} url - url pasted
   * @returns {void}
   */
  uploadUrl(url: string): void {
    this.ui.showPreloader(url);
    this.uploader.uploadByUrl(url);
  }
}
