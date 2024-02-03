import { CVFlex, CHFlex } from "@/components/CFlex";
import React from "react";
import LoginPageMobileStyle from "./LoginMobile.module.css";
import Image from "next/image";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import OAuth from "@/components/OAuth";
import {
  HeaderMobile,
  FooterMobile,
  GoogleAppleAuthMobile,
  SiginHeadingDivMobile,
  SiginFormMobile,
  RegisterInfoMobile
} from "./Login.mobile.components";

const LoginMobile = () => {
  return (
    <CVFlex className={`${LoginPageMobileStyle.bgContainer}`}>
      <HeaderMobile />
      <SiginHeadingDivMobile />
      <GoogleAppleAuthMobile />
      <SiginFormMobile />
      <RegisterInfoMobile />
      <FooterMobile />
    </CVFlex>
  );
};
export default LoginMobile;
