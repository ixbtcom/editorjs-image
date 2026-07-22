import { API } from '@editorjs/editorjs';
import { ImageConfig, ImageToolData } from './types/types';

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
    nodes: Nodes;
    private api;
    private config;
    private readOnly;
    private onSelectFile;
    private onDelete;
    private onSetCover;
    constructor({ api, config, onSelectFile, onDelete, onSetCover, readOnly }: ConstructorParams);
    render(toolData: ImageToolData): HTMLElement;
    applyTune(tuneName: string, status: boolean): void;
    markCover(isCover: boolean): void;
    applyCrop(originalUrl: string, imagorPath?: string, crop?: string, croppedWidth?: number, croppedHeight?: number, originalWidth?: number, originalHeight?: number): void;
    showPreloader(src: string): void;
    hidePreloader(): void;
    fillImage(url: string): void;
    fillCaption(text: string): void;
    fillLink(text: string): void;
    fillAlt(text: string): void;
    private createFileButton;
    private setImageDimensions;
    private buildPreviewUrl;
    private toggleStatus;
    private get CSS();
}
export {};
