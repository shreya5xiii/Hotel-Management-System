import React, { useState } from "react";
import Bookroom from "./Bookroom";
import Bookroomform from "./Bookroomform";
export default function BookroomCase({ setshowComp }) {
  const [bookroom, setbookroom] = useState(0);
  const [data, setdata] = useState(0);
  const returnCase = () => {
    switch (bookroom) {
      case 1:
        return <Bookroomform data={data} setbookroom={setbookroom} />;
      default:
        return (
          <Bookroom
            setdata={setdata}
            setbookroom={setbookroom}
            setshowComp={setshowComp}
          />
        );
    }
  };
  return <>{returnCase()}</>;
}
