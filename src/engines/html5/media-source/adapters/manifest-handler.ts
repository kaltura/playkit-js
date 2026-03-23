/**
 * Handler for manifest parsing and audio track extraction
 */
export class ManifestHandler {
  /**
   * The manifest audio tracks extracted from manifest
   * @type {any[]}
   * @private
   */
  private _manifestAudioTracks: any[] = [];

  /**
   * Fetch and parse manifest data
   * @function fetchManifestData
   * @param {string} url - The manifest URL
   * @returns {Promise<void>} - Promise that resolves when manifest data is fetched and parsed
   */
  public fetchManifestData(url: string): Promise<void> {
    if (!url.includes('.m3u8')) {
      return Promise.resolve();
    }
    return fetch(url)
      .then(response => response.text())
      .then(manifestText => {
        this._parseHLSAudioTracks(manifestText);
      })
      .catch(() => {});
  }

  /**
   * Parse audio tracks from manifest text
   * @function _parseHLSAudioTracks
   * @param {string} manifestText - The manifest text content
   * @returns {void}
   * @private
   */
  private _parseHLSAudioTracks(manifestText: string): void {
    const lines = manifestText.split('\n');
    for (const line of lines) {
      if (line.startsWith('#EXT-X-MEDIA:TYPE=AUDIO')) {
        const trackUrl = this._parseHLSAudioTrack(line);
        this._manifestAudioTracks.push(trackUrl);
      }
    }
  }

  /**
   * Parse a single audio track line
   * @function _parseHLSAudioTrack
   * @param {string} line - The manifest line to parse
   * @returns {any} - Object containing the track URL
   * @private
   */
  private _parseHLSAudioTrack(line: string): any {
    const uriStart = line.indexOf('URI="') + 5;
    const uriEnd = line.indexOf('"', uriStart);
    const uri = line.substring(uriStart, uriEnd);
    return { url: uri };
  }

  /**
   * Extract flavor ID from URL
   * @function extractFlavorId
   * @param {string} url - The URL to extract flavor ID from
   * @returns {string} - The extracted flavor ID or empty string
   */
  public extractFlavorId(index: number): string {
    const url = this._manifestAudioTracks?.[index]?.url;
    if (!url) {
      return '';
    }
    const id = url.match(/flavorId\/([^/]+)/);
    return id ? id[1] : '';
  }

  /**
   * Reset the manifest audio tracks
   * @function reset
   * @returns {void}
   */
  public reset(): void {
    this._manifestAudioTracks = [];
  }
}
