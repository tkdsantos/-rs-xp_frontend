import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Bloc = styled.div`
  width: 600px;
  min-height: 500px;
  background: #3b5998;
  border-radius: 4px;
  padding: 20px;
`;
export const Header = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 2px solid #fff;
  }
`;

export const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StatusImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StatusButton = styled.div`
  button {
    border: 0;
    font-size: 20px;
    padding: 5px 10px;
    background: #228b22;
    color: #fff;
    letter-spacing: 1px;
    border-radius: 4px;
    transition: all 0.3s;
    text-transform: uppercase;
  }
  button:hover {
    background: #77dd55;
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  strong {
    color: #fff;
    font-size: 20px;
    letter-spacing: 1px;
  }

  span {
    color: #f3f3f3;
    font-family: "Roboto", sans-serif;
    letter-spacing: 1px;
  }
`;
export const Content = styled.div`
  margin: 20px;

  p {
    color: #f9f9f9;
    letter-spacing: 1px;
    margin-bottom: 15px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    flex-direction: row;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 20px;

    li {
      color: #b6b6b6;
      letter-spacing: 0.5px;
    }
  }
`;
export const Footer = styled.div`
  h4 {
    color: #f3f3f3;
    letter-spacing: 1px;
    font-family: "Roboto", sans-serif;
    padding-bottom: 10px;
  }

  ul {
    display: flex;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 20px;
    li {
      color: #f9f9f9;
      padding-left: 10px;
    }
    li::before {
      content: "";
      border-left: 1px solid #b6b6b6;
      padding-right: 10px;
    }
  }
`;

export const Rating = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    font-size: 20px;
    color: #f9f9f9;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  span {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
  }
`;
