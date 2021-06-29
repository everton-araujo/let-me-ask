import styled from "styled-components";

export const QuestionContainer = styled.div`
  background: #FEFEFE;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  padding: 24px;

  & + .question {
    margin-top: 8px;

    + :last-child {
      margin-bottom: 16px;
    }
  }

  &.highlighted {
    background: #F4F0FF;
    border: 1px solid #835AFD;

    footer .user-info span {
      color: #29292E;
    }
  }

  &.answered {
    background: #DBDCDD;
    
    p {
      color: #999fa5;
    }
  }

  p {
    color: #29292A;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      span {
        margin-left: 8px;
        color: #737380;
        font-size: 14px;
      }
    }

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 8px;
        
        &.liked {
          color: #835AFD;

          svg path {
            stroke: #835AFD;
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;