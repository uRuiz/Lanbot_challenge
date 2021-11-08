import React from "react";

import { MessageList } from "./MessageList";

export default {
  title: "Components/MessageList",
  component: MessageList,
};

export const MessageListStory = (args) => <MessageList messages={args} />;
