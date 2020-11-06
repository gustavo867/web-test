import React from "react";

import "./index.css";

const Card: React.FC = () => {
  return (
    <div id="right-content">
      <div className="title-container">
        <h3>Resultado</h3>
        <button>
          <h3>09/09 a 15/09</h3>
        </button>
      </div>

      <div className="row">
        <h1 className="green">20:</h1>
        <p>Vendedores</p>
      </div>
      <div className="row">
        <h1 className="green">37:</h1>
        <p>Vendas</p>
      </div>
    </div>
  );
};

export default Card;
