export function parseMessage(data) {
  return {
    key: data.key,
    text: data.title || data.message,
    author: data.samurai !== undefined ? "bot" : "user",
    timestamp: data.timestamp,
    type: data.type,
  };
}

export function parseMessages(messages) {
  return Object.values(messages).reduce((obj, next) => {
    obj[next.key] = parseMessage(next);
    return obj;
  }, {});
}

export function messagesFilter(data) {
  /** Support for basic message types */
  return ["text", "dialog"].includes(data.type);
}

export function scrollBottom(container) {
  if (container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }
}
