# Player Events  

The player event system uses an event target-like API to register, unregister and dispatch events. The event's main purpose is to notify the player components about changes to the player state, ads, video progress, etc.

## Player Event Types  

Player events consist of two event types:

* HTML5 video events - These are various events sent by the browser when handling media that is embedded using the `<video>` element. The player runs on top of the HTML video element, which may trigger the events. Information about these types of events can be found [here](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events).
* Player custom events - These are **special** events that indicate a change in the state of the player that **does not exist in the HTML5 video event list** and that are related to the integral behavior of the player. These can include ads, switching to fullscreen, and tracks events.

## Registering to Player Events

You can listen to player events by adding an event listener to the player object.

```javascript
player.addEventListener(player.Event.PLAYER_STATE_CHANGED, e => {
  const payload = e.payload;
  // do something with the payload
});
```

## Dispatching Player Events

To dispatch a player event, type the following code:
```javascript
player.dispatchEvent(new player.core.FakeEvent(player.Event.REQUESTED_ENTER_FULLSCREEN, optionalData));
```

Another way to dispatch an player event is by extending / customizing the player. To emit an event, make sure your class extends [`fake-event-target`](../src/event/fake-event-target.js) class. Most of the classes inherit it. You can create a class, extend FakeEventTarget and then fire a [`Fake-Event`](../src/event/fake-event.js).

```javascript
class YourClass extends FakeEventTarget{
  someFunction(): void {
    const data = {};
    this.dispatchEvent(new FakeEvent(CustomEvents.AUTOPLAY_FAILED, data))
  }
}
```
> [Fake-event.js](../src/event/fake-event.js) and [fake-event-target.js](../src/event/fake-event-target.js) classes were created to provide support dispatching from non-DOM classes.

## Player Readiness  

The player ready promise indicates the that player has done loading the media and can start playing. The promise is resolved when the 'TRACKS_CHANGED' event is dispatched.
A basic usage of this feature looks like this:

```javascript
player.ready().then(() => player.pause());
```

## Events List

The full events list, which updates from time to time, can be found [here](../src/event/events.js).
