import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import {
  Container,
  List,
  Status,
  BlocoStatus,
  BlocoButton,
  BlocoGeral
} from "./styles";

function Browse() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/user");

      setUser(response.data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      {user.map(
        item =>
          item.master && (
            <>
              <List>
                <BlocoGeral>
                  <BlocoStatus>
                    <img src={item.avatar} alt="avatar" />
                    <Status>
                      <h1>{item.name}</h1>
                      <p>{item.email}</p>
                      <span>{item.bio}</span>
                    </Status>
                  </BlocoStatus>
                  <BlocoButton>
                    <Link to={`/call/${item.id}`}>
                      <button>Solicitar Mentoria</button>
                    </Link>
                  </BlocoButton>
                </BlocoGeral>
              </List>
            </>
          )
      )}
    </Container>
  );
}

export default Browse;
