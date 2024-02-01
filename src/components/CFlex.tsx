import React, { useEffect, useMemo, useRef, useState } from "react";
import Modal from "react-modal";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
// Import Swiper styles
import DrawerStyles from "@/components/CustomDrawer.module.css";
import { RxCross2, RxCrossCircled } from "react-icons/rx";
import DashboardMobileStyles from "@/modules/dashboard/mobile/DashboardMobile.module.css";
import Image from "next/image";

export const CHFlex = React.memo((props: any) => {
  const { className, children, sx } = props;
  return (
    <div
      style={{
        // justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        ...sx,
      }}
      {...{ className }}
    >
      {children}
    </div>
  );
});

CHFlex.displayName = "CFlex";

export const CVFlex = React.memo((props: any) => {
  const { className, children, sx } = props;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", ...sx }}
      {...{ className }}
    >
      {children}
    </div>
  );
});
CVFlex.displayName = "CVFlex";

export const LoadingPage = () => {
  return (
    <div
      style={{
        minHeight: "60%",
        padding: "5em",
        margin: "2em auto",
        textAlign: "center",
      }}
    >
      <img
        alt="charistism loader"
        style={{
          height: "8em",
        }}
        src={
          "https://charitism-campaigns.s3.ap-south-1.amazonaws.com/charitism-v2/campaign-details/48e4d153-2125-44ce-8435-e06b55845837"
        }
      />
    </div>
  );
};

LoadingPage.displayName = "LoadingPage";

export const CDrawer = (props: any) => {
  // const [isOpen, setIsOpen] = React.useState(false);
  const { isOpen, setIsOpen, children } = props;
  const toggleDrawer = () => {
    setIsOpen((prevState: any) => !prevState);
  };

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="left"
      className="bla bla bla"
      style={{
        borderTopRightRadius: "1rem",
        borderBottomRightRadius: "1rem",
        backgroundColor: "white",
      }}
    >
      <CHFlex className={`${DashboardMobileStyles.drawerHeader}`}>
        <CHFlex sx={{ gap: "0.8rem" }}>
          <Image src="/images/Subtract.png" alt="logo" width="26" height="26" />
          <p className={`${DashboardMobileStyles.MainHeading}`}>Base</p>
        </CHFlex>
        <RxCross2
          style={{ fontSize: "1.3rem", cursor: "pointer" }}
          onClick={toggleDrawer}
        />
      </CHFlex>
      {children}
    </Drawer>
  );
};

CDrawer.displayName = "CDrawer";
