import React from 'react';

export default function Contact(){
  return (
    <main id="content">
      <h1>Contact</h1>
      <p>I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out using any of the methods below.</p>
      <ul style={{listStyle: 'none', padding: 0}}>
        <li style={{marginBottom: '1em'}}>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/angel-dimitrov/" target="_blank" rel="noreferrer">linkedin.com/in/angel-dimitrov</a>
        </li>
        <li style={{marginBottom: '1em'}}>
          <strong>GitHub:</strong> <a href="https://github.com/angeldimitrov94" target="_blank" rel="noreferrer">github.com/angeldimitrov94</a>
        </li>
      </ul>
    </main>
  );
}
