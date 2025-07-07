import React from "react";
import "./style.css";

export const DepthFrame = (): React.JSX.Element => {
  return (
    <div className="depth-frame">
      <div className="div">
        <div className="div-wrapper">
          <div className="div-2" />
        </div>

        <div className="div-wrapper">
          <div className="text-wrapper">Print Shop Admin</div>
        </div>
      </div>

      <div className="div-3">
        <div className="div-4">
          <div className="div-wrapper">
            <div className="text-wrapper-2">Dashboard</div>
          </div>

          <div className="div-wrapper">
            <div className="text-wrapper-2">Orders</div>
          </div>

          <div className="div-wrapper">
            <div className="text-wrapper-2">Customers</div>
          </div>

          <div className="div-wrapper">
            <div className="text-wrapper-2">Files</div>
          </div>

          <div className="div-wrapper">
            <div className="text-wrapper-2">Settings</div>
          </div>
        </div>

        <div className="div-5" />
      </div>
    </div>
  );
};
