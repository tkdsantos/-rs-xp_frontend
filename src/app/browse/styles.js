import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  flex: 1;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, #a2c4eb, #ffffff, #ffffff);
  box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  width: 60%;
  min-height: 160px;
  border-radius: 15px;
  text-decoration: none;
  padding: 30px;

  img {
    height: 130px;
    width: 130px;
    margin-right: 20px;
    border-radius: 100%;

    &:hover {
      opacity: 0.4;
    }
  }

  &:first-child {
    margin: 0;
  }
`;
export const Status = styled.div`
  padding: 0 15px 0 0;
  h1 {
    font-size: 25px;
    color: #444;
  }
  p {
    line-height: 15px;
    font-size: 17px;
    color: #999;
    margin-bottom: 15px;
  }

  span {
    line-height: 15px;
    font-size: 14px;
    color: #667;
  }
`;

export const BlocoGeral = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
  padding-bottom: 0px;
`;

export const BlocoStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlocoButton = styled.div`
  button {
    border: 0;
    background: #1db854;
    color: #fff;
    padding: 10px 30px;
    border-radius: 12px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover {
    background: ${darken(0.1, "#1db854")};
  }
`;
