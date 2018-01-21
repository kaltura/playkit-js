# Player Events
The player event system uses an event target like API to register, unregister and dispatch events.

## Overview

The player events are consisted of two event types:

 1. HTML5 video events - various events sent by the browser when handling media embedded using the `<video>` element. The player runs on top of HTML video element, which may trigger the events. A reference to those events can be found [here](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events).

 2. Player custom events - special events indicating changes in the state of the player that does not exist in the html5 video event list and are related to the integral behavior of the player. Such as ads, fullscreen and tracks events.

Only DOM elements may be true EventTargets. Inside the player, we use fake events targets (fake-event-target.js), and fake events (fake-event) in order to dispatch events not from a DOM element.

## Registering to Player Events

You can listen to the player events by adding an event listener to the player object.

```javascript
player.addEventListener(player.Event.PLAYER_STATE_CHANGED, e => {
    const payload = e.payload;
	// do something with the payload
});
```

## Dispatching player events

To dispatch a player event, simply type the following code:
```javascript
player.dispatchEvent(new player.core.FakeEvent(player.Event.REQUESTED_ENTER_FULLSCREEN, optionalData));
```

However, if you want to extend the player, you can create a class that extends FakeEventTarget and fire a Fake-Event by yourself. Fake-event.js and fake-event-target.js classes were created to provide support dispatching from non-DOM classes.

```javascript
class YourClass extends FakeEventTarget{
	someFunction(): void{
		const data = {};
		this.dispatchEvent(new FakeEvent(CustomEvents.AUTOPLAY_FAILED, data))
	}
}
```

## Player readiness
The player ready promise indicated the player has done loading the media and can start play. The promise is resolved when the 'TRACKS_CHANGED' event is dispatched.
A basic usage would be:

```javascript
player.ready().then(() => player.pause());
```

## Events list
The full events list can be found [here](url%20to%20the%20events).
