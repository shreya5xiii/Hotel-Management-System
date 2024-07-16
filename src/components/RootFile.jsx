import React, { useState } from "react";
import Index from "./Login";
import Signup from "./Signup";
export default function RootFile() {
  const [showroot, setshowroot] = useState(0);
  const returnComp = () => {
    switch (showroot) {
      case 1:
        return <Index setshowroot={setshowroot} />;
      default:
        return <Signup setshowroot={setshowroot} />;
    }
  };
  return <>{returnComp()}</>;
}
