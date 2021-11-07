import React from "react";

import { MessageList } from "./MessageList";

export default {
  title: "MessageList",
  component: MessageList,
};

const Template = (args) => <MessageList messages={args} />;

export const MessageStory = Template.bind({});

MessageStory.args = {
  "-MmHxOOTRvv9AwsAPMdm": {
    key: "-MmHxOOTRvv9AwsAPMdm",
    text: "Hi! Nice to meet you.",
    author: "bot",
    timestamp: 1634553141755.634,
    type: "text",
  },
  "-MmHxOOTRvv9AwsAPMds": {
    key: "-MmHxOOTRvv9AwsAPMds",
    text: "Ok, bye",
    author: "bot",
    timestamp: 1634553141788.634,
    type: "text",
  },
};