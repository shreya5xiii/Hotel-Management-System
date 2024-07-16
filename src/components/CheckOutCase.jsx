import React, { useState } from "react";
import Checkout from "./Checkout";
import Checkoutform from "./Checkoutform";
export default function CheckOutCase({ setshowComp }) {
  const [checkout, setcheckout] = useState(0);
  const [data, setdata] = useState(0);
  const returnCase = () => {
    switch (checkout) {
      case 1:
        return <Checkoutform data={data} setcheckout={setcheckout} />;
      default:
        return (
          <Checkout
            setdata={setdata}
            setcheckout={setcheckout}
            setshowComp={setshowComp}
          />
        );
    }
  };
  return <>{returnCase()}</>;
}
