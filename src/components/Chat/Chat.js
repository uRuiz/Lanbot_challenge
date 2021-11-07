import React from "react";

import { MessageList } from "../MessageList/MessageList";
import { InputMessage } from "../InputMessage/InputMessage";
import { useMessages } from "../../hooks/useMessages";

/**
 * Chat: Display the Chat component.
 *
 */

export const Chat = () => {
  const messages = useMessages();

  return (
    <>
      <div className="landbot-header">
        <h1 className="subtitle">Landbot</h1>
      </div>

      <MessageList messages={messages} />
      <InputMessage />
    </>
  );
};
