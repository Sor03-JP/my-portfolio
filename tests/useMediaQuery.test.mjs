import assert from "node:assert/strict";
import { mock, test } from "node:test";

// Capture the browser-store contract without adding a DOM or test-renderer dependency.
mock.module("react", {
  exports: {
    useCallback: (callback) => callback,
    useSyncExternalStore: (subscribe, getSnapshot, getServerSnapshot) => ({
      subscribe, getSnapshot, getServerSnapshot,
    }),
  },
});

const { useMediaQuery: createStore } = await import("../src/hooks/useMediaQuery.ts");

test("media queries support SSR, current matches, changes, and cleanup", (t) => {
  const query = "(max-width: 767px)";
  const store = createStore(query);
  assert.equal(store.getServerSnapshot(), false);

  const media = new EventTarget();
  media.matches = true;
  globalThis.window = {
    matchMedia: (requestedQuery) => {
      assert.equal(requestedQuery, query);
      return media;
    },
  };
  t.after(() => { delete globalThis.window; });

  assert.equal(store.getSnapshot(), true);
  const onChange = mock.fn();
  const unsubscribe = store.subscribe(onChange);
  media.matches = false;
  media.dispatchEvent(new Event("change"));
  assert.equal(onChange.mock.callCount(), 1);
  assert.equal(store.getSnapshot(), false);

  unsubscribe();
  media.dispatchEvent(new Event("change"));
  assert.equal(onChange.mock.callCount(), 1);
});
