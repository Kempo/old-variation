import styled from 'styled-components';;

export const Heading = styled.div`
  h1 {
    margin: 0px;
    font-size: 56px;
    font-weight: 600;
  }

  h2 {
    font-weight: 500;
    font-size: 32px;
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 24px;
    }
  }
`;
