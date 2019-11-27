import React from "react";
import { Link } from "react-router-dom";
import { Container, Empresa, Menu, Usuario, Status } from "./styles";

import Logo from "../../assets/bonsai.svg";

export default function header() {
  return (
    <Container>
      <Empresa>
        <img src={Logo} />
        <strong>MIAGLER</strong>
      </Empresa>
      <Menu>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link>
            <li>Curso</li>
          </Link>
          <Link to="/call/:id">
            <li>Mentor</li>
          </Link>
          <Link>
            <li>Contato</li>
          </Link>
        </ul>
      </Menu>
      <Usuario>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4DM3yTWY2h2c4wNr3qRudzEAYKkFfF3FCzEqRjdm_KBUwxp46w&s" />
        <Status>
          <strong>Iaron Aires</strong>
          <span>Sair</span>
        </Status>
      </Usuario>
    </Container>
  );
}
