import React from 'react';
import styled from 'styled-components';
import { MAIN_BLUE } from '../styles/Colors';
import { ActionButton } from './Button';


const Body = styled.div`
  background-color: ${MAIN_BLUE};
  padding: 12px 24px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: white;

  p {
    line-height: 24px;
    margin: 0px;
    width: 400px;
  }

  strong {
    font-weight: 500;
  }


  @media screen and (max-width: 500px) {
    p {
      width: 100%;
    }
    padding: 12px;
  }
`;


const Action = styled.div`
  width: auto;

  @media screen and (max-width: 700px) {
    width: 100%;
    margin-top: 16px;
  }
`;

type FooterProps = {
  title: string
  subtitle: JSX.Element | null
  buttonText: string
  link: string
}

const emit = (category, label) => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).gtag('event', 'click', {
    'event_category': category,
    'event_label': label
  })
}

const ActionFooter: React.FC<FooterProps> = ({ title, subtitle, buttonText, link }) => {
  return (
    <Body>
      <span>
        <h1>{title}</h1>
        {subtitle ?? <p>Questions? Shoot us an email at: <br /> <strong>contact@variationstudio.com</strong></p>}
      </span>
      <Action>
        <a onClick={() => emit('FORM_CLICK_FOOTER', 'IM_INTERESTED_FORM')} target="_blank" rel="noopener noreferrer" href={link}>
          <ActionButton outlined style={{ width: '100%', padding: '20px 48px' }}>{buttonText}</ActionButton>
        </a>
      </Action>
    </Body>
  )
}

export { ActionFooter };
