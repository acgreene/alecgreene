import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <React.StrictMode>
      <RecoilRoot>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </RecoilRoot>
    </React.StrictMode>
  </HashRouter>
);
