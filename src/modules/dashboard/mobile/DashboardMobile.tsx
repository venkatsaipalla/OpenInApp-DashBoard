import { CHFlex, CVFlex } from "@/components/CFlex";
import React from "react";
import DashboardMobileStyles from "./DashboardMobile.module.css";
import { IoMenuSharp } from "react-icons/io5";
import Image from "next/image";
import { FaRegBell } from "react-icons/fa";
export default function DashboardMobile() {
  return (
    <CVFlex className={`${DashboardMobileStyles.bgContainer}`}>
      <CHFlex className={`${DashboardMobileStyles.headerMobile}`}>
        <CHFlex
          className={`${DashboardMobileStyles.container}`}
          sx={{ justifyContent: "space-between", border: "1px solid red" }}
        >
          <CHFlex sx={{ gap: "0.8rem" }}>
            <IoMenuSharp className={`${DashboardMobileStyles.menuIcon}`}/>
            <Image
              src="/images/Subtract.png"
              alt="logo"
              width="26"
              height="26"
            />
            <p className={`${DashboardMobileStyles.MainHeading}`}>Base</p>
          </CHFlex>
          <CHFlex className={`${DashboardMobileStyles.profileHeader}`}>
            <FaRegBell className={`${DashboardMobileStyles.bellIcon}`} />
            <Image
              src="/images/profile.png"
              alt="Profile"
              width="40"
              height="40"
              className={`${DashboardMobileStyles.avatarProfile}`} 
            />
          </CHFlex>
        </CHFlex>
      </CHFlex>
    </CVFlex>
  );
}
