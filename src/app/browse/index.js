import React, { useState, useEffect } from "react";

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
      <List>
        {user.map(
          item =>
            item.master && (
              <>
                <BlocoGeral>
                  <BlocoStatus>
                    <img src={item.avatar} />
                    <Status>
                      <h1>{item.name}</h1>
                      <p>{item.email}</p>
                    </Status>
                  </BlocoStatus>
                  <BlocoButton>
                    <button>Solicitar</button>
                  </BlocoButton>
                </BlocoGeral>
              </>
            )
        )}
      </List>
    </Container>
  );
}

export default Browse;
