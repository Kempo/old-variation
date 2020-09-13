import styled from 'styled-components';
import React from 'react';

import DesignSvg from './assets/DesignGraphic.svg';
import AnalyticsSvg from './assets/AnalyticsGraphic.svg';
import SecuritySvg from './assets/SecurityGraphic.svg';

type HeightNumber = {
  height: number
}

export interface Feature {
  Svg: any
  Header: string
  Description: JSX.Element
  Bites: string[]
}

const Graphic = styled.img<HeightNumber>`
  @media screen and (max-width: 600px) {
    width: 60%;
    height: auto;
  }
  @media screen and (min-width: 601px) {
    width: auto;
    height: ${(props: HeightNumber) => props.height}
  }
`;

export const List: Feature[] = [
  {
    Svg: <Graphic alt="Design Graphics" src={DesignSvg} height={250} />,
    Header: 'Expert Design',
    Description: <p>We curate and develop a variety of <strong>professional designs</strong> for you.</p>,
    Bites: ['Aesthetic and modern design', 'Mobile friendly', 'Professionally curated assets']
  },
  {
    Svg: <Graphic alt="Analytics Chart" src={AnalyticsSvg} height={300} />,
    Header: 'Online Spotlight',
    Description: <p>We put your practice online with professional <strong>search engine optimization</strong>.</p>,
    Bites: ['Powerful website descriptors', 'Asset optimization', 'Realtime analytics']
  },
  {
    Svg: <Graphic alt="Browser Security" src={SecuritySvg} height={300} />,
    Header: 'Website Security',
    Description: <p>We secure your site with <strong>industry-standard protection</strong>.</p>,
    Bites: ['HTTPS Protection', 'HIPAA Compliance', 'Data Encryption']
  },
]
