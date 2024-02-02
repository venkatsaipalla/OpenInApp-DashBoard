import { CHFlex, CVFlex } from "@/components/CFlex";
import styles from "@/styles/Design.module.css";
import LoginPageWebStyles from "./LoginWeb.module.css";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import OAuth from "@/components/OAuth";
export default function LoginWeb() {
  return (
    <CHFlex className={`${LoginPageWebStyles.bgContainer}`}>
      <div
        className={`${LoginPageWebStyles.leftDiv}`}
        style={{ backgroundImage: 'url("/images/Leftside.png")' }}
      >
        <div className={`${LoginPageWebStyles.logoDiv}`}>
          <Image
            src="/images/Ellipse111.png"
            alt="logo"
            width="80"
            height="80"
          />
          <Image
            src="/images/Vector7.png"
            width="80"
            height="22"
            alt="ZigZagline"
            style={{ position: "absolute", top: "36%", left: "0" }}
          />
        </div>
        <h1
          className={`${LoginPageWebStyles.primaryText} ${LoginPageWebStyles.baseText}`}
        >
          BASE
        </h1>
        <CHFlex className={`${LoginPageWebStyles.socialMediaDiv}`}>
          <FaGithub className={`${LoginPageWebStyles.SocialMediaIcons}`} />
          <FaTwitter className={`${LoginPageWebStyles.SocialMediaIcons}`} />
          <FaLinkedin className={`${LoginPageWebStyles.SocialMediaIcons}`} />
          <FaDiscord className={`${LoginPageWebStyles.SocialMediaIcons}`} />
        </CHFlex>
      </div>
      <CHFlex sx={{ justifyContent: "center", width: "50%" }}>
        <CVFlex sx={{ gap: "1.72rem", maxWidth: "26.41469rem" }}>
          <CVFlex sx={{ gap: "0.34rem" }}>
            <h2 className={`${LoginPageWebStyles.MainHeading}`}>SignIn</h2>
            <p className={`${LoginPageWebStyles.primaryText}`}>
              Sign in to your account
            </p>
          </CVFlex>
          <CHFlex sx={{ gap: "1.72rem" }}>
            {/* <CHFlex
                className={`${LoginPageWebStyles.googleTabDiv} ${LoginPageWebStyles.roundedDiv}`}
              >
                <Image
                  src="/images/google-icon.png"
                  alt="google"
                  width="16"
                  height="16"
                />
                <p className={`${LoginPageWebStyles.secondaryText}`}>
                  Sign in with Google
                </p>
              </CHFlex> */}
            <OAuth />
            <CHFlex
              className={`${LoginPageWebStyles.googleTabDiv}  ${LoginPageWebStyles.roundedDiv}`}
            >
              <Image
                src="/images/apple.png"
                alt="google"
                width="16"
                height="16"
              />
              <p className={`${LoginPageWebStyles.secondaryText}`}>
                Sign in with Apple
              </p>
            </CHFlex>
          </CHFlex>
          <CVFlex
            className={`${LoginPageWebStyles.roundedDiv} ${LoginPageWebStyles.loginForm}`}
          >
            <CVFlex sx={{ gap: "0.69rem" }}>
              <p className={`${LoginPageWebStyles.primaryText}`}>
                Email address
              </p>
              <input
                type="email"
                id="email"
                className={`${LoginPageWebStyles.inputDiv} ${LoginPageWebStyles.primaryText}`}
              />
            </CVFlex>
            <CVFlex sx={{ gap: "0.69rem" }}>
              <p className={`${LoginPageWebStyles.primaryText}`}>Password</p>
              <input
                type="password"
                id="password"
                className={`${LoginPageWebStyles.inputDiv} ${LoginPageWebStyles.primaryText}`}
              />
            </CVFlex>
            <p
              className={`${LoginPageWebStyles.primaryText} ${LoginPageWebStyles.forgotPassword}`}
            >
              Forgot password?
            </p>
            <button
              className={`${LoginPageWebStyles.MainHeading} ${LoginPageWebStyles.submitButton}`}
              type="button"
            >
              Sign In
            </button>
          </CVFlex>
        </CVFlex>
      </CHFlex>
    </CHFlex>
  );
}
