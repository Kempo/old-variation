import React from 'react';
import { Home, Plans, Features } from './pages';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import triangle from './pages/home/Triangle.svg';

import styled, { css } from 'styled-components';

type ContainerProps = {
  showBackground: boolean
}

const Layout = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0px 32px;
  height: max-content;
`;

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;

  // TO FIX.
  @media screen and (max-width: 600px) {
    background-image: none;
    padding-bottom: 50px;
  }

  ${(props: ContainerProps) => props.showBackground && css`
    background: white;
    color: black;

    @media screen and (min-width: 601px) {
      background-image: url(${triangle});
      background-size: cover;
      background-repeat: no-repeat;
      min-height: 100vh;
    }
  `}
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
  margin-top: 25px;
`;

const WrapperLink = styled(Link)`
  color: black;
  text-decoration: none;
  transition: color 100ms;

  &:hover {
    color: #3C72FF;
  }
`;

export const App = () => {

  const location = useLocation();

  return (
    <Container showBackground={location.pathname === '/'}>
      <Layout>
        <Navigation>
          <WrapperLink to="/">Home</WrapperLink>
          <WrapperLink to="/plans">Pricing</WrapperLink>
          <WrapperLink to="/features">Features</WrapperLink>
        </Navigation>
        <Switch>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/plans">
            <Plans />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Container>
  );
};

export default App;
