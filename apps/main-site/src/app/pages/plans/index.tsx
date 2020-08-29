import React from 'react';
import styled from 'styled-components';
import { PricingContainer, PricingHeader, PricingFeatureList, PriceNumber, ActionButton } from '../../components';
import { EssentialPlan, ProfessionalPlan } from './featureList';

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  margin-top: 3em;
  padding-bottom: 12px;
`;

const CallToAction = styled.div`
  max-width: 400px;
  width: 100%;

  h1, h2 {
    font-weight: 400;
  }

  h1 {
    margin: 0px;
    font-size: 48px;
  }
`;

const Pricing = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Disclaimer = styled.small`
  color: #CCC;
  margin-bottom: 12px;
`;

const TYPEFORM = 'https://variation-studio.typeform.com/to/Ygy5hQxP';

const InterestButton = () =>
  (<a href={TYPEFORM} target="_blank" rel="noopener noreferrer">
    <ActionButton outlined hoverEffect={false} style={{ width: '100%' }}>I'm interested</ActionButton>
  </a>);

const Plans: React.FC = () => {
  return (
    <>
      <Layout>
        <Pricing>
          <PricingContainer filled={false}>
            <PricingHeader>
              <h1>ESSENTIAL</h1>
              <p>$ <PriceNumber>45</PriceNumber> / month</p>
            </PricingHeader>
            <PricingFeatureList>
                {
                  EssentialPlan.map((feature) => (
                    <>
                      <h2>{feature.H}</h2>
                      {feature.P && <p>{feature.P}</p>}
                    </>
                    )
                  )
                }
            </PricingFeatureList>
            <InterestButton />
          </PricingContainer>
          <PricingContainer filled={true}>
            <PricingHeader>
              <h1>PROFESSIONAL</h1>
              <p>$ <PriceNumber>75</PriceNumber> / month</p>
            </PricingHeader>
            <PricingFeatureList>
              {
                ProfessionalPlan.map((feature) => (
                  <>
                    <h2>{feature.H}</h2>
                    {feature.P && <p>{feature.P}</p>}
                  </>
                  )
                )
              }
            </PricingFeatureList>
            <InterestButton />
          </PricingContainer>
        </Pricing>
        <CallToAction>
          <h1>Make your business real.</h1>
          <h2>Connect to the online world now.</h2>
          <p>
            <strong>Interested?</strong>
            <br />
            We offer free setup and if you're unsatisfied with any of our plans, you can cancel anytime for free.
            <br />
            <br />
            Feel free to contact us at <i>aaron@variationstudio.com</i>.
            <br />
          </p>
        </CallToAction>
      </Layout>
      <Disclaimer>* Business email is set at five accounts. Inquire for more.</Disclaimer>
    </>
  )
}

export default Plans;
