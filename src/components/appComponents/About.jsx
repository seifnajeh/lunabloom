import React from "react";
import Ellipse2Image from "../../assets/images/aboutus_Ellipse_2.png";
import GraphicDesignCompanyImage from "../../assets/images/aboutus_Graphic_Design_Company_in_Mumbai___Hand_Drawn_illustrations_Popular_once_again__.png";
import { styled } from "@mui/material/styles";

const AboutUs1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "100%",
  height: `923.49px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const WhyWaitSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Argentum Sans`,
  fontWeight: `600`,
  fontSize: `36px`,
  letterSpacing: `-1.62px`,
  textDecoration: `none`,
  lineHeight: `129.02272939682007%`,
  textTransform: `uppercase`,
});

const WhyWaitSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(85, 183, 215, 1)`,
  fontStyle: `normal`,
  fontFamily: `Argentum Sans`,
  fontWeight: `600`,
  fontSize: `36px`,
  letterSpacing: `-1.62px`,
  textDecoration: `none`,
  lineHeight: `129.02272939682007%`,
  textTransform: `uppercase`,
});

const WhyWait = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Argentum Sans`,
  fontWeight: `600`,
  fontSize: `36px`,
  letterSpacing: `-1.62px`,
  textDecoration: `none`,
  lineHeight: `129.02272939682007%`,
  textTransform: `uppercase`,
  position: `absolute`,
  left: `723px`,
  top: `0px`,
});

const DiscoverThePowerOfOu = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `-0.9px`,
  textDecoration: `none`,
  lineHeight: `144.52272653579712%`,
  textTransform: `none`,
  width: `728px`,
  position: `absolute`,
  left: `461px`,
  top: `57px`,
});

const Ellipse2 = styled("img")({
  height: `443px`,
  width: `443px`,
  position: `absolute`,
  left: `33px`,
  top: `410px`,
});

const GraphicDesignCompany = styled("img")({
  height: `430px`,
  width: `861px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `34px`,
  top: `440px`,
});

const LunaBloomIsDedicated = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `-0.9px`,
  textDecoration: `none`,
  lineHeight: `144.52272653579712%`,
  textTransform: `none`,
  width: `549px`,
  position: `absolute`,
  left: `896px`,
  top: `410px`,
});

const WhoAreWESpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Argentum Sans`,
  fontWeight: `600`,
  fontSize: `36px`,
  letterSpacing: `-1.62px`,
  textDecoration: `none`,
  lineHeight: `129.02272939682007%`,
  textTransform: `uppercase`,
});

const WhoAreWESpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(85, 183, 215, 1)`,
  fontStyle: `normal`,
  fontFamily: `Argentum Sans`,
  fontWeight: `600`,
  fontSize: `36px`,
  letterSpacing: `-1.62px`,
  textDecoration: `none`,
  lineHeight: `129.02272939682007%`,
  textTransform: `uppercase`,
});

const WhoAreWE = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Argentum Sans`,
  fontWeight: `600`,
  fontSize: `36px`,
  letterSpacing: `-1.62px`,
  textDecoration: `none`,
  lineHeight: `129.02272939682007%`,
  textTransform: `uppercase`,
  width: `100px`,
  position: `absolute`,
  left: `759px`,
  top: `410px`,
});

const WePresumeThatEveryEx = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `-0.9px`,
  textDecoration: `none`,
  lineHeight: `144.52272653579712%`,
  textTransform: `none`,
  width: `549px`,
  position: `absolute`,
  left: `896px`,
  top: `548px`,
});

function AboutUs(props) {
  return (
    <AboutUs1 className={props.className}>
      <WhyWait>
        <WhyWaitSpan1>{`why`}</WhyWaitSpan1>
        <WhyWaitSpan2>{` wait?`}</WhyWaitSpan2>
      </WhyWait>
      <DiscoverThePowerOfOu>
        {`Discover the power of our AI-driven marketing strategy platform and unleash the full potential of your brand today!`}
      </DiscoverThePowerOfOu>
      <Ellipse2 src={Ellipse2Image} loading="lazy" alt={"Ellipse 2"} />
      <GraphicDesignCompany
        src={GraphicDesignCompanyImage}
        loading="lazy"
        alt={
          "Graphic-Design-Company-in-Mumbai-_-Hand-Drawn-illustrations_Popular-once-again-_-SySpree-removebg-preview 1"
        }
      />
      <LunaBloomIsDedicated>
        {`LunaBloom is dedicated to assisting content creators and businesses in growing their brand and reaching their target audience. `}
      </LunaBloomIsDedicated>
      <WhoAreWE>
        <WhoAreWESpan1>{`Who ARE `}</WhoAreWESpan1>
        <WhoAreWESpan2>{`wE ?`}</WhoAreWESpan2>
      </WhoAreWE>
      <WePresumeThatEveryEx>
        {`We presume that every expressive endeavor deserves a chance to shine, and we're committed to providing the tools and resources necessary to do so. 

Our platform can help you develop a winning digital marketing strategy that connects with your audience and drives results, irrespective of whether you're an artist, seller, writer, or entrepreneur. `}
      </WePresumeThatEveryEx>
    </AboutUs1>
  );
}

export default AboutUs;
