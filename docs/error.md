
# Error

An object representing an error that can be triggered / thrown.


## **Overview**

The errors are used to notify the user of a critical issue or log a recoverable one. An error object is consisted of three mandatory parameters: error [severity](severity), error [category](category) and an error [code](code). The forth parameter is an optional object with more information about the issue.

There are two severities to an error:
critical and recoverable.
A critical error is triggered in an error event, and is shown to the user as error overlay in the player itself.
A recoverable error is not shown to an end user, but appears in the console.

The errors are divided into nine categories, like network and DRM issues.

Each category has a number of codes that describe the problem more specifically.

---------

## **Creating an Error object**


Creating an error object:

```javascript
new Error(Error.Severity.CRITICAL,
    Error.Category.NETWORK,
    Error.Code.HTTP_ERROR,
    {'url': 'www.some-bad-url.com'})
```


## Registering to an error event
```javascript
player.addEventListener(player.Event.ERROR, e => {
 const error = e.payload;
 console.error(
	 error.severity,
   	 error.category,
   	 error.code,
   	 error.data);
})
```

## **Using Debug Mode**

To debug the player and view explicit error messages in the console, you'll need to use debug mode.

In order to run the player in debug mode, add '?debugKalturaPlayer' to the URI. More information about debugging and troubleshooting of the player can be found [here](here).

An example to an error message:
[Error] Player error NETWORK.HTTP_ERROR 'url':'www.some-bad-url.com'



