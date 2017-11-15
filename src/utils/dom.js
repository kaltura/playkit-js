// @flow
export default class Dom {
  /**
   * Adds class name to an element
   * @param {Element} element - an HTML element
   * @param {string} className - a class name
   * @returns {void}
   */
  static addClassName(element: HTMLElement, className: string): void {
    if (element.classList) {
      element.classList.add(className);
    } else {
      if (!Dom.hasClassName(element, className)) {
        element.className += className;
      }
    }
  }

  /**
   * Removes class name from an element
   * @param {Element} element - an HTML element
   * @param {string} className - a class name
   * @returns {void}
   */
  static removeClassName(element: HTMLElement, className: string): void {
    if (element.classList) {
      element.classList.remove(className);
    } else {
      if (Dom.hasClassName(element, className)) {
        element.className = element.className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '');
      }
    }
  }

  /**
   * Checks if an element has a class name
   * @param {Element} element - an HTML element
   * @param {string} className - a class name
   * @returns {boolean} - weather an element contains a class name
   */
  static hasClassName(element: HTMLElement, className: string) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
  }

  /**
   * Add element attribute
   * @param {Element} element - an HTML element
   * @param {string} name - attribute name
   * @param {string} value - attribute value
   * @returns {void}
   */
  static setAttribute(element: HTMLElement, name: string, value: string): void {
    element.setAttribute(name, value);
  }

  /**
   * Remove element attribute
   * @param {Element} element - an HTML element
   * @param {string} name - attribute name
   * @returns {void}
   */
  static removeAttribute(element: HTMLElement, name: string): void {
    element.removeAttribute(name);
  }

  /**
   * Set element style
   * @param {Element} element - an HTML element
   * @param {string} name - style name
   * @param {string} value - style value
   * @returns {void}
   */
  static setStyle(element: HTMLElement, name: string, value: string): void {
    if (element.style.getPropertyValue(name) !== undefined) {
      element.style.setProperty(name, value);
    }
  }

  /**
   * Adds a node to the end of the list of children of a specified parent node.
   * @param {Element} parent - The parent node.
   * @param {Element} child - The child node.
   * @returns {void}
   */
  static appendChild(parent: ?Element, child: ?Element): void {
    if (parent && child && parent.appendChild) {
      parent.appendChild(child);
    }
  }

  /**
   * Removes an element from his parent node.
   * @param {Element} parent - The parent node.
   * @param {Element} child - The child node.
   * @returns {void}
   */
  static removeChild(parent: ?Node, child: ?Element): void {
    if (parent && child && parent.removeChild) {
      parent.removeChild(child);
    }
  }

  /**
   * Prepend HTML element
   * @param {HTMLElement} child - the child to prepend
   * @param {HTMLElement} parent - the parent to preprend to
   * @returns {void}
   */
  static prependTo(child: HTMLElement, parent: HTMLElement): void {
    if (parent.firstChild) {
      parent.insertBefore(child, parent.firstChild);
    } else {
      parent.appendChild(child);
    }
  }

  /**
   * Returns a reference to the element by its ID.
   * @param {string} id - The desired id.
   * @returns {Element} - The element with the desired id.
   */
  static getElementById(id: string): any {
    return document.getElementById(id);
  }

  /**
   * Creates the HTML element specified by tagName.
   * @param {string} tagName - The tag name.
   * @returns {Element} - The element just created.
   */
  static createElement(tagName: string): any {
    return document.createElement(tagName);
  }

  /**
   * Loads script asynchronously.
   * @param {string} url - The url to load.
   * @return {Promise} - The loading promise.
   * @public
   */
  static loadScriptAsync(url: string): Promise<*> {
    return new Promise((resolve, reject) => {
      let r = false,
        t = document.getElementsByTagName("script")[0],
        s = this.createElement("script");
      s.type = "text/javascript";
      s.src = url;
      s.async = true;
      s.onload = s.onreadystatechange = function () {
        if (!r && (!this.readyState || this.readyState === "complete")) {
          r = true;
          resolve(this);
        }
      };
      s.onerror = s.onabort = reject;
      if (t && t.parentNode) {
        t.parentNode.insertBefore(s, t);
      }
    });
  }
}
