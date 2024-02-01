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
  return (
    <CVFlex className={`${DashboardMobileStyles.drawerContainer1}`}>
      {/* <CVFlex className={`${DashboardMobileStyles.drawerContainer2}`}> */}

      <CVFlex sx={{ gap: "1.62rem" }}>
        {MenuTabs.map((item) => (
          <CHFlex
            className={`${DashboardMobileStyles.menuTabDiv}`}
            key={item.id}
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

export default function DashboardMobile() {
  const [data, setData] = useState([]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const allowedExtensions = ["csv", "xls", "xlsx"];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log({ error });
  console.log({ data });
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
      setSelectedFile(event.target.files[0]);
    }
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Handle the file submission here, you can send it to the server or process it further.
    console.log("Selected file:", selectedFile);
    readCSVFile();
  };
  const removeFile = () => {
    setSelectedFile(null);
    setFileName(null);
  };
  const readCSVFile = () => {
    selectedFile &&
      readXlsxFile(selectedFile).then((rows) => {
        console.log(rows);
      });
  };
  const handleFileUpload = (e: any) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  };
  return (
    <CVFlex className={`${DashboardMobileStyles.bgContainer}`}>
      {isOpen && (
        <CDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <MobileMenu />
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
              {selectedFile ? (
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
        <CVFlex
          className={`${DashboardMobileStyles.container} ${DashboardMobileStyles.UploadItemsDiv}`}
        >
          <CHFlex sx={{ gap: "5.5rem" }}>
            <p className={`${DashboardMobileStyles.columnTitle}`}>SI No.</p>
            <p className={`${DashboardMobileStyles.columnTitle}`}>Links</p>
            <p className={`${DashboardMobileStyles.columnTitle}`}>Prefix</p>
            <p className={`${DashboardMobileStyles.columnTitle}`}>Add Tags</p>
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
                    <select className={`${DashboardMobileStyles.selectTag}`}>
                      {item["select tags"] &&
                        item["select tags"]
                          .split(" ")
                          .map((selectItem: any) => (
                            <option value={selectItem}>{selectItem}</option>
                          ))}
                    </select>
                  </div>
                  <CHFlex className={`${DashboardMobileStyles.selectedTagDiv}`}>
                    <CHFlex className={`${DashboardMobileStyles.selectedTags}`}>
                      <p className={`${DashboardMobileStyles.selectTagText}`}>
                        TAG 1
                      </p>
                      <RxCross2 className={`${DashboardMobileStyles.cross}`} />
                    </CHFlex>
                    <CHFlex className={`${DashboardMobileStyles.selectedTags}`}>
                      <p className={`${DashboardMobileStyles.selectTagText}`}>
                        TAG 1
                      </p>
                      <RxCross2 className={`${DashboardMobileStyles.cross}`} />
                    </CHFlex>
                    <CHFlex className={`${DashboardMobileStyles.selectedTags}`}>
                      <p className={`${DashboardMobileStyles.selectTagText}`}>
                        TAG 1
                      </p>
                      <RxCross2 className={`${DashboardMobileStyles.cross}`} />
                    </CHFlex>
                    <CHFlex className={`${DashboardMobileStyles.selectedTags}`}>
                      <p className={`${DashboardMobileStyles.selectTagText}`}>
                        TAG 1
                      </p>
                      <RxCross2 className={`${DashboardMobileStyles.cross}`} />
                    </CHFlex>
                  </CHFlex>
                </li>
              ))}
          </ul>
        </CVFlex>
      </CVFlex>
      {/* {data.length > 0 && (
        <table className="table" className={`${DashboardMobileStyles.container} ${DashboardMobileStyles.UploadItemsDiv}`}>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key} className={`${DashboardMobileStyles.columnTitle}`}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody >
            {data.map((row, index) => (
              <tr key={index}  className={`${DashboardMobileStyles.listItem}`}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )} */}
    </CVFlex>
  );
}
