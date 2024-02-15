import * as React from "react";
import * as pieces from "@pieces.app/pieces-os-client";
import { createRoot } from "react-dom/client";
import { render } from 'react-dom';
import { useEffect, useRef, useState } from "react";

class PiecesWS {
  ws: WebSocket;
  setMessage: ((message: string) => void) | undefined;

  constructor(setMessage: (message: string) => void) {
    this.ws = new WebSocket(`ws://localhost:1000/qgpt/stream`);
    let totalMessage = '';

    this.ws.onmessage = (msg) => {
      const json = JSON.parse(msg.data);

      const result = pieces.QGPTStreamOutputFromJSON(json);
      const answer: pieces.QGPTQuestionAnswer | undefined = result.question?.answers.iterable[0];
      // the message is complete, or we do nothing
      let totalMessage = ''; // Declare the variable 'totalMessage'
      if (result.status === 'COMPLETED') {
        // in the unlikely event there is no message, show an error message
        if (!totalMessage) {
          this.setMessage?.("ERROR: received no messages from the copilot websockets")
        }
        // render the new total message
        this.setMessage?.(
          totalMessage,
        );
        totalMessage = '';
        return;
      } else if (result.status === 'FAILED' || result.status === 'UNKNOWN') {
        this.setMessage?.('Message failed')
        totalMessage = '';
        return;
      }

      // add to the total message
      if (answer?.text) {
        totalMessage += answer.text;
      }
      // render the new total message
      this.setMessage?.(totalMessage);
    };

    // in the case that websocket is closed or errored we do some cleanup here
    const refreshSockets = (error?: any) => {
      if (error) console.error(error);
      totalMessage = '';
      this.setMessage?.('Websocket closed')
    };

    
  }
}

function App(): React.JSX.Element {  

  const [message, setMessage] = useState('');

  useEffect(() => {
    const piecesWS = new PiecesWS(setMessage);
  }, []);

    return (  
        <div>  
            <h1>Hello Pieces Dev Community :)</h1>  
        </div>
        );
    }

const rootElement = document.getElementById("root") as Element;  
const root = createRoot(rootElement);

root.render(<App />);