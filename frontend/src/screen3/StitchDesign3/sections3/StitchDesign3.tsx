import React from "react";
import { DepthFrame } from "./DepthFrame3";
import { DepthFrameWrapper } from "./DepthFrame3/DepthFrameWrapper3/DepthFrameWrapper";

import "./style.css";

export const StitchDesign = (): React.JSX.Element => {
  return (
    <div className="stitch-design" data-model-id="92:2592">
      <div className="depth-frame-20">
        <div className="depth-frame-21">
          <DepthFrame />
          <div className="depth-frame-22">
            <div className="depth-frame-23">
              <div className="depth-frame-24">
                <div className="depth-frame-25">
                  <div className="text-wrapper-9">Uploaded Files</div>
                </div>
              </div>

              <DepthFrameWrapper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
