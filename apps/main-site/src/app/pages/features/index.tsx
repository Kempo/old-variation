import React from 'react';
import styled from 'styled-components';
import { Heading } from '../../styles/Headers';
import { DARK_GREY, MAIN_BLUE, LIGHT_YELLOW } from '../../styles/Colors';
import { ReactComponent as GreenCheckmark } from './assets/GreenCheckmark.svg';
import { ReactComponent as YellowCheckmark } from './assets/YellowCheckmark.svg';
import { ActionButton } from '../../components';
import { List, Feature } from './FeatureList';

const TYPEFORM = 'https://variation-studio.typeform.com/to/Ygy5hQxP';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  margin-bottom: 3em;
`;

const FeatureRow = styled.div`
  display: flex;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 0px;
  }

  @media screen and (min-width: 1001px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 50px 0px;

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
`;

const Description = styled.div`
  width: 500px;

  @media screen and (max-width: 600px) {
    width: 300px;
  }

  h3 {
    font-size: 36px;
    font-weight: 600;
  }

  h4 {
    font-weight: 300;
    color: ${DARK_GREY};
  }

  strong {
    color: ${MAIN_BLUE};
  }
`;

const ExtraFeature = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${LIGHT_YELLOW};
  margin: 10px 0px;
  padding: 25px 35px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    padding: 25px;
  }
`;

const ExtraFeatureDescription = styled.div`
  h4 {
    text-align: left;
    font-size: 22px;
    font-weight: 400;
    margin: 5px 0px 5px 0px;
  }
  p {
    font-size: 18px;
    color: ${DARK_GREY};
    margin: 0px 0px 5px 0px;
  }

  @media screen and (max-width: 700px) {
    h4 {
      text-align: center;
    }
  }
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
    margin: 0px;
    width: 400px;
  }


  @media screen and (max-width: 500px) {
    p {
      width: 100%;
    }
    padding: 12px;
  }
`;

const ExtraCheckmark = styled(YellowCheckmark)`
  width: 55px;
  height: 55px;
  margin-right: 35px;

  @media screen and (max-width: 700px) {
    margin-bottom: 15px;
    margin-right: 0px;
  }
`;

const Action = styled.div`
  width: auto;

  @media screen and (max-width: 700px) {
    width: 100%;
    margin-top: 16px;
  }
`;

const Subpart = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0px;
`;

const Features: React.FC = () => {
  return (
    <Layout>
      <Heading>
        <h1>Check out our features</h1>
        <h2>Industry standard. Top of class.</h2>
      </Heading>
      {List.map((feature : Feature) => (
        <FeatureRow key={feature.Header}>
          {feature.Svg}
          <Description>
            <h3>{feature.Header}</h3>
            <h4>{feature.Description}</h4>
            {feature.Bites.map(bite => (
              <Subpart>
                <GreenCheckmark style={{ width: 35, height: 35, marginRight: 10 }} />
                {bite}
              </Subpart>
            ))}
          </Description>
        </FeatureRow>
      ))}
      <div style={{ marginTop: 80, marginBottom: 60 }}>
        <h1 style={{ fontWeight: 400 }}>And even more...</h1>
        <ExtraFeature>
          <ExtraCheckmark />
          <ExtraFeatureDescription>
            <h4>Appointment Scheduling</h4>
            <p>Effortlessly schedule appointments directly on your website or with a link.</p>
          </ExtraFeatureDescription>
        </ExtraFeature>
        <ExtraFeature>
          <ExtraCheckmark />
          <ExtraFeatureDescription>
            <h4>Secure Business Email</h4>
            <p>Send and receive emails easily. Communicate with your patients safely.</p>
          </ExtraFeatureDescription>
        </ExtraFeature>
        <ExtraFeature>
          <ExtraCheckmark />
          <ExtraFeatureDescription>
            <h4>Appointment Notifications</h4>
            <p>Notify yourself and your patients of appointments with text and email alerts.</p>
          </ExtraFeatureDescription>
        </ExtraFeature>
      </div>
      <h2>Check out our plans <a href="/plans">here</a>.</h2>
      <ActionFooter>
          <span>
            <h1>Setup your website for free.</h1>
            <p>Questions? Shoot us an email at: <br /> <strong style={{ fontWeight: 500 }}>contact@variationstudio.com</strong></p>
          </span>
          <Action>
            <a href={TYPEFORM} target="_blank" rel="noopener noreferrer">
              <ActionButton outlined style={{ width: '100%', padding: '20px 48px' }}>Get Started! &rarr;</ActionButton>
            </a>
          </Action>
        </ActionFooter>
    </Layout>
  )
}

export default Features;
