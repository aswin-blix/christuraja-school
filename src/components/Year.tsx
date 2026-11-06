"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();

/** Current year, rendered on the client so static pages never go stale. */
export function Year() {
  const year = useSyncExternalStore(subscribe, getYear, () => 2026);
  return <>{year}</>;
}
