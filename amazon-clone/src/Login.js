import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="Https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Anmelden</h1>

        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Passwort</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login__signInButton">Anmelden</button>
        </form>
        <p>
          Mit Ihrer Anmeldung erklären Sie sich mit unseren Allgemeinen
          Geschäftsbedingungen einverstanden. Bitte lesen Sie unsere
          Datenschutzerklärung, unsere Hinweise zu Cookies und unsere Hinweise
          zu interessenbasierter Werbung.
        </p>
        <button className="login__registerButton">
          Erstelle Sie Ihr Amazon-Konto
        </button>
      </div>
    </div>
  );
}
