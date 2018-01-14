# Error

An object representing an error that can be triggered / thrown.


## **Overview**

The errors are used to notify the user of a critical issue or log a recoverable one. An error object is consisted of three mandatory parameters: error severity, error category and an error code. The forth parameter is a mandatory object with more information about the issue.

There are two severities to an error:
critical and recoverable.

A critical error is triggered in an error event, and is shown to the user as error overlay in the player itself.

A recoverable error is not shown to an end user, but appears in the console.

---------

## **Creating an Error object**


 Import the error class:

```javascript
import Error from 'path/to/error/class/../error'
```


Creating an error object:

```javascript

new Error(Error.Severity.CRITICAL,
		    Error.Category.NETWORK,
		    Error.Code.HTTP_ERROR,
		     {'url': 'www.some-bad-url.com'})
```

## **Error string**

Browser console string: (will be present when critical & recoverable)

[Error] Player error NETWORK.HTTP_ERROR 'url':'www.some-bad-url.com'

## **Severity list:**

<table class="props wrapped confluenceTable stickyTableHeaders" resolved="" style="padding: 0px;"><colgroup><col><col><col></colgroup><tr><th style="text-align: left;" class="confluenceTh">Name</th><th style="text-align: left;" class="confluenceTh">Type</th><th class="last confluenceTh" style="text-align: left;">Description</th></tr></thead><tbody><tr><td class="name confluenceTd" style="text-align: left;"><code>RECOVERABLE</code></td><td class="type confluenceTd" style="text-align: left;"><span class="param-type">1</span></td><td class="description last confluenceTd" style="text-align: left;">An error occurred, but the Player is attempting to recover from the error. If the Player cannot ultimately recover, it still may not throw a CRITICAL error. For example, retrying for a media segment will never result in a CRITICAL error (the Player will just retry forever).</td></tr><tr><td class="name confluenceTd" style="text-align: left;"><code>CRITICAL</code></td><td class="type confluenceTd" style="text-align: left;"><span class="param-type">2</span></td><td class="description last confluenceTd" style="text-align: left;">A critical error that the library cannot recover from. These usually cause the Player to stop loading or updating. A new manifest must be loaded to reset the library.</td></tr></tbody></table>


## **Categories List:**


 <table class="props wrapped confluenceTable stickyTableHeaders" resolved="" style="padding: 0px;"><colgroup><col><col><col></colgroup><tr><th style="text-align: left;" class="confluenceTh">Name</th><th style="text-align: left;" class="confluenceTh">Type</th><th class="last confluenceTh" style="text-align: left;">Description</th></tr></thead><tbody><tr><td class="name confluenceTd" style="text-align: left;"><code>NETWORK</code></td><td class="type confluenceTd" style="text-align: left;"><span class="param-type">1</span></td><td class="description last confluenceTd" style="text-align: left;">Errors from the network stack.</td></tr><tr><td class="name confluenceTd" style="text-align: left;"><code>TEXT</code></td><td class="type confluenceTd" style="text-align: left;"><span class="param-type">2</span></td><td class="description last confluenceTd" style="text-align: left;">Errors parsing text streams.</td></tr><tr><td class="name confluenceTd" style="text-align: left;"><code>MEDIA</code></td><td class="type confluenceTd" style="text-align: left;"><span class="param-type">3</span></td><td class="description last confluenceTd" style="text-align: left;">Errors parsing or processing audio or video streams.</td></tr><tr><td class="name confluenceTd" style="text-align: left;"><code>MANIFEST</code></td><td class="type confluenceTd" style="text-align: left;"><span class="param-type">4</span></td><td class="description last confluenceTd" style="text-align: left;">Errors parsing the Manifest.</td></tr><tr><td class="name confluenceTd" style="text-align: left;"><code>STREAMING</code></td><td class="type confluenceTd" style="text-align: left;"><span class="param-type">5</span></td><td class="description last confluenceTd" style="text-align: left;">Errors related to streaming.</td></tr><tr><td class="name confluenceTd" style="text-align: left;"><code>DRM</code></td><td class="type confluenceTd" style="text-align: left;"><span class="param-type">6</span></td><td class="description last confluenceTd" style="text-align: left;">Errors related to DRM.</td></tr><tr><td class="name confluenceTd" style="text-align: left;"><code>PLAYER</code></td><td class="type confluenceTd" style="text-align: left;"><span class="param-type">7</span></td><td class="description last confluenceTd" style="text-align: left;">Miscellaneous errors from the player.</td></tr><tr><td class="name confluenceTd" style="text-align: left;"><code>ADS</code></td><td class="type confluenceTd" style="text-align: left;"><span class="param-type">8</span></td><td class="description last confluenceTd" style="text-align: left;">Errors related to ads.</td></tr><tr><td class="name confluenceTd" style="text-align: left;"><code>STORAGE</code></td><td class="type confluenceTd" style="text-align: left;"><span class="param-type">9</span></td><td class="description last confluenceTd" style="text-align: left;">Errors in the database storage (offline).</td></tr></tbody></table>


## **Codes lists:**

  // TODO - link to the code.


