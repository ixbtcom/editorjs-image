/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {Array|string} classNames  - list or name of CSS class
 * @param  {object} attributes        - any attributes
 * @returns {Element}
 */
export declare function make(tagName: string, classNames?: string[] | string | null, attributes?: {
    [key: string]: any;
}): HTMLElement;
