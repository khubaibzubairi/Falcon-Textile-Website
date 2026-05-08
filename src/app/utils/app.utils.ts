import { signal, WritableSignal } from '@angular/core';

export interface CounterOptions<T = number> {
  from?: number;
  to: number;
  duration?: number;
  easing?: (t: number) => number;
  formatter?: (value: number) => T; // 👈 key change
}

export function createCounter<T = number>(options: CounterOptions<T>): WritableSignal<T> {
  const {
    from = 0,
    to,
    duration = 2000,
    easing = (t: number) => t,
    formatter = (v) => v as T,
  } = options;

  const count = signal(formatter(from));

  const startTime = performance.now();

  const animate = (time: number) => {
    const progress = Math.min((time - startTime) / duration, 1);
    const eased = easing(progress);

    const value = Math.floor(from + (to - from) * eased);
    count.set(formatter(value));

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);

  return count;
}
