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
import {
  LoginLeftSideDivWeb,
  LoginRightSideDivWeb,
} from "./Login.web.components";

export default function LoginWeb() {
  return (
    <CHFlex className={`${LoginPageWebStyles.bgContainer}`}>
      <LoginLeftSideDivWeb />
      <LoginRightSideDivWeb />
    </CHFlex>
  );
}
