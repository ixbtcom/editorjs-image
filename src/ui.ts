import { IconPicture } from '@codexteam/icons';
import type { API } from '@editorjs/editorjs';
import type { ImageConfig, ImageToolData } from './types/types';
import { make } from './utils/dom';

enum UiState {
  Empty = 'empty',
  Uploading = 'loading',
  Filled = 'filled'
}

interface Nodes {
  wrapper: HTMLElement;
  imageContainer: HTMLElement;
  controls: HTMLElement;
  coverButton: HTMLButtonElement | null;
  fileButton: HTMLElement;
  imageEl?: HTMLElement;
  imagePreloader: HTMLElement;
  imageDimensions: HTMLElement;
  caption: HTMLElement;
  link: HTMLElement;
  alt: HTMLElement;
}

interface ConstructorParams {
  api: API;
  config: ImageConfig;
  onSelectFile: () => void;
  onDelete: () => void;
  onSetCover: () => boolean;
  readOnly: boolean;
}

export default class Ui {
  public nodes: Nodes;

  private api: API;
  private config: ImageConfig;
  private readOnly: boolean;
  private onSelectFile: () => void;
  private onDelete: () => void;
  private onSetCover: () => boolean;

  constructor({ api, config, onSelectFile, onDelete, onSetCover, readOnly }: ConstructorParams) {
    this.api = api;
    this.config = config;
    this.readOnly = readOnly;
    this.onSelectFile = onSelectFile;
    this.onDelete = onDelete;
    this.onSetCover = onSetCover;

    const imageContainer = make('div', [this.CSS.imageContainer]);
    const controls = make('div', [this.CSS.controls]);
    const deleteButton = make('button', [this.CSS.remove], { type: 'button' }) as HTMLButtonElement;
    const coverButton = this.config.cover?.enabled === true
      ? make('button', [this.CSS.cover], { type: 'button' }) as HTMLButtonElement
      : null;

    if (coverButton !== null) {
      coverButton.innerHTML = '★';
      coverButton.title = 'Сделать обложкой';
      coverButton.setAttribute('aria-label', 'Сделать обложкой');
      coverButton.setAttribute('aria-pressed', 'false');
      coverButton.addEventListener('click', (event) => {
        event.stopPropagation();
        if (this.onSetCover()) {
          this.markCover(true);
        }
      });
    }

    deleteButton.innerHTML = '×';
    deleteButton.title = 'Удалить изображение';
    deleteButton.setAttribute('aria-label', 'Удалить изображение');
    deleteButton.addEventListener('click', (event) => {
      event.stopPropagation();
      this.onDelete();
    });

    if (coverButton !== null) {
      controls.append(coverButton);
    }
    controls.append(deleteButton);

    this.nodes = {
      wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer,
      controls,
      coverButton,
      fileButton: this.createFileButton(),
      imagePreloader: make('div', this.CSS.imagePreloader),
      imageDimensions: make('div', this.CSS.dimensions),
      caption: make('div', [this.CSS.input, this.CSS.caption], { contentEditable: !this.readOnly }),
      alt: make('div', [this.CSS.input, this.CSS.source], { contentEditable: !this.readOnly }),
      link: make('div', [this.CSS.input, this.CSS.sourceLink], { contentEditable: !this.readOnly }),
    };

    this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;
    this.nodes.alt.dataset.placeholder = this.config.altPlaceholder;
    this.nodes.link.dataset.placeholder = this.config.linkPlaceholder;
    this.nodes.controls.hidden = this.readOnly;
    this.nodes.imageDimensions.hidden = true;
    this.nodes.imageContainer.append(
      this.nodes.imagePreloader,
      this.nodes.controls,
      this.nodes.imageDimensions
    );
    this.nodes.wrapper.append(
      this.nodes.imageContainer,
      this.nodes.caption,
      this.nodes.alt,
      this.nodes.link,
      this.nodes.fileButton
    );
  }

  public render(toolData: ImageToolData): HTMLElement {
    const isFilled = typeof toolData.file?.url === 'string' && toolData.file.url !== '';
    const storedMediaId = toolData.file?.media_id;
    const mediaId = typeof storedMediaId === 'string' && storedMediaId !== '' ? storedMediaId : null;

    this.nodes.controls.hidden = !isFilled || this.readOnly;
    this.nodes.coverButton?.toggleAttribute('hidden', mediaId === null);
    this.markCover(mediaId !== null && (this.config.cover?.isCover?.(mediaId) ?? false));
    this.toggleStatus(isFilled ? UiState.Uploading : UiState.Empty);

    return this.nodes.wrapper;
  }

