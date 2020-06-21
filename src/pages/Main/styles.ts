import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: linear-gradient(#826bcd, #532bd8);
  justify-content: center;
  color: #f0f0f0;
  
  .content {
    display: flex;
    flex-direction: column;
    height: 80%;
    margin-top: 14px;
    justify-content: center;
    align-items: center;

    h1 {
      margin-bottom: 15px;
    }
  }
  
`;