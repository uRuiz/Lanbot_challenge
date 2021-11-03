import { useState, useEffect } from "react";
import { core } from "../config/firebase_config";
import {
  parseMessage,
  parseMessages,
  scrollBottom,
} from "../helpers/messageFunctions";

/**
 * useMessages: Function to return all messages from firebase.
 * 
 * @returns {Array} Array of messages
 */

export const useMessages = () => {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    core.pipelines.$readableSequence.subscribe((data) => {
      setMessages((messages) => ({
        ...messages,
        [data.key]: parseMessage(data),
      }));
    });

    core.init().then((data) => {
      setMessages(parseMessages(data.messages));
    });
  }, []);

  useEffect(() => {
    const container = document.getElementById("landbot-messages-container");
    scrollBottom(container);
  }, [messages]);

  return messages;
};
