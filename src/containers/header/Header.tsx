import Loading from "components/loading/Loading";
import Navbar from "containers/navbar/Navbar";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="cover">
        {/* <img
          src="https://vcdn-giaitri.vnecdn.net/2023/03/27/John-Wick-4-7670-1679899900.png"
          alt="cover"
          style={{ position: "absolute" }}
        /> */}
      </div>
      <Navbar />
      {/* <Loading /> */}
    </div>
  );
};

export default Header;
