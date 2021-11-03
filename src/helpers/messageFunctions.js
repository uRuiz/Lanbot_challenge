export function parseMessages(messages) {
  return Object.values(messages).reduce((obj, next) => {
    obj[next.key] = parseMessage(next);
    return obj;
  }, {});
}

/**
 * parseMessage: Transform data.
 * @param {Object} data ;
 *
 */

export function parseMessage(data) {
  return {
    key: data.key,
    text: data.title || data.message,
    author: data.samurai !== undefined ? "bot" : "user",
    timestamp: data.timestamp,
    type: data.type,
  };
}

/**
 * messagesFilter: Filter text and dialog messages.
 * @param {Object} data messages;
 *
 */

export function messagesFilter(data) {
  /** Support for basic message types */
  return ["text", "dialog"].includes(data.type);
}

/**
 * scrollBottom: Scroll to the bottom.
 * @param {Object} container HTML document;
 *
 */

export function scrollBottom(container) {
  if (container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }
}
