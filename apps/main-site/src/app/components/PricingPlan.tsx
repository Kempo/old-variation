import styled, { css } from 'styled-components';
import { MAIN_BLUE } from '../styles/Colors';

type FilledProp = {
  filled: boolean
}

export const PricingContainer = styled.div<FilledProp>`
  min-width: 310px;
  width: 310px;
  padding: 10px 25px;
  border-style: solid;
  border-width: 1px;
  border-color: ${MAIN_BLUE};
  border-radius: 5px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0px;
    color: ${MAIN_BLUE};
  }

  p {
    font-size: 18px;
    margin: 0px 0px 5px 0px;
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
    padding: 10px 12px;
  }

`;

export const PricingHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom-style: solid;
  border-bottom-width: 1px;

  margin-bottom: 16px;

  h1 {
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 300;
    margin: 0px 0px 5px 0px;
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
    margin: 0px 0px 5px 0px;
  }
  p {
    font-size: 14px;
    margin: 0px 0px 10px 0px;
  }
`;

export const PriceNumber = styled.span`
  font-size: 28px;
  font-weight: 400;
`;
