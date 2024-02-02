import { CHFlex, CVFlex } from "@/components/CFlex";
import dynamic from "next/dynamic";
import useDeviceSize from "@/hooks/useDeviceSize";
import { LoadingPage } from "@/components/CFlex";
import { useEffect } from "react";
// import LoginWeb from "@/modules/login/web/Login.web";
// import LoginMobile from "@/modules/login/mobile/Login.mobile";

const LoginMobile = dynamic(() => import('@/modules/login/mobile/Login.mobile'), {
    ssr: false,
    loading: () => <LoadingPage />,
});
const LoginWeb = dynamic(() => import('@/modules/login/web/Login.web'), {
    ssr: false,
    loading: () => <LoadingPage />,
});

const LoginPage = () => {
  const deviceSize = useDeviceSize();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (deviceSize === "xs") return <LoginMobile />;
  else return <LoginWeb />;
};

export default LoginPage;
