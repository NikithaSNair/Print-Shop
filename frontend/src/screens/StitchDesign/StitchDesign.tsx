import { DepthFrame } from "./sections/DepthFrame";
import { DepthFrameWrapper } from "./sections/DepthFrameWrapper";
import { DivWrapper } from "./sections/DivWrapper";
import "./style.css";
import React from "react";

export const StitchDesign = (): React.JSX.Element => {
  return (
    <div className="stitch-design" data-model-id="92:1902">
      <div className="depth-frame-28">
        <div className="depth-frame-29">
          <DepthFrame />
          <DepthFrameWrapper />
          <DivWrapper />
        </div>
      </div>
    </div>
  );
};
