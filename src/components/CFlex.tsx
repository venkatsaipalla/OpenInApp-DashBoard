import React, { useEffect, useMemo, useRef, useState } from "react";

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
