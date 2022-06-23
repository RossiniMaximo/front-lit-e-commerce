import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Router } from "./router";
import { Spinner } from "../src/components/spinner";

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <RecoilRoot>
      <HashRouter>
        <Router />
      </HashRouter>
    </RecoilRoot>
  </Suspense>,
  document.getElementById("root")
);
