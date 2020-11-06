import React from "react";
import "./App.css";
import { FaRegPlayCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { CgClipboard } from "react-icons/cg";

import Card from "./components/Card";
import Buttons from "./components/Buttons";
import Input from "./components/Input";

function App() {
  return (
    <div className="container">
      <aside>
        <div className="center">
          <div className="circle"></div>
          <h1>Olá, Jonathan</h1>
          <p>Pronto pra vender hoje?</p>
          <button className="border-button">
            <h2>Master</h2>
          </button>
        </div>
        <Buttons />
      </aside>
      <body>
        <div className="right-container">
          <div className="video-container">
            <div className="square"></div>
            <div className="bottom">
              <button>
                <FaRegPlayCircle size={38} color="#000" />
                <h3> Assista Agora</h3>
              </button>
              <FiArrowRight
                style={{
                  marginRight: 10,
                }}
                size={38}
                color="#000"
              />
            </div>
          </div>

          <h1>Preparando seu link de vendas</h1>
          <div className="bottom-container">
            <div className="left-content">
              <div className="row">
                <Input placeholder="Nome do aluno" />
                <Input width={150} value="01/01/2020" />
              </div>
              <div className="row">
                <Input value="Gestão Comercial" />
                <Input width={150} value="R$ 279,00" />
              </div>

              <div className="comercial">
                <h1>Gestão Comercial</h1>
                <p>Pronto para encarar o mercado competitivo?</p>
                <p style={{ marginTop: 0 }}>
                  Vem logo para a Gestão Comercial!
                </p>
              </div>

              <div className="row-content">
                <button>
                  <p>Gerar link</p>
                </button>
                <div className="input">
                  <input type="text" value="https://fael.edu.com/joao_lima" />
                  <button className="icon">
                    <CgClipboard size={24} />
                  </button>
                </div>
              </div>

              <p className="link">
                Este é seu link exclusivo. Envie para seu cliente para fechar
                sua venda.
              </p>
              <p className="link">
                Somente as assinaturas realizadas por este link serão
                consideradas na sua conta.
              </p>
            </div>
            <Card />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
