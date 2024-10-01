import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Error404() {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Página não encontrada</h2>
        <p className="error-description">
          Oops! Parece que a página que você está procurando não existe.
        </p>
        <Link to="/" className="btn-home">
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}
