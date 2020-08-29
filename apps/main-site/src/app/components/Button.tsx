import styled, { css } from 'styled-components';
import { MAIN_BLUE } from '../styles/Colors';

type ButtonStyleProp = {
  outlined: boolean
  hoverEffect: boolean
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
  transition: color 200ms, background-color 200ms;

  &:hover {
    cursor: pointer;
  }

  ${(props: ButtonStyleProp) => props.hoverEffect && css`
    &:hover {
      color: white;
      background-color: #3C4FFF;
    }
  `}
`;

export { ActionButton };
