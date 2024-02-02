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

export default function DashboardWeb() {
  const [data, setData] = useState([]);
  const [selectedTagsData, setSelectedTagsData]: any = useState({});
  const [files, setFiles]: any = useState(null);
  const [fileName, setFileName] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [error, setError] = useState("");
  const allowedExtensions = ["csv", "xls", "xlsx"];

  const handleFileChange = (event: any) => {
    if (event.target.files[0]) {
      setError("");
      const fileExtension = event.target.files[0]?.name.split(".")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }
      setFileName(event.target.files[0].name);
    }
  };
  const handleSubmit = () => {
    // setFormData(data)

    const reader = new FileReader();
    reader.readAsBinaryString(files);
    reader.onload = (e: any) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData: any = XLSX.utils.sheet_to_json(sheet);
      // setData(parsedData);
      // Add empty "tags" array to each object
      const dataWithTags = parsedData.map((obj: any) => ({
        ...obj,
        tags: [], // Add empty "tags" array
      }));

      setData(dataWithTags);
    };
    setFileName(null);
    setFiles(null);
  };
  const removeFile = (event: any) => {
    event.stopPropagation();
    setFileName(null);
    setFiles(null);
  };

  const handleFileUpload = (event: any) => {
    if (event.target.files[0]) {
      setError("");
      const fileExtension = event.target.files[0]?.name.split(".")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }
      setFileName(event.target.files[0].name);
      setFiles(event.target.files[0]);
    }
  };
  console.log(data);
  const handleSelectInputChange = (tagName: any, id: any) => {
    console.log({ tagName, id });
    const shallow = [...data];
    const updatedTag: any = shallow.map((item: any) => {
      if (item.id === id) {
        item.tags = [
          ...item.tags,
          { label: tagName, id: Math.ceil(Math.random() * 123) },
        ];
      }
      return item;
    });
    setData(updatedTag);
  };
  const removeSelectedTag = (id1: any, id2: any) => {
    const shallow = [...data];
    const updatedTag: any = shallow.map((item: any) => {
      if (item.id === id1) {
        const tempTags = item.tags.filter((eachTag: any) => eachTag.id !== id2);
        item.tags = [...tempTags];
      }
      return item;
    });
    setData(updatedTag);
  };
  const handleMenuTabChange = (e: any) => {
    setActiveTab(e);
  };
  console.log({ selectedTagsData });
  return (
    <CHFlex>
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
      <CVFlex className={`${DashboardWebStyles.rightDiv}`}>
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
              style={
                fileName !== null ? { opacity: "100%" } : { opacity: "40%" }
              }
            >
              <LuUpload className="inherit" />
              <p className="inherit">Upload</p>
            </button>
          </CVFlex>
        </CHFlex>
        {data.length ? (
          <CVFlex className={`${DashboardWebStyles.UploadedItemsContainer}`}>
            <h1
              className={`${DashboardWebStyles.text} ${DashboardWebStyles.primaryText}`}
            >
              Uploads
            </h1>
            <CVFlex className={`${DashboardWebStyles.UploadItemsDiv}`}>
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
              <ul className={`${DashboardWebStyles.orderList}`}>
                {data &&
                  data.map((item: any) => (
                    <li
                      className={`${DashboardWebStyles.listItem}`}
                      key={item.id}
                    >
                      <p className={`${DashboardWebStyles.listItemText}`}>
                        {item.id}
                      </p>
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
                      <p className={`${DashboardWebStyles.listItemText}`}>
                        {item.prefix}
                      </p>
                      <div
                        className={`${DashboardWebStyles.custom_select_Div}`}
                      >
                        <select
                          className={`${DashboardWebStyles.selectTag}`}
                          onChange={(e) =>
                            handleSelectInputChange(e.target.value, item.id)
                          }
                          id={item.id}
                        >
                          {item["select tags"] &&
                            item["select tags"]
                              .split(", ")
                              .map((selectItem: any, index: any) => (
                                <option
                                  value={selectItem}
                                  id={item.id}
                                  key={index}
                                >
                                  {selectItem}
                                </option>
                              ))}
                        </select>
                      </div>

                      <CHFlex
                        className={`${DashboardWebStyles.selectedTagDiv}`}
                      >
                        {item.tags &&
                          item.tags.map((index: any, key: any) => (
                            <CHFlex
                              className={`${DashboardWebStyles.selectedTags}`}
                              key={key}
                            >
                              <p
                                className={`${DashboardWebStyles.selectTagText}`}
                              >
                                {index.label}
                              </p>
                              <RxCross2
                                id={item.id}
                                className={`${DashboardWebStyles.cross}`}
                                onClick={() =>
                                  removeSelectedTag(item.id, index.id)
                                }
                              />
                            </CHFlex>
                          ))}
                        {/* <CHFlex
                          className={`${DashboardWebStyles.selectedTags}`}
                        >
                          <p className={`${DashboardWebStyles.selectTagText}`}>
                            TAG 1
                          </p>
                          <RxCross2 className={`${DashboardWebStyles.cross}`} />
                        </CHFlex> */}
                      </CHFlex>
                    </li>
                  ))}
              </ul>
            </CVFlex>
          </CVFlex>
        ) : (
          <></>
        )}
      </CVFlex>
    </CHFlex>
  );
}
