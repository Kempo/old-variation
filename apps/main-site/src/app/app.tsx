import React from 'react';
import { Home, Company } from './pages';
import { Switch, Route, Link } from 'react-router-dom';
import triangle from './pages/home/Triangle.svg';

import styled from 'styled-components';

const Layout = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0px 32px;
  height: max-content;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;

  // TO FIX.
  @media screen and (max-width: 600px) {
    background-image: none;
    padding-bottom: 50px;
  }

  @media screen and (min-width: 601px) {
    background-image: url(${triangle});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
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

  return (
    <Container>
      <Layout>
        <Navigation>
          <WrapperLink to="/">Home</WrapperLink>
          {/*<WrapperLink to="/about">Company</WrapperLink>*/}
        </Navigation>
        <Switch>
          <Route path="/about">
            <Company />
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
