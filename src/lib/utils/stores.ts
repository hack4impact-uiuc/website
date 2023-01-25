import { writable, type Subscriber } from "svelte/store";

type ClockState = { time: number; paused: boolean };

export function createClock(startPlaying = true) {
  let everStarted = false;
  let interval: number | null = null;
  let stoppedTime = 0;
  let timeDelta = 0;

  const getTime = () => {
    return performance.now() - timeDelta;
  };

  const play = (set: Subscriber<ClockState>) => {
    if (interval === null) {
      if (stoppedTime) {
        timeDelta += performance.now() - stoppedTime;
      }
      interval = setInterval(() =>
        set({ time: getTime(), paused: false })
      ) as unknown as number;
    }
  };

  const pause = (set?: Subscriber<ClockState>) => {
    if (interval !== null) {
      clearInterval(interval);
      stoppedTime = performance.now();
      set?.({ time: getTime(), paused: true });
      interval = null;
    }
  };

  const store = writable<ClockState>(
    { time: performance.now(), paused: startPlaying },
    (set) => {
      if (everStarted || startPlaying) {
        play(set);
      }

      everStarted = true;
      return pause;
    }
  );

  return {
    play: () => play(store.set),
    pause: () => pause(store.set),
    reset: () => {
      timeDelta = 0;
      store.update((state) => ({ time: getTime(), paused: state.paused }));
    },
    subscribe: store.subscribe,
  };
}
