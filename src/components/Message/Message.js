import React from "react";

/**
 * Message: Display a message.
 *
 * @param {Object} key Key of the message.
 * @param {Object} author Author of the message.
 * @param {Object} text Text of the message.
 */

export const Message = ({ key, author, text }) => (
  <article key={key} data-author={author} className="media landbot-message">
    <figure className="media-left landbot-message-avatar">
      <p className="image is-64x64">
        <img className="is-rounded" src="http://i.pravatar.cc/100" alt="" />
      </p>
    </figure>
    <div className="media-content landbot-message-content">
      <div className="content">
        <p>{text}</p>
      </div>
    </div>
  </article>
);
