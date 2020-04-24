import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  background: #232129;
  border-radius: 10px;
  display: flex;
  align-items: center;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  input {
    color: #f4ede8;
    background: transparent;
    flex: 1;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
