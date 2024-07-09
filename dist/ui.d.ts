import { API } from '@editorjs/editorjs';
import { ImageToolData, ImageConfig } from './types/types';

/**
 * Enumeration representing the different states of the UI.
 */
declare enum UiState {
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
}
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
    private api;
    /**
     * Configuration for the image tool.
     */
    private config;
    /**
     * Callback function for selecting a file.
     */
    private onSelectFile;
    /**
     * Flag indicating if the UI is in read-only mode.
     */
    private readOnly;
    /**
     * Nodes representing various elements in the UI.
     */
    nodes: Nodes;
    /**
     * @param {object} ui - image tool Ui module
     * @param {object} ui.api - Editor.js API
     * @param {ImageConfig} ui.config - user config
     * @param {Function} ui.onSelectFile - callback for clicks on Select file button
     * @param {boolean} ui.readOnly - read-only mode flag
     */
    constructor({ api, config, onSelectFile, readOnly }: ConstructorParams);
    /**
     * CSS classes
     *
     * @returns {object}
     */
    get CSS(): Record<string, string>;
    /**
     * Renders tool UI
     *
     * @param {ImageToolData} toolData - saved tool data
     * @returns {Element}
     */
    render(toolData: ImageToolData): HTMLElement;
    /**
     * Creates upload-file button
     *
     * @returns {Element}
     */
    createFileButton(): HTMLElement;
    /**
     * Shows uploading preloader
     *
     * @param {string} src - preview source
     * @returns {void}
     */
    showPreloader(src: string): void;
    /**
     * Hide uploading preloader
     *
     * @returns {void}
     */
    hidePreloader(): void;
    /**
     * Shows an image
     *
     * @param {string} url - image source
     * @returns {void}
     */
    fillImage(url: string): void;
    /**
     * Shows caption input
     *
     * @param {string} text - caption text
     * @returns {void}
     */
    fillCaption(text: string): void;
    /**
     * Shows link input
     *
     * @param {string} text - link text
     * @returns {void}
     */
    fillLink(text: string): void;
    /**
     * Shows alt input
     *
     * @param {string} text - alt text
     * @returns {void}
     */
    fillAlt(text: string): void;
    /**
     * Changes UI status
     *
     * @param {string} status - see {@link Ui.status} constants
     * @returns {void}
     */
    toggleStatus(status: UiState): void;
    /**
     * Apply visual representation of activated tune
     *
     * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
     * @param {boolean} status - true for enable, false for disable
     * @returns {void}
     */
    applyTune(tuneName: string, status: boolean): void;
}
export {};
