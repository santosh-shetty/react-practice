import React from "react";
import  LoadingGIF from "../Icons/loading.gif";

const Loading = () => {
  return (
    <div className="mx-auto d-flex justify-content-center align-content-center">
     <img className="loadingImg" src={LoadingGIF} alt="" />
    </div>
  );
};

export default Loading;
