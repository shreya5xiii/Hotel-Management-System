import React, { useState } from "react";
import Updateempform from "./Updateempform";
import Updateemp from "./Updateemp";
export default function UpdateEmpCase({ setshowComp }) {
  const [updateemp, setupdateemp] = useState(0);
  const [data, setdata] = useState(0);
  const returnCase = () => {
    switch (updateemp) {
      case 1:
        return <Updateempform data={data} setupdateemp={setupdateemp} />;
      default:
        return (
          <Updateemp
            setdata={setdata}
            setupdateemp={setupdateemp}
            setshowComp={setshowComp}
          />
        );
    }
  };
  return <>{returnCase()}</>;
}
