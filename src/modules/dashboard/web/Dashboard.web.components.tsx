import { CHFlex, CVFlex } from "@/components/CFlex";
import React, { useState } from "react";
import DashboardWebStyles from "./DashboardWeb.module.css";
import Image from "next/image";
import { RxCross2, RxDashboard } from "react-icons/rx";
import { IoDocumentText, IoSettingsOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaCalendarAlt, FaCloudUploadAlt, FaRegBell } from "react-icons/fa";
import { HiMiniTicket } from "react-icons/hi2";
import { LuUpload } from "react-icons/lu";
import readXlsxFile from "read-excel-file";
import * as XLSX from "xlsx";

const MenuTabs = [
  {
    id: 1,
    icon: <RxDashboard className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Dashboard",
  },
  {
    id: 2,
    icon: <FaCloudUploadAlt className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Upload",
  },
  {
    id: 3,
    icon: <HiMiniTicket className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Invoice",
  },
  {
    id: 4,
    icon: <IoDocumentText className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Schedule",
  },
  {
    id: 5,
    icon: <FaCalendarAlt className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Calendar",
  },
  {
    id: 6,
    icon: <IoIosNotifications className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Notification",
  },
  {
    id: 7,
    icon: <IoSettingsOutline className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Settings",
  },
];

export const DashboardMenuWeb = (props: any) => {
  const { activeTab, handleMenuTabChange } = props;
  return (
    <CVFlex className={`${DashboardWebStyles.menuTabDiv}`}>
      <CHFlex sx={{ marginLeft: "3.5rem" }}>
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
      <CVFlex sx={{ marginTop: "3rem", gap: "1.5rem" }}>
        {MenuTabs.map((item: any, index: any) => (
          <CHFlex
            className={
              activeTab == item.id
                ? `${DashboardWebStyles.TabItem} ${DashboardWebStyles.activeTabItem}`
                : `${DashboardWebStyles.TabItem}`
            }
            sx={{ gap: "0.88rem" }}
            key={index}
            id={item.id}
            onClick={() => handleMenuTabChange(item.id)}
          >
            {item.icon}
            <p
              className={`${DashboardWebStyles.text} ${DashboardWebStyles.secondaryText}`}
              style={{ color: "inherit" }}
            >
              {item.title}
            </p>
          </CHFlex>
        ))}
      </CVFlex>
    </CVFlex>
  );
};
DashboardMenuWeb.displayName = "DashboardMenuWeb";

export const DashboardHeaderWeb = () => (
  <CHFlex
    className={`${DashboardWebStyles.container} ${DashboardWebStyles.profileHeader}`}
  >
    <p
      className={`${DashboardWebStyles.text} ${DashboardWebStyles.primaryText}`}
    >
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
);
DashboardHeaderWeb.displayName = "DashboardHeaderWeb";

export const UploadSectionWeb = (props: any) => {
  const { handleFileUpload, removeFile, handleSubmit, fileName } = props;
  return (
    <CHFlex
      sx={{ justifyContent: "center", alignItems: "center", height: "80%" }}
    >
      <CVFlex className={`${DashboardWebStyles.dropBoxBgContainer}`}>
        <label htmlFor="upload">
          <CVFlex className={`${DashboardWebStyles.dropBox}`}>
            <Image alt="xl" src="/images/xl.png" width="27" height="27" />
            <input
              id="upload"
              type="file"
              // onChange={handleFileChange}
              onChange={handleFileUpload}
              style={{ display: "none" }}
              accept=".csv,.xlsx,.xls"
            />
            {fileName ? (
              <p
                className={`${DashboardWebStyles.dropBoxText}`}
                style={{ textOverflow: "ellipsis" }}
              >
                {fileName}
                <br />
                <div
                  style={{
                    color: "red",
                    cursor: "pointer",
                    height: "2rem",
                    // width: "2rem",
                    textAlign: "center",
                  }}
                  onClick={removeFile}
                >
                  Remove
                </div>
              </p>
            ) : (
              <p className={`${DashboardWebStyles.dropBoxText}`}>
                Drop your excel sheet here or{" "}
                <span style={{ color: "#605BFF" }}>browse</span>
              </p>
            )}
          </CVFlex>
        </label>
        <button
          className={`${DashboardWebStyles.submitButton}`}
          onClick={handleSubmit}
          disabled={fileName !== null ? false : true}
          style={fileName !== null ? { opacity: "100%" } : { opacity: "40%" }}
        >
          <LuUpload className="inherit" />
          <p className="inherit">Upload</p>
        </button>
      </CVFlex>
    </CHFlex>
  );
};

