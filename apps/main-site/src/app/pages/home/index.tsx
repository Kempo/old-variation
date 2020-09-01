import React from 'react';
import styled, { css } from 'styled-components';
import { ActionButton } from '../../components';

const EMAIL = "contact@variationstudio.com"

const BottomTextStyles = css`
  max-width: 500px;
  width: 100%;
  font-size: 22px;
`;

const Description = styled.p`
  font-weight: 400;
  ${BottomTextStyles}
`;

const Audience = styled.p`
  font-weight: 300;
  ${BottomTextStyles}
`;

const Header = styled.h1`
  font-size: 64px;
  font-weight: 500;
`;

const DescriptionText = "A specialty software development studio that crafts beautiful and intuitive applications to amplify your digital presence."
const AudienceText = "We partner with medical professionals to seamlessly connect the online world directly to their business."

const Home: React.FC = () => {
  return (
    <div>
      <Header>Variation Studio</Header>
      <Description>{DescriptionText}</Description>
      <Audience>{AudienceText}</Audience>
      <a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer"><ActionButton outlined={false} hoverEffect>Contact</ActionButton></a>
    </div>
  )
}

export default Home;
