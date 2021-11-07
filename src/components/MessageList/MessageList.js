import React from "react";
import { messagesFilter } from "../../helpers/messageFunctions";
import { Message } from "../Message/Message";

/**
 * MessageList: Display all messages sorted by date.
 *
 * @param {Object} messages Node model object.
 */

export const MessageList = ({ messages }) => (
  <div id="landbot-messages-container" className="landbot-messages-container">
    {Object.values(messages)
      .filter(messagesFilter)
      .sort((a, b) => a.timestamp - b.timestamp)
      .map(({ key, author, text }) => (
        <Message key={key} author={author} text={text} />
      ))}
  </div>
);
