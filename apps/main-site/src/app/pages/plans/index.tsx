import React from 'react';
import styled from 'styled-components';
import { PricingContainer, PricingHeader, PricingFeatureList, PriceNumber, ActionButton } from '../../components';
import { EssentialPlan, ProfessionalPlan } from './featureList';
import { DARK_GREY, MAIN_BLUE } from '../../styles/Colors';

const EMAIL = 'contact@variationstudio.com'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  padding-bottom: 24px;
`;

const CallToAction = styled.div`
  margin-bottom: 24px;

  h2 {
    font-weight: 500;
  }

  h1 {
    margin: 0px;
    font-size: 48px;
    font-weight: 600;
  }

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
  padding-bottom: 128px;
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

const ActionFooter = styled.div`
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
    width: 350px;
  }


  @media screen and (max-width: 420px) {
    p {
      width: 100%;
    }
    padding: 12px 12px;
  }
`;

const Action = styled.div`
  width: auto;

  @media screen and (max-width: 700px) {
    width: 100%;
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
    <ActionButton outlined hoverEffect={false} style={{ width: '100%' }}>I'm interested!</ActionButton>
  </a>);

const Plans: React.FC = () => {
  return (
      <Layout>
        <CallToAction>
          <h1>Connect your practice online.</h1>
          <h2>Setup for free, pay later.</h2>
          <p>
            <br />
            We offer free setup and if you're unsatisfied with any of our plans, you can cancel anytime, no cost.
            <br />
            <br />
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
        {/* <h2>See more of our features <a href="/features">here</a>.</h2> */}
        <ActionFooter>
          <p>"Variation does it right. Affordable and professional. My website makes my practice insanely easy to reach and to contact me. I love it." - <strong>John</strong></p>
          <Action>
            <a href={TYPEFORM} onClick={() => emit('FORM_CLICK', 'IM_INTERESTED_FORM')} target="_blank" rel="noopener noreferrer">
              <ActionButton outlined hoverEffect={false} style={{ width: '100%', padding: '20px 48px' }}>I'm interested! &rarr;</ActionButton>
            </a>
          </Action>
        </ActionFooter>
      </Layout>
  )
}

export default Plans;