  public applyTune(tuneName: string, status: boolean): void {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${tuneName}`, status);
  }

  public markCover(isCover: boolean): void {
    this.nodes.imageContainer.toggleAttribute('data-cover', isCover);
    this.nodes.coverButton?.setAttribute('aria-pressed', String(isCover));
  }

  public applyCrop(
    originalUrl: string,
    imagorPath?: string,
    crop?: string,
    croppedWidth?: number,
    croppedHeight?: number,
    originalWidth?: number,
    originalHeight?: number
  ): void {
    if (this.nodes.imageEl === undefined) {
      return;
    }

    if (typeof crop === 'string' && crop !== '') {
      this.nodes.imageContainer.dataset.crop = crop;
      this.nodes.imageEl.style.width = '100%';
      this.nodes.imageEl.setAttribute('src', this.buildPreviewUrl(imagorPath, crop) || originalUrl);
      this.setImageDimensions(croppedWidth, croppedHeight);

      return;
    }

    delete this.nodes.imageContainer.dataset.crop;
    this.nodes.imageEl.style.width = '';
    this.nodes.imageEl.setAttribute('src', originalUrl);
    this.setImageDimensions(originalWidth, originalHeight);
  }

  public showPreloader(src: string): void {
    this.nodes.imagePreloader.style.backgroundImage = `url(${src})`;
    this.toggleStatus(UiState.Uploading);
  }

  public hidePreloader(): void {
    this.nodes.imagePreloader.style.backgroundImage = '';
    this.toggleStatus(UiState.Empty);
  }

  public fillImage(url: string): void {
    this.nodes.imageEl?.remove();
    const tag = /\.mp4$/.test(url) ? 'VIDEO' : 'IMG';
    const attributes: Record<string, string | boolean> = {};
    let eventName = 'load';

    if (tag === 'VIDEO') {
      attributes.autoplay = true;
      attributes.loop = true;
      attributes.muted = true;
      attributes.playsinline = true;
      eventName = 'loadeddata';
    }

    this.nodes.imageEl = make(tag, this.CSS.imageEl, attributes);
    this.nodes.imageEl.addEventListener(eventName, () => {
      this.toggleStatus(UiState.Filled);
      this.nodes.imagePreloader.style.backgroundImage = '';
    });
    this.nodes.imageContainer.appendChild(this.nodes.imageEl);
    this.nodes.imageEl.setAttribute('src', url);
  }

  public fillCaption(text: string): void {
    this.nodes.caption.innerHTML = text;
  }

  public fillLink(text: string): void {
    this.nodes.link.innerHTML = text;
  }

  public fillAlt(text: string): void {
    this.nodes.alt.innerHTML = text;
  }

  private createFileButton(): HTMLElement {
    const button = make('div', [this.CSS.button]);

    button.innerHTML = this.config.buttonContent || `${IconPicture} ${this.api.i18n.t('Select an Image')}`;
    button.addEventListener('click', () => this.onSelectFile());

    return button;
  }

  private setImageDimensions(width?: number, height?: number): void {
    const hasDimensions = Number.isFinite(width) && Number.isFinite(height)
      && (width ?? 0) > 0 && (height ?? 0) > 0;

    this.nodes.imageDimensions.hidden = !hasDimensions;
    this.nodes.imageDimensions.textContent = hasDimensions ? `${width} × ${height}` : '';

    if (this.nodes.imageEl instanceof HTMLElement) {
      this.nodes.imageEl.style.aspectRatio = hasDimensions ? `${width} / ${height}` : '';
    }
  }

  private buildPreviewUrl(imagorPath: string | undefined, crop: string, maxWidth = 600): string {
    if (typeof this.config.mediaHost !== 'string' || this.config.mediaHost === ''
      || typeof imagorPath !== 'string' || imagorPath === '') {
      return '';
    }

    return `${this.config.mediaHost}/unsafe/${crop}/fit-in/${maxWidth}x0/${imagorPath}`;
  }

  private toggleStatus(status: UiState): void {
    Object.values(UiState).forEach((value) => {
      this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${value}`, status === value);
    });
  }

  private get CSS(): Record<string, string> {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      button: this.api.styles.button,
      wrapper: 'image-tool',
      imageContainer: 'image-tool__image',
      imagePreloader: 'image-tool__image-preloader',
      dimensions: 'image-tool__dimensions',
      imageEl: 'image-tool__image-picture',
      caption: 'image-tool__caption',
      source: 'image-tool__source',
      sourceLink: 'image-tool__source-link',
      controls: 'image-tool__controls',
      cover: 'image-tool__cover',
      remove: 'image-tool__remove',
    };
  }
}
