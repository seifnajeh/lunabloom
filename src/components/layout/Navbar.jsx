import React from "react";
import { styled } from "@mui/material/styles";

const Navbar1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "100%",
  height: `118px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Rectangle47 = styled("div")({
  width: `1728px`,
  height: `118px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Lunabloom = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `900`,
  fontSize: `24px`,
  letterSpacing: `-1.08px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `146px`,
  top: `47px`,
});

const Princing = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1059px`,
  top: `49px`,
});

const Services = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1183px`,
  top: `49px`,
});

const AboutUs = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1312px`,
  top: `49px`,
});

const Cta = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `135px`,
  height: `34px`,
  left: `1447px`,
  top: `44px`,
});

const Rectangle40 = styled("div")({
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `5px`,
  width: `135px`,
  height: `34px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const JoinNow = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `24px`,
  top: `5px`,
});

function Navbar(props) {
  return (
    <Navbar1 className={props.className}>
      <Rectangle47></Rectangle47>
      <Lunabloom>{`LUNABLOOM`}</Lunabloom>
      <Princing>{`Princing`}</Princing>
      <Services>{`Services`}</Services>
      <AboutUs>{`About Us`}</AboutUs>
      <Cta>
        <Rectangle40></Rectangle40>
        <JoinNow>{`Join Now`}</JoinNow>
      </Cta>
    </Navbar1>
  );
}

export default Navbar;
