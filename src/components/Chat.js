import React, { useState, useEffect } from 'react';

var core = new window.Landbot.Core({
  firebase: window.firebase,
  brandID: 12235,
  channelToken: 'H-441480-B0Q96FP58V53BJ2J',
  welcomeUrl: 'https://welcome.landbot.io/',
  welcome: [
    { samurai: -1, type: 'text', message: 'Type something to start a conversation with landbot.' }
  ],
});

export default function Chat() {
  const [messages, setMessages] = useState({});
  const [input, setInput] = useState('');

  useEffect(() => {
    core.pipelines.$readableSequence.subscribe(data => {
      setMessages(messages => ({
        ...messages,
        [data.key]: parseMessage(data),
      }))
    });

    core
      .init()
      .then(data => {
        setMessages(
          parseMessages(data.messages)
        );
      });
  }, []);

  useEffect(() => {
    const container = document.getElementById('landbot-messages-container');
    scrollBottom(container);
  }, [messages]);

  const submit = () => {
    if (input !== '') {
      core.sendMessage({ message: input });
      setInput('');
    }
  };

  return (
    <>
      <div className="landbot-header">
        <h1 className="subtitle">Landbot</h1>
      </div>

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

      <div className="landbot-input-container">
        <div className="field">
          <div className="control">
            <input
              className="landbot-input"
              type="text"
              placeholder="Type here..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyUp={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  submit();
                }
              }}
            />
            <button
              className="button landbot-input-send"
              onClick={submit}
              disabled={input === ''}
            >
              <span className="icon is-large">
                <i className="fas fa-paper-plane fa-lg"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function parseMessages(messages) {
  return Object
    .values(messages)
    .reduce((obj, next) => {
      obj[next.key] = parseMessage(next);
      return obj;
    }, {});
}

function parseMessage(data) {
  return {
    key: data.key,
    text: data.title || data.message,
    author: data.samurai !== undefined ? 'bot' : 'user',
    timestamp: data.timestamp,
    type: data.type,
  };
}

function messagesFilter(data) {
  /** Support for basic message types */
  return ['text', 'dialog'].includes(data.type);
}

function scrollBottom(container) {
  if (container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    });
  }
}