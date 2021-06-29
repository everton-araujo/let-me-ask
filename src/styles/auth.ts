import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const CreateRoomButton = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #EA4335;
  color: #FFF;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const CreateRoomImg = styled.img`
  margin-right: 8px;
`;

export const Aside = styled.aside`
  flex: 7;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;
  
  background: #835AFD;
  color: #FFF;
`;

export const AsideImg = styled.img`
  max-width: 320px;
`;

export const AsideStrongText = styled.strong`
  font: 700 36px 'Poppins', sans-serif;
  line-height: 42px;
  margin-top: 16px;
`;

export const AsideText = styled.p`
  font-size: 24px;
  line-height: 32px;
  margin-top: 16px;
  color: #F8F8F8;
`;

export const Main = styled.main`
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 0 32px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;
`;

export const MainImg = styled.img`
  align-self: center;
`;

export const MainText = styled.h2`
  font-size: 24px;
  margin: 64px 0 24px;
  font-family: 'Poppins', sans-serif;
`;

export const MainExistentRoomText = styled.p`
  font-size: 14px;
  color: #737380;
  margin-top: 16px;
`;

export const MainExistentRoomLink = styled(Link)`
  color: #E559F9;
`;

export const Separator = styled.div`
  font-size: 14px;
  color: #A8A8B3;

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: #A8A8B3;
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #A8A8B3;
    margin-left: 16px;
  } 
`;

export const Form = styled.form`
  button {
    margin-top: 16px;
  }

  button, input {
    width: 100%;
  }
`;

export const FormInput = styled.input`
  height: 50px;
  border-radius: 8px;
  padding: 0 16px;
  background: #FFF;
  border: 1px solid #A8A8B3;
`;
