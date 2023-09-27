import {
  html,
  useEffect,
  useState
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getAllUsers } from "../../Services/Users.js";
import Balance from "./Balance.js";

export default function BannerView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  // at the moment, since we only have one user, we just pass
  // the whole users object
  console.log("Displaying banner");
  return html`
    <div class="banner">
      <div class="logo">
        <a href="../../index.html">
          <img src="../../images/logo.jpg" />
        </a>
        <${Balance} users=${users} />
      </div>
      <ul class="navigation">
        <li><a href="/index.html">Home</a></li>
        <li><a href="/Games/blackjack/blackjack.html">Blackjack</a></li>
        <li><a href="/Games/roulette/roulette.html">Roulette</a></li>
      </ul>
    </div>
  `;
}
