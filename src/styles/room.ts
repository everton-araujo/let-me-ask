import styled from "styled-components";

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid #E2E2E2;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RoomCodeCloseButton = styled.div`
  display: flex;
  gap: 16px;

  button {
    height: 40px;
  }
`;

export const Logo = styled.img`
  max-height: 45px;
`;

export const Main = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const QuestionList = styled.div`
  margin-top: 32px;
`;

export const RoomTitleContainer = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;
`

export const RoomTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  color: #29292E;
`;

export const RoomText = styled.span`
  margin-left: 16px;
  background: #E559F9;
  border-radius: 9999px;
  padding: 8px 16px;
  color: #FFF;
  font-weight: 500;
  font-size: 14px;
`;

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: #FEFEFE;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const FooterText = styled.span`
  font-size: 14px;
  color: #737380;
  font-weight: 500;
`;

export const FooterButton = styled.button`
  background: transparent;
  border: 0;
  color: #835AFD;
  text-decoration: underline;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  margin-left: 8px;
  color: #29292E;
  font-weight: 500;
  font-size: 14px;
`;
