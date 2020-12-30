//@flow
class ViewabilityManager {
  /**
   * The array of the used intersection observers.
   * @private {Array<window.IntersectionObserver>}
   */
  _observers: Array<window.IntersectionObserver> | null;
  constructor() {
    this._observers = [];
  }

  /**
   *
   * @param {HTMLElement} target - the targeted element to check its visibility
   * @param {number} threshold - a number between 0 to 1 that represents the minimum ratio considered visible
   * @param {Function} listener - the callback to be invoked when visibility is changed (and when starting to observe). The callback is called with a boolean param representing the visibility state
   * @returns {void}
   */
  observe(target: HTMLElement, threshold: number, listener: Function): void {
    const options = {
      threshold: threshold
    };
    const intersectionObserver = new window.IntersectionObserver((entries: Array<window.IntersectionObserverEntry>) => {
      const visible = entries[0].intersectionRatio >= threshold;
      (listener: Function).call(this, visible);
    }, options);
    intersectionObserver.observe(target);
    if (this._observers) {
      this._observers.push(intersectionObserver);
    }
  }

  /**
   * Detaches all event listeners from all targets.
   * @returns {void}
   */
  removeAll(): void {
    if (this._observers) {
      for (let observer of this._observers) {
        observer.disconnect();
      }
      this._observers = [];
    }
  }

  /**
   * cleans all memory allocations.
   * @override
   */
  destroy() {
    this.removeAll();
    this._observers = null;
  }
}
export {ViewabilityManager};
