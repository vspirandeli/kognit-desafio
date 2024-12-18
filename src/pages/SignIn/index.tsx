import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/kognit-logo.png';

import './styles.css';

export function SignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigation = useNavigate();

  async function signIn() {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsLoading(false);

    return navigation('/dashboard');    
  }

  return (
    <div className="container">
      <header className="header">
        <img
          alt="Kognit Logo"
          src={Logo}
          className="logo"
        />

        <h2>Faça login na sua conta Kognit</h2>
      </header>

      <div className="form-container">
        <form action="#" method="POST" className="form-container">
          <div className="form-group">
            <label htmlFor="email" aria-disabled={isLoading}>E-mail</label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              title="Digite um e-mail válido"
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <div className="password-header">
              <label htmlFor="password" aria-disabled={isLoading}>Senha</label>

              <a 
                href="#" 
                className={
                  isLoading ? "forgot-link link-disabled" : "forgot-link"
                } 
                aria-disabled={isLoading}
              >
                Esqueceu sua senha?
              </a>
            </div>

            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              disabled={isLoading}
            />
          </div>

          <button type="button" className="submit-btn" disabled={isLoading} onClick={signIn}>
            {isLoading ? (<div className="spinner"></div> ) : 'Login'}
          </button>
        </form>

        <p className="footer-text">
          Ainda não tem uma conta?{" "}
          <a href="#" className={isLoading ? "link-disabled" : "signup-link"} aria-disabled={isLoading}>
            Crie uma agora mesmo!
          </a>
        </p>
      </div>
    </div>
  );
  
}