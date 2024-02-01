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

const MenuTabs = [
  {id:1,
    icon: <RxDashboard className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Dashboard",
  },
  {id:2,
    icon: <FaCloudUploadAlt className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Upload",
  },
  {id:3,
    icon: <HiMiniTicket className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Invoice",
  },
  {id:4,
    icon: <IoDocumentText className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Schedule",
  },
  {id:5,
    icon: <FaCalendarAlt className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Calendar",
  },
  {id:6,
    icon: <IoIosNotifications className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Notification",
  },
  {id:7,
    icon: <IoSettingsOutline className={`${DashboardWebStyles.tabIcon}`} />,
    title: "Settings",
  },
];
export default function DashboardWeb() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the file submission here, you can send it to the server or process it further.
    console.log("Selected file:", selectedFile);
  };
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
              key={item.id}
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
              <input type="file" onChange={handleFileChange} />
              <p className={`${DashboardWebStyles.dropBoxText}`}>
                Drop your excel sheet here or{" "}
                <span style={{ color: "#605BFF" }}>browse</span>
              </p>
            </CVFlex>
            <button
              className={`${DashboardWebStyles.submitButton}`}
              onClick={handleSubmit}
            >
              {/* <CHFlex className={`${DashboardWebStyles.submitButton}`}> */}
              <LuUpload className="inherit" />
              <p className="inherit">Upload</p>
              {/* </CHFlex> */}
            </button>
          </CVFlex>
        </CHFlex>
        <CVFlex className={`${DashboardWebStyles.UploadedItemsContainer}`}>
          <h1
            className={`${DashboardWebStyles.text} ${DashboardWebStyles.primaryText}`}
          >
            Uploads
          </h1>
          <CVFlex className={`${DashboardWebStyles.UploadItemsDiv}`}>
            <CHFlex sx={{ justifyContent: "space-between" }}>
              <p className={`${DashboardWebStyles.columnTitle}`}>SI No.</p>
              <p className={`${DashboardWebStyles.columnTitle}`}>Links</p>
              <p className={`${DashboardWebStyles.columnTitle}`}>Prefix</p>
              <p className={`${DashboardWebStyles.columnTitle}`}>Add Tags</p>
              <p
                className={`${DashboardWebStyles.columnTitle}`}
                style={{ minWidth: "22rem" }}
              >
                Selected Tags
              </p>
            </CHFlex>
            <ol className={`${DashboardWebStyles.orderList}`}>
              <li className={`${DashboardWebStyles.listItem}`} key={1}>
                <p className={`${DashboardWebStyles.listItemText}`}>01</p>
                <a
                  className={`${DashboardWebStyles.listItemText}`}
                  style={{ color: "#5B93FF" }}
                >
                  www.google.com
                </a>
                <p className={`${DashboardWebStyles.listItemText}`}>
                  prefixsample
                </p>
                <div className={`${DashboardWebStyles.custom_select_Div}`}>
                  <select className={`${DashboardWebStyles.selectTag}`}>
                    <option value="1">Tag 1</option>
                    <option value="2">Tag 2</option>
                    <option value="3">Tag 3</option>
                    <option value="4">Tag 4</option>
                    <option value="5">Tag 5</option>
                  </select>
                </div>
                <CHFlex className={`${DashboardWebStyles.selectedTagDiv}`}>
                  <CHFlex className={`${DashboardWebStyles.selectedTags}`}>
                    <p className={`${DashboardWebStyles.selectTagText}`}>
                      TAG 1
                    </p>
                    <RxCross2 className={`${DashboardWebStyles.cross}`} />
                  </CHFlex>
                  <CHFlex className={`${DashboardWebStyles.selectedTags}`}>
                    <p className={`${DashboardWebStyles.selectTagText}`}>
                      TAG 1
                    </p>
                    <RxCross2 className={`${DashboardWebStyles.cross}`} />
                  </CHFlex>
                  <CHFlex className={`${DashboardWebStyles.selectedTags}`}>
                    <p className={`${DashboardWebStyles.selectTagText}`}>
                      TAG 1
                    </p>
                    <RxCross2 className={`${DashboardWebStyles.cross}`} />
                  </CHFlex>
                  <CHFlex className={`${DashboardWebStyles.selectedTags}`}>
                    <p className={`${DashboardWebStyles.selectTagText}`}>
                      TAG 1
                    </p>
                    <RxCross2 className={`${DashboardWebStyles.cross}`} />
                  </CHFlex>
                </CHFlex>
              </li>
              <li className={`${DashboardWebStyles.listItem}`} key={2}>
                <p className={`${DashboardWebStyles.listItemText}`}>01</p>
                <a
                  className={`${DashboardWebStyles.listItemText}`}
                  style={{ color: "#5B93FF" }}
                >
                  www.google.com
                </a>
                <p className={`${DashboardWebStyles.listItemText}`}>
                  prefixsample
                </p>
                <div className={`${DashboardWebStyles.custom_select_Div}`}>
                  <select className={`${DashboardWebStyles.selectTag}`}>
                    <option value="1">Tag 1</option>
                    <option value="2">Tag 2</option>
                    <option value="3">Tag 3</option>
                    <option value="4">Tag 4</option>
                    <option value="5">Tag 5</option>
                  </select>
                </div>
                <CHFlex
                  className={`${DashboardWebStyles.selectedTagDiv}`}
                ></CHFlex>
              </li>
            </ol>
          </CVFlex>
        </CVFlex>
      </CVFlex>
    </CHFlex>
  );
}
