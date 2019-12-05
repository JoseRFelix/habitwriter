import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImg from "assets/logo.png";
import { Button } from "semantic-ui-react";

import { ReactComponent as HeroSVG } from "assets/illustration/ZombieingDoodle.svg";
import { ReactComponent as CloudMessySVG } from "assets/illustration/MessyDoodle.svg";
import { ReactComponent as CloudSVG } from "assets/illustration/Cloud.svg";
import { ReactComponent as RollerSVG } from "assets/illustration/RollerSkatingDoodle.svg";
import { ReactComponent as ReaderSittingSVG } from "assets/illustration/ReadingDoodle.svg";
import { ReactComponent as RombusSVG } from "assets/illustration/Rombus.svg";
import { ReactComponent as SitReadingSVG } from "assets/illustration/SitReadingDoodle.svg";
import { ReactComponent as DumpingSVG } from "assets/illustration/DumpingDoodle.svg";
import { ReactComponent as BalletSVG } from "assets/illustration/BalletDoodle.svg";

const Home: React.FC = () => {
  return (
    <main>
      <Nav>
        <LogoBox>
          <Logo src={logoImg} alt="logo" />
          <LogoText>HabitWriter</LogoText>
        </LogoBox>
        <AuthenticationBox>
          <AuthenticationText to="/write">
            <Link to="/write">Sign In</Link>
          </AuthenticationText>
          <Button primary size="huge" content="Get Started" />
        </AuthenticationBox>
      </Nav>
      <Hero>
        <HeroLeftSection>
          <HeroHeader>Let Your Imagination Flow</HeroHeader>
          <HeroBody>
            Create the habit of writing by setting a goal and completing it
            daily
          </HeroBody>
          <Button primary size="massive" content="Learn More" />
        </HeroLeftSection>
        <HeroIllustration />
      </Hero>
      <CloudSection>
        <CloudIllustrationBox>
          <CloudMessyIllustration />
          <CloudIllustration />
        </CloudIllustrationBox>
        <CloudTextBox>
          <CloudHeader>Keep all your papers in one place</CloudHeader>
          <CloudBody>
            Sync all your documents to your prefered cloud provider: Drive or
            Github.
          </CloudBody>
        </CloudTextBox>
      </CloudSection>
      <RollerSection>
        <RollerTextBox>
          <RollerHeader>Feel free to choose your limit</RollerHeader>
          <RollerBody>
            Set your word count goal for <br /> every day.
          </RollerBody>
        </RollerTextBox>
        <RollerIllustrationBox>
          <RollerIllustration />
          <RollerCircle>&nbsp;</RollerCircle>
        </RollerIllustrationBox>
      </RollerSection>
      <ReaderSection>
        <ReaderIllustrationBox>
          <ReaderSittingIllustration />
          <ReaderIllustration />
        </ReaderIllustrationBox>
        <ReaderTextBox>
          <ReaderHeader>
            Become a better
            <br />
            writer and reader
          </ReaderHeader>
          <ReaderBody>
            Through perseverance and
            <br />
            consistency you will make
            <br />
            youself and the world a better
            <br />
            place.
          </ReaderBody>
        </ReaderTextBox>
      </ReaderSection>
      <Footer>
        <FooterHeader>Start your creative journey</FooterHeader>
        <FooterButton color="black" size="massive" content="Start Writing" />
        <FooterIllustrationBox>
          <DumpingSVG />
          <BalletSVG />
          <SitReadingSVG />
        </FooterIllustrationBox>
      </Footer>
    </main>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  position: sticky;
  top: 0;

  padding: 2rem 7rem;

  z-index: 9999;

  background-color: white;
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
  font-size: 1.6rem;

  color: ${({ theme }) => theme.colors.main};
`;

const AuthenticationBox = styled.div`
  display: flex;
  align-items: center;
`;

const AuthenticationText = styled(Link)`
  color: black;

  &:hover {
    color: #3b3b3b;
  }

  margin-right: 1.6rem;
  font-weight: 500;
`;

const Hero = styled.section`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  padding: 8rem 7rem;
`;

const HeroLeftSection = styled.div`
  flex: 0 0 20%;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const HeroHeader = styled.h1`
  margin: 0;
  text-transform: uppercase;

  letter-spacing: 0.7rem;

  font-family: ${props => props.theme.font.heading};
  color: ${props => props.theme.colors.text};
  font-size: 12rem;
`;

const HeroBody = styled.p`
  width: 40rem;
  font-size: 2.2rem;

  line-height: 4rem;
  color: ${props => props.theme.colors.text};
`;

const HeroIllustration = styled(HeroSVG)`
  flex: 1;
`;

const CloudSection = styled.section`
  display: flex;
  padding: 4rem 5rem;

  background-color: #ffd646;
`;

const CloudIllustrationBox = styled.div`
  position: relative;
`;

const CloudMessyIllustration = styled(CloudMessySVG)`
  width: 68rem;
  position: absolute;

  top: 55%;
  left: 55%;
  transform: translate(-50%, -50%);
`;

const CloudIllustration = styled(CloudSVG)`
  width: 80rem;
`;

const CloudTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const CloudHeader = styled.h1`
  width: 40rem;

  margin: 0;

  letter-spacing: 0.2rem;
  line-height: 7rem;

  font-family: ${props => props.theme.font.heading};
  color: ${props => props.theme.colors.text};
  font-size: 6rem;
`;

const CloudBody = styled.p`
  width: 40rem;
  font-size: 2.2rem;

  line-height: 3.5rem;
  color: ${props => props.theme.colors.text};
`;

const RollerSection = styled.section`
  display: flex;
`;

const RollerTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const RollerHeader = styled.h1`
  width: 40rem;

  margin: 0;

  letter-spacing: 0.2rem;
  line-height: 7rem;

  font-family: ${props => props.theme.font.heading};
  color: ${props => props.theme.colors.text};
  font-size: 6rem;
`;

const RollerBody = styled.p`
  width: 40rem;
  font-size: 2.2rem;

  line-height: 3.5rem;
  color: ${props => props.theme.colors.text};
`;

const RollerIllustrationBox = styled.div`
  position: relative;
  background-color: #8ad8ca;

  padding: 1rem 1rem;
`;

const RollerCircle = styled.div`
  width: 58rem;
  height: 58rem;
  position: absolute;

  border-radius: 50%;
  background-color: white;

  z-index: 0;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RollerIllustration = styled(RollerSVG)`
  position: relative;
  width: 80rem;
  z-index: 1;
`;

const ReaderSection = styled.section`
  display: flex;
  padding: 4rem 0 4rem 15rem;

  margin-right: 10rem;
  background-color: #f0ffd8;
`;

const ReaderIllustrationBox = styled.div`
  position: relative;
`;

const ReaderSittingIllustration = styled(ReaderSittingSVG)`
  width: 90rem;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ReaderIllustration = styled(RombusSVG)`
  width: 60rem;
`;

const ReaderTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const ReaderHeader = styled.h1`
  width: 60rem;
  margin: 0;

  letter-spacing: 0.2rem;
  line-height: 7rem;

  font-family: ${props => props.theme.font.heading};
  color: ${props => props.theme.colors.text};
  font-size: 6rem;
`;

const ReaderBody = styled.p`
  width: 60rem;
  font-size: 2.2rem;

  line-height: 4rem;
  color: ${props => props.theme.colors.text};
`;

const Footer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 6rem 15rem;

  & > *:not(:last-child) {
    margin-bottom: 9rem;
  }
`;

const FooterButton = styled(Button)`
  padding: 2rem 4rem !important;
`;

const FooterHeader = styled.h1`
  margin: 0;

  letter-spacing: 0.2rem;
  line-height: 7rem;

  font-family: ${props => props.theme.font.heading};
  color: ${props => props.theme.colors.text};
  font-size: 8rem;
`;

const FooterIllustrationBox = styled.div`
  display: flex;

  & > * {
    width: 50rem;
    margin-bottom: -15rem;
    margin-top: 10rem;
  }

  & > *:not(:first-child) {
    margin-left: -10rem;
  }
`;

export default Home;
