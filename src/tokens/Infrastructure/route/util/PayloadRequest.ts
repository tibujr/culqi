export function getPayload(event): Object {
  if (!event) return {};
  if (!event.body) return event;
  const payload: object = event.body;
  Object.assign(payload, event.query);
  Object.assign(payload, event.path);
  return payload;
}
