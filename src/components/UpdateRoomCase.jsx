import React, { useState } from "react";
import UpdateroomForm from "./UpdateroomForm";
import Updateroom from "./Updateroom";
export default function UpdateRoomCase({ setshowComp }) {
  const [updateroom, setupdateroom] = useState(0);
  const [data, setdata] = useState(0);
  const returnCase = () => {
    switch (updateroom) {
      case 1:
        return <UpdateroomForm data={data} setupdateroom={setupdateroom} />;
      default:
        return (
          <Updateroom
            setdata={setdata}
            setupdateroom={setupdateroom}
            setshowComp={setshowComp}
          />
        );
    }
  };
  return <>{returnCase()}</>;
}
