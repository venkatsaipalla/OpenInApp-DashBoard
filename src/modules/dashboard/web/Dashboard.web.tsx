import { CHFlex, CVFlex } from "@/components/CFlex";
import React from "react";
import DashboardWebStyles from "./DashboardWeb.module.css";
import Image from "next/image";
import { RxDashboard } from "react-icons/rx";
import { IoDocumentText, IoSettingsOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaCalendarAlt, FaCloudUploadAlt, FaRegBell } from "react-icons/fa";
import { HiMiniTicket } from "react-icons/hi2";
import { LuUpload } from "react-icons/lu";

const MenuTabs = [
  {
    icon: <RxDashboard className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Dashboard",
  },
  {
    icon: <FaCloudUploadAlt className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Upload",
  },
  {
    icon: <HiMiniTicket className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Invoice",
  },
  {
    icon: <IoDocumentText className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Schedule",
  },
  {
    icon: <FaCalendarAlt className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Calendar",
  },
  {
    icon: <IoIosNotifications className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Notification",
  },
  {
    icon: <IoSettingsOutline className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Settings",
  },
];
export default function DashboardWeb() {
  return (
    <CHFlex>
      <CVFlex className={`${DashboardWebStyles.menuTabDiv}`}>
        <CHFlex sx={{ marginLeft: "1.5rem" }}>
          <Image
            src="/images/Subtract.png"
            width="42"
            height="42"
            alt="logo"
            // style={{ position: "absolute", top: "36%", left: "0" }}
          />
          <h1
            className={`${DashboardWebStyles.text} ${DashboardWebStyles.MainHeading}`}
          >
            Base
          </h1>
        </CHFlex>
        <CVFlex sx={{ marginTop: "3rem", gap: "2.38rem" }}>
          {MenuTabs.map((item) => (
            <CHFlex
              className={`${DashboardWebStyles.TabItem}`}
              sx={{ gap: "0.88rem" }}
            >
              {item.icon}
              <p
                className={`${DashboardWebStyles.text} ${DashboardWebStyles.secondaryText}`}
              >
                {item.title}
              </p>
            </CHFlex>
          ))}
        </CVFlex>
      </CVFlex>
      <CVFlex className={`${DashboardWebStyles.rightDiv}`}>
        <CHFlex
          className={`${DashboardWebStyles.container} ${DashboardWebStyles.profileHeader}`}
        >
          <p
            className={`${DashboardWebStyles.text} ${DashboardWebStyles.primaryText}`}
          >
            {" "}
            Upload CSV
          </p>
          <CHFlex sx={{ gap: "2rem" }}>
            <FaRegBell className={`${DashboardWebStyles.Notification}`} />
            <Image
              src="/images/profile.png"
              alt="profile"
              width="30"
              height="30"
              className={`${DashboardWebStyles.avatarProfile}`}
            />
          </CHFlex>
        </CHFlex>
        <CHFlex
          sx={{ justifyContent: "center", alignItems: "center", height: "80%" }}
        >
          <CVFlex className={`${DashboardWebStyles.dropBoxBgContainer}`}>
            <CVFlex className={`${DashboardWebStyles.dropBox}`}>
              <Image alt="xl" src="/images/xl.png" width="27" height="27" />
              <p className={`${DashboardWebStyles.dropBoxText}`}>
                Drop your excel sheet here or{" "}
                <span style={{ color: "#605BFF" }}>browse</span>
              </p>
            </CVFlex>
            <CHFlex className={`${DashboardWebStyles.submitButton}`}>
              <LuUpload className="inherit" />
              <p className="inherit">Upload</p>
            </CHFlex>
          </CVFlex>
        </CHFlex>
      </CVFlex>
    </CHFlex>
  );
}
