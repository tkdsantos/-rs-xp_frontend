import styled from "styled-components";
import { Link } from "react-router-dom";

// import { Spinner } from "../../components/Loading/styles";

export const Container = styled.div`
  flex: 1;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 32px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  background: #ccc;
  margin-left: 20px;
  width: 60%;
  height: 200px;
  border-radius: 20px;
  text-decoration: none;

  img {
    height: 250px;

    &:hover {
      opacity: 0.4;
    }
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 22px;
    color: #000;
  }

  &:first-child {
    margin: 0;
  }
`;
