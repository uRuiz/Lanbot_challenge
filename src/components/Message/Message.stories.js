import React from "react";

import { Message } from "./Message";

const Template = (args) => <Message {...args} />;

export const DefaultMessage = Template.bind({});

DefaultMessage.args = {
  key: "-MmHxOOTRvv9AwsAPMdm",
  text: "Hi! Nice to meet you.",
  author: "bot",
};

export default {
  component: Message,
  title: "Components/Message",
};
