import { CDrawer, CHFlex, CVFlex } from "@/components/CFlex";
import React, { useState } from "react";
import DashboardMobileStyles from "./DashboardMobile.module.css";
import { IoMenuSharp } from "react-icons/io5";
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
    icon: <RxDashboard className={`${DashboardMobileStyles.tabIcon}`} />,
    title: "Dashboard",
  },
  {
    id: 2,
    icon: <FaCloudUploadAlt className={`${DashboardMobileStyles.tabIcon}`} />,
    title: "Upload",
  },
  {
    id: 3,
    icon: <HiMiniTicket className={`${DashboardMobileStyles.tabIcon}`} />,
    title: "Invoice",
  },
  {
    id: 4,
    icon: <IoDocumentText className={`${DashboardMobileStyles.tabIcon}`} />,
    title: "Schedule",
  },
  {
    id: 5,
    icon: <FaCalendarAlt className={`${DashboardMobileStyles.tabIcon}`} />,
    title: "Calendar",
  },
  {
    id: 6,
    icon: <IoIosNotifications className={`${DashboardMobileStyles.tabIcon}`} />,
    title: "Notification",
  },
  {
    id: 7,
    icon: <IoSettingsOutline className={`${DashboardMobileStyles.tabIcon}`} />,
    title: "Settings",
  },
];

const MobileMenu = (props: any) => {
  const { activeTab, handleMenuTabChange } = props;
  const action = (id: any) => {
    handleMenuTabChange(id);
  };
  return (
    <CVFlex className={`${DashboardMobileStyles.drawerContainer1}`}>
      {/* <CVFlex className={`${DashboardMobileStyles.drawerContainer2}`}> */}

      <CVFlex sx={{ gap: "1.62rem" }}>
        {MenuTabs.map((item) => (
          <CHFlex
            className={
              activeTab == item.id
                ? ` ${DashboardMobileStyles.activeTabDiv} ${DashboardMobileStyles.menuTabDiv}`
                : `${DashboardMobileStyles.menuTabDiv}`
            }
            key={item.id}
            onClick={() => action(item.id)}
          >
            {item.icon}
            <p
              className={`${DashboardMobileStyles.secondaryText}`}
              style={{ color: "inherit" }}
            >
              {item.title}
            </p>
          </CHFlex>
        ))}
      </CVFlex>
      {/* </CVFlex> */}
    </CVFlex>
  );
};

