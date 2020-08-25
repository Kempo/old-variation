import styled from 'styled-components';

const ActionButton = styled.button`
  border-color: #3C72FF;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  color: white;
  background-color: #3C72FF;
  padding: 10px 20px;
  font-size: 1em;
  transition: color 200ms, background-color 200ms;

  &:hover {
    cursor: pointer;
    background-color: #3C4FFF;
  }
`;

export { ActionButton };
