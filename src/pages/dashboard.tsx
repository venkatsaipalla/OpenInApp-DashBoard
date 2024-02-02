import { CHFlex, CVFlex } from "@/components/CFlex";
import dynamic from "next/dynamic";
import useDeviceSize from "@/hooks/useDeviceSize";
import { LoadingPage } from "@/components/CFlex";
import { useEffect } from "react";
import DashboardWeb from "@/modules/dashboard/web/Dashboard.web";
import DashboardMobile from "@/modules/dashboard/mobile/DashboardMobile";

// const DashboardMobile = dynamic(
//   () => import("@/modules/dashboard/mobile/DashboardMobile"),
//   {
//     ssr: false,
//     loading: () => <LoadingPage />,
//   }
// );
// const DashboardWeb = dynamic(
//   () => import("@/modules/dashboard/web/Dashboard.web"),
//   {
//     ssr: false,
//     loading: () => <LoadingPage />,
//   }
// );

const Dashboard = () => {
  const deviceSize = useDeviceSize();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (deviceSize === "xs") return <DashboardMobile />;
  else return <DashboardWeb />;
};

export default Dashboard;
