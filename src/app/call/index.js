import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Bloc,
  Header,
  StatusBar,
  StatusImg,
  StatusButton,
  Status,
  Content,
  Footer,
  Rating
} from "./styles";

export default function call() {
  return (
    <Container>
      <Bloc>
        <Header>
          <StatusBar>
            <StatusImg>
              <img
                src="https://abrilexame.files.wordpress.com/2018/10/8dicas1.jpg"
                alt=""
              />
              <Status>
                <strong>Carlos Alberto</strong>
                <span>carlos@carlos.com</span>
              </Status>
            </StatusImg>
            <StatusButton>
              <Link to="/live">
                <button>Live</button>
              </Link>
            </StatusButton>
          </StatusBar>
        </Header>
        <Content>
          <p>
            I was first introduced to the Node.js community back in 2011, and it
            wasn't necessarily the tech that drew me into this insanely awesome
            project – it was the people. The incredibly driven, motivated,
            diverse set of people tackling deep issues in the web together with
            a myriad of tools they were inspired to write and discover the
            potential of.
          </p>
          <ul>
            <li>Hangout: carlos@carlos.com</li>
            <li>Skype: carlos@carlos.com</li>
            <li>GitHub: carlos@carlos.com</li>
            <li>WhatsApp: (011) 8786786877</li>
          </ul>
        </Content>
        <Footer>
          <h4>Horário disponível</h4>
          <ul>
            <li>08:00</li>
            <li>10:00</li>
            <li>14:00</li>
            <li>16:00</li>
            <li>20:00</li>
            <li>22:00</li>
          </ul>
          <Rating>
            <strong>Avaliação</strong>
            <span>90%</span>
          </Rating>
        </Footer>
      </Bloc>
    </Container>
  );
}