const DashboardMobile = () => {
  const [data, setData] = useState([]);
  const [selectedTagsData, setSelectedTagsData]: any = useState({});
  const [files, setFiles]: any = useState(null);
  const [fileName, setFileName] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [error, setError] = useState("");
  const allowedExtensions = ["csv", "xls", "xlsx"];

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

    console.log(updatedTag);
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
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleFileChange = (event: any) => {
    console.log(event);
    if (event.target.files[0]) {
      setError("");
      const fileExtension = event.target.files[0]?.name.split(".")[1];
      console.log(fileExtension);
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }
      setFileName(event.target.files[0].name);
    }
  };

  return (
    <CVFlex className={`${DashboardMobileStyles.bgContainer}`}>
      {isOpen && (
        <CDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <MobileMenu
            handleMenuTabChange={handleMenuTabChange}
            activeTab={activeTab}
          />
        </CDrawer>
      )}
      <CHFlex className={`${DashboardMobileStyles.headerMobile}`}>
        <CHFlex
          className={`${DashboardMobileStyles.container}`}
          sx={{ justifyContent: "space-between" }}
        >
          <CHFlex sx={{ gap: "0.8rem" }}>
            <IoMenuSharp
              className={`${DashboardMobileStyles.menuIcon}`}
              onClick={toggleMenu}
            />
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
              width="35"
              height="35"
              className={`${DashboardMobileStyles.avatarProfile}`}
            />
          </CHFlex>
        </CHFlex>
      </CHFlex>
      <CVFlex
        className={`${DashboardMobileStyles.container}`}
        sx={{ marginTop: "1.75rem", gap: "1.5rem" }}
      >
        <p className={`${DashboardMobileStyles.primaryText}`}>Upload CSV</p>
        <CVFlex className={`${DashboardMobileStyles.dropBoxBgContainer}`}>
          <label htmlFor="upload">
            <CVFlex className={`${DashboardMobileStyles.dropBox}`}>
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
                  className={`${DashboardMobileStyles.secondaryText}`}
                  style={{ textOverflow: "ellipsis" }}
                >
                  {fileName}
                  <br />
                  <span
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={removeFile}
                  >
                    remove
                  </span>
                </p>
              ) : (
                <p className={`${DashboardMobileStyles.secondaryText}`}>
                  Drop your excel sheet here or{" "}
                  <span style={{ color: "#605BFF" }}>browse</span>
                </p>
              )}
            </CVFlex>
          </label>
          <button
            className={`${DashboardMobileStyles.submitButton}`}
            onClick={handleSubmit}
            disabled={fileName !== null ? false : true}
            style={fileName !== null ? { opacity: "100%" } : { opacity: "40%" }}
          >
            {/* <CHFlex className={`${DashboardMobileStyles.submitButton}`}> */}
            <LuUpload className="inherit" />
            <p className="inherit">Upload</p>
            {/* </CHFlex> */}
          </button>
        </CVFlex>
      </CVFlex>
      <CVFlex
        className={` ${DashboardMobileStyles.container} ${DashboardMobileStyles.UploadedItemsContainer}`}
      >
        <p
          className={`${DashboardMobileStyles.primaryText}`}
          style={{ marginTop: "3rem" }}
        >
          Uploads
        </p>
        <CVFlex className={` ${DashboardMobileStyles.UploadItemsDiv}`}>
          <CHFlex sx={{ gap: "5rem" }}>
            <p className={`${DashboardMobileStyles.columnTitle}`}>SI No.</p>
            <p className={`${DashboardMobileStyles.columnTitle}`}>Links</p>
            <p
              className={`${DashboardMobileStyles.columnTitle}`}
              // style={{ marginRight: "-3rem" }}
            >
              Prefix
            </p>
            <p
              className={`${DashboardMobileStyles.columnTitle}`}
              // style={{ marginRight: "-1rem" }}
            >
              Add Tags
            </p>
            <p
              className={`${DashboardMobileStyles.columnTitle}`}
              style={{ minWidth: "10rem" }}
            >
              Selected Tags
            </p>
          </CHFlex>
          <ul className={`${DashboardMobileStyles.orderList}`}>
            {data &&
              data.map((item: any) => (
                <li
                  className={`${DashboardMobileStyles.listItem}`}
                  key={item.id}
                >
                  <p className={`${DashboardMobileStyles.listItemText}`}>
                    {item.id}
                  </p>
                  <div
                    className={`${DashboardMobileStyles.listItemText} ${DashboardMobileStyles.rough}`}
                  >
                    <a
                      className={`${DashboardMobileStyles.listItemText}`}
                      style={{ color: "#5B93FF" }}
                    >
                      {item.links}
                    </a>
                  </div>
                  <p className={`${DashboardMobileStyles.listItemText}`}>
                    {item.prefix}
                  </p>
                  <div className={`${DashboardMobileStyles.custom_select_Div}`}>
                    <select
                      className={`${DashboardMobileStyles.selectTag}`}
                      onChange={(e: any) =>
                        handleSelectInputChange(e.target.value, item.id)
                      }
                      id={item.id}
                    >
                      {item["select tags"] &&
                        item["select tags"]
                          .split(", ")
                          .map((selectItem: any, index: any) => (
                            <option value={selectItem} id={item.id} key={index}>
                              {selectItem}
                            </option>
                          ))}
                    </select>
                  </div>
                  <CHFlex className={`${DashboardMobileStyles.selectedTagDiv}`}>
                    {item.tags &&
                      item.tags.map((index: any, key: any) => (
                        <CHFlex
                          className={`${DashboardMobileStyles.selectedTags}`}
                          key={key}
                        >
                          <p
                            className={`${DashboardMobileStyles.selectTagText}`}
                          >
                            {index.label}
                          </p>
                          <RxCross2
                            className={`${DashboardMobileStyles.cross}`}
                            onClick={() => removeSelectedTag(item.id, index.id)}
                          />
                        </CHFlex>
                      ))}
                  </CHFlex>
                </li>
              ))}
          </ul>
        </CVFlex>
      </CVFlex>
    </CVFlex>
  );
};

export default DashboardMobile;
