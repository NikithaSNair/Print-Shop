import React from "react";
import { DepthFrame } from "./DepthFrame4";
import { DepthFrameWrapper } from "./DepthFrameWrapper";
import "./style.css";

export const StitchDesign = (): React.JSX.Element => {
  return (
    <div className="stitch-design" data-model-id="92:2745">
      <div className="depth-frame-19">
        <div className="depth-frame-20">
          <div className="depth-frame-21">
            <DepthFrame />
            <DepthFrameWrapper />
          </div>
        </div>
      </div>
    </div>
  );
};
