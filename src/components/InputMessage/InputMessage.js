import React, { useState } from "react";
import { core } from "../../config/firebase_config";

/**
 * InputMessage: Display an input.
 *
 */

export const InputMessage = () => {
  const [input, setInput] = useState("");

  const submit = () => {
    if (input !== "") {
      core.sendMessage({ message: input });
      setInput("");
    }
  };

  return (
    <div className="landbot-input-container">
      <div className="field">
        <div className="control">
          <input
            className="landbot-input"
            type="text"
            placeholder="Type here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                submit();
              }
            }}
          />
          <button
            className="button landbot-input-send"
            onClick={submit}
            disabled={input === ""}
          >
            <span className="icon is-large">
              <i className="fas fa-paper-plane fa-lg" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
