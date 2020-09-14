import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PricingContainer, PricingHeader, PricingFeatureList, PriceNumber, ActionButton, ActionFooter } from '../../components';
import { EssentialPlan, ProfessionalPlan, FAQ } from './static/';
import { DARK_GREY } from '../../styles/Colors';
import { Heading } from '../../styles/Headers';

const EMAIL = 'contact@variationstudio.com'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  padding-bottom: 24px;
`;

const CallToAction = styled.div`
  margin-bottom: 24px;

  p {
    color: ${DARK_GREY};
  }
`;

const Pricing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 48px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Disclaimer = styled.small`
  color: #CCC;
  padding-bottom: 64px;
`;

const Spacing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 48px;

  font-weight: 700;
  color: ${DARK_GREY};
`;

const VerticalLine = styled.div`
  display: inline;
  background-color: ${DARK_GREY};
  height: 35px;
  width: 1px;
  margin: 25px 0px;
`;

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;

  h2 {
    text-align: center;
    font-size: 36px;
  }
`;

const QuestionAnswer = styled.div`
  text-align: left;

  h4 {
    font-size: 22px;
    font-weight: 500;
  }
`;

const TYPEFORM = 'https://variation-studio.typeform.com/to/Ygy5hQxP';

const emit = (category, label) => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).gtag('event', 'click', {
    'event_category': category,
    'event_label': label
  })
}

const InterestButton = () =>
  (<a href={TYPEFORM} onClick={() => emit('FORM_CLICK', 'IM_INTERESTED_FORM')} target="_blank" rel="noopener noreferrer">
    <ActionButton outlined style={{ width: '100%' }}>I'm interested!</ActionButton>
  </a>);

const Plans: React.FC = () => {
  return (
      <Layout>
        <CallToAction>
          <Heading>
            <h1>Setup for free and connect online.</h1>
            <h2>Make your business official.</h2>
          </Heading>
          <p style={{ lineHeight: '22px' }}>
            No credit card required. Cancel at no cost.
            <br/>
            Have any questions? Send us a message at:
            <br />
            <a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer">contact@variationstudio.com</a>
            <br />
          </p>
        </CallToAction>
        <Pricing>
          <PricingContainer filled={false}>
            <PricingHeader>
              <h1>ESSENTIAL</h1>
              <p>$ <PriceNumber>45</PriceNumber> / month</p>
            </PricingHeader>
            <PricingFeatureList>
                {
                  EssentialPlan.map((feature) => (
                    <div key={feature.H}>
                      <h2>{feature.H}</h2>
                      {feature.P && <p>{feature.P}</p>}
                    </div>
                    )
                  )
                }
            </PricingFeatureList>
            <InterestButton />
          </PricingContainer>
          <Spacing>
            <VerticalLine />
            OR
            <VerticalLine />
          </Spacing>
          <PricingContainer filled={true}>
            <PricingHeader>
              <h1>PROFESSIONAL</h1>
              <p>$ <PriceNumber>75</PriceNumber> / month</p>
            </PricingHeader>
            <PricingFeatureList>
              {
                ProfessionalPlan.map((feature) => (
                  <div key={feature.H}>
                    <h2>{feature.H}</h2>
                    {feature.P && <p>{feature.P}</p>}
                  </div>
                  )
                )
              }
            </PricingFeatureList>
            <InterestButton />
          </PricingContainer>
        </Pricing>
        <Disclaimer>* Business email is set at five accounts. Inquire for more.</Disclaimer>
        <Questions>
          <h2>Frequently Asked Questions</h2>
          {
            FAQ.map(faq => (
              <QuestionAnswer key={faq.H}>
                <h4>{faq.H}</h4>
                <p>{faq.P}</p>
              </QuestionAnswer>
            ))
          }
        </Questions>
        <h2>See more of our features <Link to="/features">here</Link>.</h2>
        <ActionFooter
          title="Jumpstart your online presence now."
          subtitle={null}
          link={TYPEFORM}
          buttonText="Get Started! &rarr;"
        />
        {/*
        <ActionFooter>
          <p>"Variation is affordable and professional. My website makes my practice incredibly easy to reach and to contact me. I love it." <br /><strong>John</strong></p>
          <Action>
            <a href={TYPEFORM} onClick={() => emit('FORM_CLICK', 'IM_INTERESTED_FORM')} target="_blank" rel="noopener noreferrer">
              <ActionButton outlined style={{ width: '100%', padding: '20px 48px' }}>Get Started! &rarr;</ActionButton>
            </a>
          </Action>
        </ActionFooter>
        */}
      </Layout>
  )
}

export default Plans;
