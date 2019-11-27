import React from "react";

import { Container } from "./styles";

import Live from "../../assets/live.JPG";

export default function live() {
  return (
    <Container>
      <img src={Live} alt="" />
      <strong>Aula 1</strong>
      <span>Mentor: Carlos Alberto</span>
      <ul>
        <li>Hangout: carlos@carlos.com</li>
        <li>Skype: carlos@carlos.com</li>
        <li>GitHub: carlos@carlos.com</li>
        <li>WhatsApp: (011) 8786786877</li>
      </ul>
    </Container>
  );
}
