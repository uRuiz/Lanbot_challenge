import React from 'react';
import { messagesFilter } from '../../helpers/messageFunctions';

export const Messages = ({messages}) => {
  return (
    <div id="landbot-messages-container" className="landbot-messages-container">
        {Object.values(messages)
          .filter(messagesFilter)
          .sort((a, b) => a.timestamp - b.timestamp)
          .map(message => (
            <article
              key={message.key}
              data-author={message.author}
              className="media landbot-message"
            >
              <figure className="media-left landbot-message-avatar">
                <p className="image is-64x64">
                  <img className="is-rounded" src="http://i.pravatar.cc/100" alt="" />
                </p>
              </figure>
              <div className="media-content landbot-message-content">
                <div className="content">
                  <p>{message.text}</p>
                </div>
              </div>
            </article>
          ))
        }
      </div>
  )
}