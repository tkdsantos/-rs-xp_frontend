import React, { useState, useEffect } from "react";

import api from "../../services/api";
import { Container, Title, List } from "./styles";

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
                <Title>{item.name}</Title>
                <p>{item.email}</p>
              </>
            )
        )}
      </List>
    </Container>
  );
}

export default Browse;
