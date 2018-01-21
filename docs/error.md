
# Error

The errors are used to notify the user of a critical issue or log a recoverable one. An error object is consisted of three mandatory parameters: error [severity](../src/error/severity.js), error [category](../src/error/category.js) and an error [code](../src/error/code.js). The forth parameter is an optional object with more information about the issue.

> There are two severities to an error: critical and recoverable.
> - Critical error is triggered in an error event, and is shown to the user as error overlay in the player itself.
>- Recoverable error is not shown to an end user, but appears in the console.

## Errors Lists
The full errors lists can be found here:
- [Error severity list](../src/error/severity.js)
- [Error category list](../src/error/category.js)
- [Error code list](../src/error/code.js)


## Listening to an Error Event
You can listen to errors the player emits by listening to an '`error`' event.

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

## **Creating an Error**


If you wish to change / emit an error event, you need to create an error object in the following manner:

```javascript
new Error(Error.Severity.CRITICAL,
    Error.Category.NETWORK,
    Error.Code.HTTP_ERROR,
    {'url': 'www.some-bad-url.com'})
```

Then, you will need to dispatch an '`error`' event.

> More information about dispatching events can be found [here](./events.md).



## **Using Debug Mode to see Explicit Error Messeges**

To debug the player and view explicit error messages in the console, you'll need to use debug mode.

In order to run the player in debug mode, add '?debugKalturaPlayer' to the URI.

> More information about debugging and troubleshooting of the player can be found [here](./debug.md).

An example to an error message:

    [Error] Player error NETWORK.HTTP_ERROR 'url':'www.some-bad-url.com'



