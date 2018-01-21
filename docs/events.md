# Player Events
The player event system uses an event target like API to register, unregister and dispatch events. The events main purpose is to notify player components about state changes, ads and video progress etc.

The player events are consisted of two event types:

 1. HTML5 video events - various events sent by the browser when handling media embedded using the `<video>` element. The player runs on top of HTML video element, which may trigger the events. A reference to those events can be found [here](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events).

 2. Player custom events - special events indicating changes in the state of the player that does not exist in the html5 video event list and are related to the integral behavior of the player. Such as ads, fullscreen and tracks events.

## Registering to Player Events

You can listen to the player events by adding an event listener to the player object.

```javascript
player.addEventListener(player.Event.PLAYER_STATE_CHANGED, e => {
    const payload = e.payload;
// do something with the payload
});
```

## Dispatching Player Events

To dispatch a player event, simply type the following code:
```javascript
player.dispatchEvent(new player.core.FakeEvent(player.Event.REQUESTED_ENTER_FULLSCREEN, optionalData));
```

Another possible use case is extending / customizing the player.
To emit an event, you have to make sure your class extends [`fake-event-target`](../src/event/fake-event-target.js) class. Most of the classes inherit it. You can create a class, extend FakeEventTarget and then fire a `[Fake-Event](../src/event/fake-event.js)`.

```javascript
class YourClass extends FakeEventTarget{
	someFunction(): void{
		const data = {};
		this.dispatchEvent(new FakeEvent(CustomEvents.AUTOPLAY_FAILED, data))
	}
}
```
> [Fake-event.js](../src/event/fake-event.js) and [fake-event-target.js](../src/event/fake-event-target.js) classes were created to provide support dispatching from non-DOM classes.

## Player Readiness
The player ready promise indicates the player has done loading the media and can start playing. The promise is resolved when the 'TRACKS_CHANGED' event is dispatched.
A basic usage would be:

```javascript
player.ready().then(() => player.pause());
```

## Events List
The full events list can be found [here](../src/event/events.js).
