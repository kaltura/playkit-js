
# Errors

Errors are used to notify a user when a critical issue has occurred or to log recoverable issues. An error object consists of three mandatory parameters: 

- Error [severity](../src/error/severity.js)
- Error [category](../src/error/category.js)
- Error [code](../src/error/code.js). 

The forth parameter is an optional object with additional information about the issue.

> There are two severities to an error: critical and recoverable.

> - A critical error is triggered in an error event, and is shown to the user as error overlay in the player itself.
> - A recoverable error is not shown to an end user, but appears in the console.

## Error Lists
You'll find the full lists of errors here:
- [Error severity list](../src/error/severity.js)
- [Error category list](../src/error/category.js)
- [Error code list](../src/error/code.js)


## Listening to an Error Event
You can listen to errors the player emits by listening to an '`error`' event as follows:

```javascript
player.addEventListener(player.Event.ERROR, e => {
  const error = e.payload;
  console.error(
	error.severity,
   	error.category,
   	error.code,
   	error.data);
});
```

## Creating an Error 


If you wish to change / emit an error event, you'll need to create an error object in the following manner:

```javascript
new Error(Error.Severity.CRITICAL,
    Error.Category.NETWORK,
    Error.Code.HTTP_ERROR,
    {'url': 'www.some-bad-url.com'});
```

Next, you'll need to dispatch an '`error`' event.

> You'll find additional information about dispatching events [here](./events.md).



## Using Debug Mode to see Explicit Error Messeges

Use the debug mode in the player to view explicit error messages in the console. To run the player in debug mode, set config.debugLevel to **true**.

> You'll find additional information about debugging and troubleshooting the player [here](https://github.com/kaltura/kaltura-player-js/blob/master/docs/debugging.md).

## Error Message Example

Here's an example of an error message:

    [Error] Player error NETWORK.HTTP_ERROR 'url':'www.some-bad-url.com'



