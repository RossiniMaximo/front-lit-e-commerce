import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Router } from "./router";
import { CircleLoader } from "./components/circleLoader";

ReactDOM.render(
  <Suspense fallback={<CircleLoader />}>
    <RecoilRoot>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RecoilRoot>
  </Suspense>,
  document.getElementById("root")
);
