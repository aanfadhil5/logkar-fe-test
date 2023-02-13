import React from "react";
import { Oval } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-auto">
      <Oval
        height={80}
        width={80}
        color="#1d4e89"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#F1F5F9"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default LoadingPage;
