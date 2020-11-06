import React from "react";

import { AiFillHome, AiFillTrophy } from "react-icons/ai";
import { MdAttachMoney, MdInfoOutline } from "react-icons/md";
import { FaRedhat } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GiHand } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

import "./index.css";

const Buttons: React.FC = () => {
  return (
    <div id="buttons-container">
      <button>
        <AiFillHome size={33} color="#08D787" />
        <p>Home</p>
      </button>
      <button>
        <AiFillTrophy size={33} color="#08D787" />
        <p>Ranking</p>
      </button>
      <button>
        <MdAttachMoney size={33} color="#08D787" />
        <p>Administrativo</p>
      </button>
      <button>
        <FaRedhat size={33} color="#08D787" />
        <p>Treinamento</p>
      </button>
      <button>
        <CgProfile size={33} color="#08D787" />
        <p>Minha conta</p>
      </button>
      <button>
        <FiUsers size={33} color="#08D787" />
        <p>Time de vendas</p>
      </button>
      <button>
        <GiHand size={33} color="#08D787" />
        <p>Minhas vendas</p>
      </button>

      <button
        style={{
          marginTop: 50,
        }}
        className="info"
      >
        <MdInfoOutline size={38} color="#08D787" />
        <p>Dúvidas administrativas</p>
      </button>
      <button className="info">
        <MdInfoOutline size={38} color="#08D787" />
        <p>Dúvidas Técnicas de vendas</p>
      </button>
    </div>
  );
};

export default Buttons;
