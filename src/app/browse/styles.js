import styled from "styled-components";
import { Link } from "react-router-dom";

// import { Spinner } from "../../components/Loading/styles";

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
  flex-direction: row;
  background: #f6f6f6;
  margin-left: 20px;
  width: 70%;
  min-height: 200px;
  border-radius: 20px;
  text-decoration: none;
  padding: 30px;

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
    margin-left: 10px;
  }
`;

export const BlocoStatus = styled.div``;
export const BlocoButton = styled.div``;
