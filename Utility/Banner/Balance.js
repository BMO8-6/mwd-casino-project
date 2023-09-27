import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

const Balance = ({ users }) => {
  // when async isn't loaded yet, display placeholder
  if (users.length === 0) {
    return html` <div class="balance">Current Balance: LOADING...</div> `;
  }
  return html`
    <div class="balance">Current Balance: $${users[0]["balance"]}</div>
  `;
};

export default Balance;
