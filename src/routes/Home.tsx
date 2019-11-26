import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImg from "assets/logo.png";
import { Button } from "semantic-ui-react";
import { ReactComponent as HeroSVG } from "assets/illustration/ZombieingDoodle.svg";

const Home: React.FC = () => {
  return (
    <>
      <Nav>
        <LogoBox>
          <Logo src={logoImg} alt="logo" />
          <LogoText>HabitWriter</LogoText>
        </LogoBox>
        <AuthenticationBox>
          <AuthenticationText to="/write">Sign In</AuthenticationText>
          <Button primary content="Get Started" />
        </AuthenticationBox>
      </Nav>
      <Hero>
        <HeroLeftSection>
          <HeroHeader>Let Your Imagination Flow</HeroHeader>
          <HeroBody>Create the habit of writing by setting a goal and completing it daily</HeroBody>
          <Button primary content="Learn More"/>
        </HeroLeftSection>        
        <HeroIllustration/>
      </Hero>
      <Link to="/write">Go to Editor</Link>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  position: sticky;
  top: 0; 
  
  padding: 1rem 7rem;

  background-color: white;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 2rem;
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

const AuthenticationText = styled(Link)`
  color: black;

  &:hover {
    color: black;
  }

  margin-right: 1rem;
  font-weight: 500;                                                        
`

const Hero = styled.main`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  padding: 1rem 7rem;
`;

const HeroHeader = styled.h1`
  margin: 0;
  text-transform: uppercase;

  letter-spacing: 3%;

  font-family: ${props => props.theme.font.heading};
  color: ${props => props.theme.colors.text};
  font-size: 7rem;
`;

const HeroLeftSection = styled.div`  
  flex: 0 0 20%;

  & > *:not(:last-child) {
    margin-bottom: 3rem;    
  }
`;

const HeroIllustration = styled(HeroSVG)`
  width: 40rem;  
`

const HeroBody = styled.p`
  width: 25rem;
  font-size: 1.4rem;

  line-height: 3rem;
  color: ${props => props.theme.colors.text};
`;

export default Home;
