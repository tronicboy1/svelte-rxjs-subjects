import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";
/**
 * Adjusted to be usable with Svelte templates.
 *
 * A Subject is a special type of Observable that allows values to be
 * multicasted to many Observers. Subjects are like EventEmitters.
 *
 * Every Subject is an Observable and an Observer. You can subscribe to a
 * Subject, and you can call next to feed values as well as error and complete.
 *
 * @example
 * <script>
 *   const text$ = new SvelteSubject();
 *   setTimeout(() => text$.next('Hello World'), 100);
 * </script>
 *
 * <h1>{$text$}</h1>
 */
export declare class SvelteSubject<T> extends Subject<T> {
    set(value: T): void;
}
/**
 * Adjusted to be usable with Svelte templates.
 *
 * A variant of Subject that requires an initial value and emits its current
 * value whenever it is subscribed to.
 *
 * @example
 * <script>
 *   const text$ = new SvelteBehaviorSubject('Hello');
 *   setTimeout(() => text$.next('Hello Carl'), 100);
 * </script>
 *
 * <h1>{$text$}</h1>
 */
export declare class SvelteBehaviorSubject<T> extends BehaviorSubject<T> {
    set(value: T): void;
}
/**
 * Adjusted to be usable with Svelte templates.
 *
 * A variant of {@link Subject} that "replays" old values to new subscribers by emitting them when they first subscribe.
 *
 * `ReplaySubject` has an internal buffer that will store a specified number of values that it has observed. Like `Subject`,
 * `ReplaySubject` "observes" values by having them passed to its `next` method. When it observes a value, it will store that
 * value for a time determined by the configuration of the `ReplaySubject`, as passed to its constructor.
 */
export declare class SvelteReplaySubject<T> extends ReplaySubject<T> {
    set(value: T): void;
}
