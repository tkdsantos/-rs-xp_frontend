import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  img {
    width: 550px;
    height: 400px;
    border: 2px solid #888;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  }

  strong {
    font-size: 25px;
    color: #3b5998;
    margin-top: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  span {
    color: #555;
    margin-bottom: 10px;
    font-weight: bold;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
  }

  li {
    line-height: 5px;
    color: #777;
  }
`;
