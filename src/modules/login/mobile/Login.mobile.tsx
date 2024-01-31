import { CVFlex, CHFlex } from "@/components/CFlex";
import React from "react";
import LoginPageMobileStyle from "./LoginMobile.module.css";
import Image from "next/image";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function LoginMobile() {
  return (
    <CVFlex className={`${LoginPageMobileStyle.bgContainer}`}>
      <CHFlex className={`${LoginPageMobileStyle.mobileHeader}`}>
        <CHFlex
          className={`${LoginPageMobileStyle.container} ${LoginPageMobileStyle.innerHeader}`}
        >
          <div className={`${LoginPageMobileStyle.logoDiv}`}>
            <Image
              src="/images/Ellipse111.png"
              alt="logo"
              width="30"
              height="30"
            />
            <Image
              src="/images/Vector7.png"
              width="30"
              height="13"
              alt="ZigZagline"
              style={{ position: "absolute", top: "28%", left: "0" }}
            />
          </div>
          <h1 className={`${LoginPageMobileStyle.MainHeading}`}>Base</h1>
        </CHFlex>
      </CHFlex>
      <CVFlex
        className={`${LoginPageMobileStyle.container}`}
        sx={{ gap: "0.5rem" }}
      >
        <h1
          className={`${LoginPageMobileStyle.text} ${LoginPageMobileStyle.primaryText}`}
          style={{ fontSize: "1.5rem" }}
        >
          Sign In
        </h1>
        <p
          className={`${LoginPageMobileStyle.text}  ${LoginPageMobileStyle.secondaryText}`}
          style={{ color: "black" }}
        >
          Sign in to your account
        </p>
      </CVFlex>
      <CHFlex
        className={`${LoginPageMobileStyle.container}`}
        sx={{ justifyContent: "space-between" }}
      >
        <CHFlex
          sx={{ justifyContent: "space-between" }}
          className={` ${LoginPageMobileStyle.roundedDiv}`}
        >
          <Image
            src="/images/google-icon.png"
            alt="google"
            width="12"
            height="12"
          />
          <p
            className={`${LoginPageMobileStyle.text} ${LoginPageMobileStyle.secondaryText}`}
            style={{ color: "#858585" }}
          >
            Sign in with Google
          </p>
        </CHFlex>
        <CHFlex
          sx={{ justifyContent: "space-between" }}
          className={` ${LoginPageMobileStyle.roundedDiv}`}
        >
          <Image src="/images/apple.png" alt="google" width="12" height="12" />
          <p
            className={`${LoginPageMobileStyle.text} ${LoginPageMobileStyle.secondaryText}`}
            style={{ color: "#858585" }}
          >
            Sign in with Apple
          </p>
        </CHFlex>
      </CHFlex>
      <CVFlex
        className={`${LoginPageMobileStyle.container} ${LoginPageMobileStyle.bgroundedDiv}`}
      >
        <CVFlex sx={{ gap: "0.8rem" }}>
          <p
            className={`${LoginPageMobileStyle.text} ${LoginPageMobileStyle.secondaryText}`}
            style={{ fontSize: "1rem" }}
          >
            Email address
          </p>
          <input
            placeholder="johndoe@gmail.com"
            type="email"
            id="email"
            className={`${LoginPageMobileStyle.text} ${LoginPageMobileStyle.secondaryText} ${LoginPageMobileStyle.inputTag}`}
            style={{ fontSize: "1rem" }}
          />
        </CVFlex>
        <CVFlex sx={{ gap: "0.8rem" }}>
          <p
            className={`${LoginPageMobileStyle.text} ${LoginPageMobileStyle.secondaryText}`}
            style={{ fontSize: "1rem" }}
          >
            Password
          </p>
          <input
            type="password"
            id="password"
            className={`${LoginPageMobileStyle.text} ${LoginPageMobileStyle.secondaryText} ${LoginPageMobileStyle.inputTag}`}
            style={{ fontSize: "1rem" }}
          />
        </CVFlex>
        <p
          className={`${LoginPageMobileStyle.secondaryText} ${LoginPageMobileStyle.forgotPassword}`}
        >
          Forgot password?
        </p>
        <button
          className={`${LoginPageMobileStyle.container} ${LoginPageMobileStyle.text} ${LoginPageMobileStyle.primaryText} ${LoginPageMobileStyle.submitButton}`}
          type="button"
        >
          Sign In
        </button>
      </CVFlex>
      <CVFlex sx={{justifyContent:'center',gap:'0.5rem'}}>
        <p className={`${LoginPageMobileStyle.text} ${LoginPageMobileStyle.subHeading}`}>Don’t have an account?</p>
        <a className={`${LoginPageMobileStyle.text} ${LoginPageMobileStyle.RegisterHere}`}> Register here</a>
      </CVFlex>
      <CHFlex className={`${LoginPageMobileStyle.socialMediaDiv}`}>
          <FaGithub className={`${LoginPageMobileStyle.SocialMediaIcons}`} />
          <FaTwitter className={`${LoginPageMobileStyle.SocialMediaIcons}`} />
          <FaLinkedin className={`${LoginPageMobileStyle.SocialMediaIcons}`} />
          <FaDiscord className={`${LoginPageMobileStyle.SocialMediaIcons}`} />
        </CHFlex>
    </CVFlex>
  );
}
