import React, { useState, useEffect } from "react";

import api from "../../services/api";
import { Container, List, Status, BlocoStatus, BlocoButton } from "./styles";

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
        <BlocoStatus>
          {user.map(
            item =>
              item.master && (
                <>
                  <img src={item.avatar} />
                  <Status>
                    <h1>{item.name}</h1>
                    <p>{item.email}</p>
                  </Status>
                </>
              )
          )}
        </BlocoStatus>
        <BlocoButton>
          <button>Solicitar</button>
        </BlocoButton>
      </List>
    </Container>
  );
}

export default Browse;
