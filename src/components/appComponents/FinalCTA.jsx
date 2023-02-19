import React from "react";
import MaskImage from "../../assets/images/cta_mask.png";
import { styled } from "@mui/material/styles";

const Cta1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "100%",
  height: `643px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Rectangle44 = styled("div")({
  background: `linear-gradient(180deg, rgba(50, 44, 106, 1) 0.000011131398653906824%, rgba(15, 18, 61, 1) 98.95415789822066%)`,
  width: `1728px`,
  height: `643px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Mask = styled("img")({
  height: `643px`,
  width: `1728px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const DonTThinkTwice = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Argentum Sans`,
  fontWeight: `800`,
  fontSize: `48px`,
  letterSpacing: `-2.16px`,
  textDecoration: `none`,
  lineHeight: `129.02272939682007%`,
  textTransform: `uppercase`,
  position: `absolute`,
  left: `622px`,
  top: `149px`,
});

const RevolutionizeYourMar = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `36px`,
  letterSpacing: `-1.62px`,
  textDecoration: `none`,
  lineHeight: `129.02272939682007%`,
  textTransform: `none`,
  width: `895px`,
  position: `absolute`,
  left: `416px`,
  top: `230px`,
});

const Cta2 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `392px`,
  height: `66px`,
  left: `668px`,
  top: `343px`,
});

const Rectangle42 = styled("div")({
  backgroundColor: `rgba(253, 67, 90, 1)`,
  borderRadius: `50px`,
  width: `378px`,
  height: `58px`,
  position: `absolute`,
  left: `7px`,
  top: `4px`,
});

const Rectangle43 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 0.03)`,
  border: `1px solid rgba(255, 255, 255, 0.19)`,
  boxSizing: `border-box`,
  borderRadius: `50px`,
  width: `392px`,
  height: `66px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const SignUpNow = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `24px`,
  letterSpacing: `-1.08px`,
  textDecoration: `none`,
  lineHeight: `129.02272939682007%`,
  textTransform: `none`,
  position: `absolute`,
  left: `125px`,
  top: `17px`,
});

function Cta(props) {
  return (
    <Cta1 className={props.className}>
      <Rectangle44></Rectangle44>
      <Mask src={MaskImage} loading="lazy" alt={"mask"} />
      <DonTThinkTwice>{`Don’t think twice!`}</DonTThinkTwice>
      <RevolutionizeYourMar>
        {`Revolutionize Your Marketing with Our AI-Driven Platform.`}
      </RevolutionizeYourMar>
      <Cta2>
        <Rectangle42></Rectangle42>
        <Rectangle43></Rectangle43>
        <SignUpNow>{`Sign up now !`}</SignUpNow>
      </Cta2>
    </Cta1>
  );
}

export default Cta;
