import React from "react";

import { Container, Empresa, Menu, Usuario, Status } from "./styles";

import Logo from "../../assets/logo.svg";

export default function header() {
  return (
    <Container>
      <Empresa>
        <img src={Logo} />
        <strong>Miagle</strong>
      </Empresa>
      <Menu>
        <ul>
          <li>Home</li>
          <li>Curso</li>
          <li>Mentor</li>
          <li>Contato</li>
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