UploadSectionWeb.displayName = "UploadSectionWeb";

export const ColumnTitlesWeb = () => (
  <CHFlex sx={{ justifyContent: "space-between" }}>
    <p className={`${DashboardWebStyles.columnTitle}`}>SI No.</p>
    <p
      className={`${DashboardWebStyles.columnTitle}`}
      style={{ minWidth: "5rem" }}
    >
      Links
    </p>
    <p
      className={`${DashboardWebStyles.columnTitle}`}
      style={{ minWidth: "5rem" }}
    >
      Prefix
    </p>
    <p
      className={`${DashboardWebStyles.columnTitle}`}
      style={{ minWidth: "5rem" }}
    >
      Add Tags
    </p>
    <p
      className={`${DashboardWebStyles.columnTitle}`}
      style={{ minWidth: "35%" }}
    >
      Selected Tags
    </p>
  </CHFlex>
);
ColumnTitlesWeb.displayName = "ColumnTitlesWeb";

export const CustomSelectTagWeb = (props: any) => {
  const { handleSelectInputChange, item } = props;
  return (
    <div className={`${DashboardWebStyles.custom_select_Div}`}>
      <select
        className={`${DashboardWebStyles.selectTag}`}
        onChange={(e) => handleSelectInputChange(e.target.value, item.id)}
        id={item.id}
      >
        {item["select tags"] &&
          item["select tags"].split(", ").map((selectItem: any, index: any) => (
            <option value={selectItem} id={item.id} key={index}>
              {selectItem}
            </option>
          ))}
      </select>
    </div>
  );
};
CustomSelectTagWeb.displayName = "CustomSelectTag";

export const SelectedTagsDivWeb = (props: any) => {
  const { item, removeSelectedTag } = props;
  return (
    <CHFlex className={`${DashboardWebStyles.selectedTagDiv}`}>
      {item.tags &&
        item.tags.map((index: any, key: any) => (
          <CHFlex className={`${DashboardWebStyles.selectedTags}`} key={key}>
            <p className={`${DashboardWebStyles.selectTagText}`}>
              {index.label}
            </p>
            <RxCross2
              id={item.id}
              className={`${DashboardWebStyles.cross}`}
              onClick={() => removeSelectedTag(item.id, index.id)}
            />
          </CHFlex>
        ))}
    </CHFlex>
  );
};
SelectedTagsDivWeb.displayName = "SelectedTagsDivWeb";

export const ListItemRowWeb = (props: any) => {
  const { item, handleSelectInputChange, removeSelectedTag } = props;
  return (
    <li className={`${DashboardWebStyles.listItem}`} key={item.id}>
      <p className={`${DashboardWebStyles.listItemText}`}>{item.id}</p>
      <div
        className={`${DashboardWebStyles.listItemText} ${DashboardWebStyles.rough}`}
      >
        <a
          className={`${DashboardWebStyles.listItemText}`}
          style={{ color: "#5B93FF" }}
        >
          {item.links}
        </a>
      </div>
      <p className={`${DashboardWebStyles.listItemText}`}>{item.prefix}</p>
      <CustomSelectTagWeb
        item={item}
        handleSelectInputChange={handleSelectInputChange}
      />
      <SelectedTagsDivWeb item={item} removeSelectedTag={removeSelectedTag} />
    </li>
  );
};
ListItemRowWeb.displayName = "ListItemRowWeb";

export const ListingsResultsWeb = (props: any) => {
  const { data, handleSelectInputChange, removeSelectedTag } = props;
  return (
    <CVFlex className={`${DashboardWebStyles.UploadedItemsContainer}`}>
      <h1
        className={`${DashboardWebStyles.text} ${DashboardWebStyles.primaryText}`}
      >
        Uploads
      </h1>
      <CVFlex className={`${DashboardWebStyles.UploadItemsDiv}`}>
        <ColumnTitlesWeb />
        <ul className={`${DashboardWebStyles.orderList}`}>
          {data &&
            data.map((item: any) => (
              <ListItemRowWeb
                item={item}
                handleSelectInputChange={handleSelectInputChange}
                removeSelectedTag={removeSelectedTag}
              />
            ))}
        </ul>
      </CVFlex>
    </CVFlex>
  );
};

ListingsResultsWeb.displayName = "ListingsResultsWeb";
