import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 500px;
  height: 180px;
  border-radius: 8px;
  font-size: 20px;
  a {
    color: #333;
    text-decoration: none;
    text-align: start;
    &:hover {
      text-decoration: underline;
    }
  }
  
`;
