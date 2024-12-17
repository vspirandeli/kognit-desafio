import React from "react";

import Logo from '../assets/kognit-logo.png';

import './signIn.css';

export default function SignIn() {
  return (
    <div>
      <div className="container">

      <div className="header">
        <img
          alt="Kognit Logo"
          src={Logo}
          className="logo"
        />

        <h2>Faça login na sua conta Kognit</h2>
      </div>

      <div className="form-container">
        <form action="#" method="POST" className="form-container">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              title="Digite um e-mail válido"
            />
          </div>

          <div className="form-group">
            <div className="password-header">
              <label htmlFor="password">Senha</label>

              <a href="#" className="forgot-link">
                Esqueceu sua senha?
              </a>
            </div>

            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
            />
          </div>

          <div>
            <button type="submit" className="submit-btn">
              Login
            </button>
          </div>
        </form>

        <p className="footer-text">
          Ainda não tem uma conta?{" "}
          <a href="#" className="signup-link">
            Crie uma agora mesmo!
          </a>
        </p>
      </div>
    </div>
    </div>
  )
}