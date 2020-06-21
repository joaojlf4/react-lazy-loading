import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(#3d93e5, #1854b0);
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Board = styled.main`
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 93%;
  border-radius: 14px;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 25px;
  }
  a {
    font-size: 25px;
    color: #333;
    text-decoration: none;
    text-align: start;
    &:hover {
      text-decoration: underline;
    }
  }
`;
