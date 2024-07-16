import React, { useState, useEffect } from "react";
import Welcome from "./Welcome";
import Addroom from "./Addroom";
import UpdateRoomCase from "./UpdateRoomCase";
import Allroom from "./Allroom";
import Deleteroom from "./Deleteroom";
import Addemp from "./Addemp";
import UpdateEmpCase from "./UpdateEmpCase";
import Allemp from "./Allemp";
import Deleteemp from "./Deleteemp";
import BookroomCase from "./BookroomCase";
import CheckOutCase from "./CheckOutCase";
import Clienthistory from "./Clienthistory";
import EmployeeHistory from "./EmployeeHistory";
import { useNavigate } from "react-router-dom";
export default function BeforeWelcome() {
  const [showComp, setshowComp] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("loggedin_user_name") == undefined ||
      localStorage.getItem("loggedin_user_id") == undefined ||
      localStorage.getItem("loggedin_user_email") == undefined
    ) {
      navigate("/");
    }
  }, []);

  const returnComp = () => {
    switch (showComp) {
      case 1:
        return <Addroom setshowComp={setshowComp} />;
      case 2:
        return <UpdateRoomCase setshowComp={setshowComp} />;
      case 3:
        return <Allroom setshowComp={setshowComp} />;
      case 4:
        return <Deleteroom setshowComp={setshowComp} />;
      case 5:
        return <Addemp setshowComp={setshowComp} />;
      case 6:
        return <UpdateEmpCase setshowComp={setshowComp} />;
      case 7:
        return <Allemp setshowComp={setshowComp} />;
      case 8:
        return <Deleteemp setshowComp={setshowComp} />;
      case 9:
        return <BookroomCase setshowComp={setshowComp} />;
      case 10:
        return <CheckOutCase setshowComp={setshowComp} />;
      case 11:
        return <Clienthistory setshowComp={setshowComp} />;
      case 12:
        return <EmployeeHistory setshowComp={setshowComp} />;
      default:
        return <Welcome setshowComp={setshowComp} />;
    }
  };

  return <>{returnComp()}</>;
}
