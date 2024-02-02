import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { persistor, store } from "../redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
