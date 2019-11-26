import styled from "styled-components";

export const Container = styled.div`
  background: #263a4d;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.7);
`;

export const Empresa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;

  img {
    height: 50px;
    width: 50px;
    margin-right: 20px;
  }

  strong {
    color: #fff;
  }
`;
export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    margin-left: 40px;
    li {
      margin-right: 40px;
      font-size: 15px;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #f3f3f3;
      font-family: "Roboto", sans-serif;
      cursor: pointer;
      transition: all 0.3s;
    }

    li:before {
      content: "";
      border-right: 1px solid #fff;
      margin-right: 10px;
    }
    li:hover {
      color: #b9b9b9;
    }
  }
`;
export const Usuario = styled.div`
  padding: 5px;
  display: flex;
  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid rgba(255, 255, 255, 0.7);
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
  color: #fff;

  strong {
    margin-bottom: 5px;
  }

  span {
    cursor: pointer;
  }
`;
