import React from "react";
const NotFound = () => {
  return (
    <div
      style={{ display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh' }}
    >
      <div
        className="m-5 p-5 h2 text-danger border font-weight-bold "
      >
        404:Not Found
      </div>
    </div>
  );
};
export default NotFound;
