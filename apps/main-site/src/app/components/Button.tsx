import styled, { css } from 'styled-components';
import { MAIN_BLUE } from '../styles/Colors';

type ButtonStyleProp = {
  outlined: boolean
}

const ActionButton = styled.button<ButtonStyleProp>`
  border-color: ${MAIN_BLUE};
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  color: ${(props: ButtonStyleProp) => props.outlined ? MAIN_BLUE : 'white'};
  background-color: ${(props: ButtonStyleProp) => props.outlined ? 'white': MAIN_BLUE};
  padding: 10px 20px;
  font-size: 1em;
  transition: color 100ms, background-color 300ms, box-shadow 300ms;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);

  &:hover {
    cursor: pointer;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);

    ${(props: ButtonStyleProp) => props.outlined ?
      css`
        color: #5A88FF;
      `
      :
      css`
        color: white;
      `
    }
  }
`;

export { ActionButton };
