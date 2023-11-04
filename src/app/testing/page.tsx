'use client'
import React, { useState, useEffect } from "react";

function AIStream() {
  const [text, setText] = useState('');

  useEffect(() => {
    var counter = 0;
    const timer = setInterval(() => {
        // this is mocking a stream
        // replace this whole section with a call to your AI Text Generation API
        // that will push results in real-time
        if (counter === 0) {
            setText("This is example text ^1 ");
        } else if (counter === 1) {
            setText(prevText => prevText + "More example text ^2 ");
        } else if (counter === 2) {
            setText(prevText => prevText + "Even more example text ^3 ");
        } else {
            clearInterval(timer);
        }
        counter++;
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {text.split('^').map((chunk, index) => {
          if (index % 2 === 0) { return chunk; }
          else { return <sup>{chunk}</sup>; }
      })}
    </div>
  );
}
export default AIStream;