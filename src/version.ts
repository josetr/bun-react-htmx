export function increaseVersion() {
  if (globalThis.version === undefined)
    globalThis.version = 0;
  return ++globalThis.version
}

export function getCurrentVersion() {
  if (globalThis.version === undefined)
    globalThis.version = 0
  return globalThis.version
}

declare global {
  var version: number | undefined;
}