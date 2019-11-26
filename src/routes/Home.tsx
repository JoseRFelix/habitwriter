import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImg from "assets/logo.png";
import { Button } from "semantic-ui-react";

const Home: React.FC = () => {
  return (
    <>
      <Nav>
        <LogoBox>
          <Logo src={logoImg} alt="logo" />
          <LogoText>HabitWriter</LogoText>
        </LogoBox>
        <AuthenticationBox>
          <Button primary content="Get Started" />
        </AuthenticationBox>
      </Nav>
      <Hero>
        <HeroHeader>Let Your Imagination Flow</HeroHeader>
      </Hero>
      <Link to="/write">Go to Editor</Link>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  padding: 2rem 7rem;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 3rem;
`;

const LogoText = styled.h3`
  margin: 0;
  margin-left: 1rem;

  font-weight: 500;

  color: ${({ theme }) => theme.colors.main};
`;

const AuthenticationBox = styled.div`
  display: flex;
  align-items: center;
`;

const Hero = styled.main`
  display: flex;
`;

const HeroHeader = styled.h1`
  margin: 0;
  text-transform: uppercase;

  font-family: ${props => props.theme.font.heading};
`;

export default Home;
