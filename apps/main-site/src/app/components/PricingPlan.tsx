import styled, { css } from 'styled-components';
import { MAIN_BLUE } from '../styles/Colors';

type FilledProp = {
  filled: boolean
}

export const PricingContainer = styled.div<FilledProp>`
  max-width: 310px;
  padding: 15px 35px;
  border-style: solid;
  border-width: 1px;
  border-color: ${MAIN_BLUE};
  border-radius: 5px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  h1 {
    margin: 0px;
    color: ${MAIN_BLUE};
  }

  ${(props: FilledProp) => props.filled && css`
    color: white;
    background-color: ${MAIN_BLUE};

    h1 {
      color: white;
    }
  `}

  @media screen and (max-width: 420px) {
    margin: 0px 0px 24px 0px;
    padding: 15px 25px;
  }

`;

export const PricingHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom-style: solid;
  border-bottom-width: 1px;

  margin-bottom: 32px;

  h1 {
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 300;
    margin: 15px 0px 25px 0px;
  }
`;

export const PricingFeatureList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 20px;

  h2 {
    font-weight: 400;
    font-size: 18px;
    margin: 0px 0px 10px 0px;
  }
  p {
    font-size: 14px;
    margin: 0px 0px 10px 0px;
  }
`;

export const PriceNumber = styled.span`
  font-size: 32px;
  font-weight: 400;
`;
