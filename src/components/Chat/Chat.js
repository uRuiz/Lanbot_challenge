import React from 'react';

import { Messages } from '../Messages/Messages';
import { InputMessage } from '../InputMessage/InputMessage';
import { useMessages } from '../../hooks/useMessages';

export const Chat = () => {

  const messages = useMessages();

  return (
    <>
      <div className="landbot-header">
        <h1 className="subtitle">Landbot</h1>
      </div>
      
      <Messages messages={messages}/>
      <InputMessage />
    </>
  );
}
