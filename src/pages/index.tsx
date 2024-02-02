import useDeviceSize from "@/hooks/useDeviceSize";
// import { AppDispatch, RootState } from '@/redux/store';
import { LoadingPage } from "@/components/CFlex";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { redirect } from "next/navigation";
// import {Router, Route, Link, RouteHandler} from 'react-router';
const HomePageMobile = dynamic(
  () => import("@/modules/homepage/mobile/HomePageMobile"),
  {
    ssr: false,
    loading: () => <LoadingPage />,
  }
);
const HomePageTablet = dynamic(
  () => import("@/modules/homepage/web/HomePageWeb"),
  {
    ssr: false,
    loading: () => <LoadingPage />,
  }
);

const HomePage = () => {
  const deviceSize = useDeviceSize();
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, []);
  console.log({ router });
  if (deviceSize === "xs") return <LoadingPage />;
  return <LoadingPage />;
};

export default HomePage;
