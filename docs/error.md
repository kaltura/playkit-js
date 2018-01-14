## Error

An object representing an error that can be triggered / thrown.

----------

**Overview**

The errors are used to notify the user of a critical issue or log a recoverable one. An error object is consisted of three mandatory parameters: error severity, error category and an error code. The forth parameter is a mandatory object with more information about the issue.

There are two severities to an error:
critical and recoverable.

A critical error is triggered in an error event, and is shown to the user as error overlay in the player itself.

A recoverable error is not shown to an end user, but appears in the console.

---------
**Creating an Error object**

 Import the error class:


    import Error from 'path/to/error/class/../error'

Creating an error object:

    new Error(Error.Severity.CRITICAL,
		    Error.Category.NETWORK,
		    Error.Code.HTTP_ERROR,
		     {'url': 'www.some-bad-url.com'})

**Error string**

Browser console string: (will be present when critical & recoverable)

[Error] Player error NETWORK.HTTP_ERROR 'url':'www.some-bad-url.com'

**Severity list:**

    Name	Type	Description
    RECOVERABLE	1	An error occurred, but the Player is attempting to recover from the error. If the Player cannot ultimately recover, it still may not throw a CRITICAL error. For example, retrying for a media segment will never result in a CRITICAL error (the Player will just retry forever).
    CRITICAL	2	A critical error that the library cannot recover from. These usually cause the Player to stop loading or updating. A new manifest must be loaded to reset the library.

**Categories List:**


    Name	Type	Description
    NETWORK	1	Errors from the network stack.
    TEXT	2	Errors parsing text streams.
    MEDIA	3	Errors parsing or processing audio or video streams.
    MANIFEST	4	Errors parsing the Manifest.
    STREAMING	5	Errors related to streaming.
    DRM	6	Errors related to DRM.
    PLAYER	7	Miscellaneous errors from the player.
    ADS	8	Errors related to ads.
    STORAGE	9	Errors in the database storage (offline).


**Codes lists:**

  // TODO - link to the code.

