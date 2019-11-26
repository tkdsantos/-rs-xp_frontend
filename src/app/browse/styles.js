import styled from "styled-components";

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
  background: #f6f6f6;
  margin-left: 20px;
  width: 70%;
  min-height: 200px;
  border-radius: 20px;
  text-decoration: none;
  padding: 30px;
  margin-bottom: 20px;

  img {
    height: 60px;
    width: 60px;
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
  h1 {
    font-size: 25px;
    color: #666;
  }
  p {
    line-height: 15px;
    font-size: 17px;
    color: #999;
  }
`;

export const BlocoGeral = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
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
    padding: 10px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover {
    background: #1db879;
  }
`;
