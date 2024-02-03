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

import {
  DashboardMenuMobile,
  DashboardHeaderMobile,
  UploadSectionMobile,
  ListingsResultsMobile,
} from "./Dashboard.mobile.components";

const DashboardMobile = () => {
  const [data, setData] = useState([]);
  const [selectedTagsData, setSelectedTagsData]: any = useState({});
  const [files, setFiles]: any = useState(null);
  const [fileName, setFileName] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
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
        const tagExists = item.tags.some((tag: any) => tag.label === tagName);
        if (!tagExists) {
          item.tags = [
            ...item.tags,
            { label: tagName, id: Math.ceil(Math.random() * 123) },
          ];
        }
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
          <DashboardMenuMobile
            handleMenuTabChange={handleMenuTabChange}
            activeTab={activeTab}
          />
        </CDrawer>
      )}
      <DashboardHeaderMobile toggleMenu={toggleMenu} />
      <UploadSectionMobile
        handleFileUpload={handleFileUpload}
        fileName={fileName}
        removeFile={removeFile}
        handleSubmit={handleSubmit}
      />
      <ListingsResultsMobile
        data={data}
        handleSelectInputChange={handleSelectInputChange}
        removeSelectedTag={removeSelectedTag}
      />
    </CVFlex>
  );
};

export default DashboardMobile;
