import React from "react";
import "./style.css";

// This would come from your backend/API later
const orders: {
  previewUrl?: string;
  filename?: string;
  orderId?: string;
}[] = []; // Start with no orders

export const DepthFrameWrapper = (): React.JSX.Element => {
  return (
    <div className="depth-frame-wrapper">
      <div className="depth-frame-2">
        <div className="depth-frame-3">
          <div className="depth-frame-4">
            <div className="depth-frame-5">
              <div className="depth-frame-6">
                <div className="text-wrapper-3">Preview</div>
              </div>
              <div className="depth-frame-7">
                <div className="text-wrapper-4">Filename</div>
              </div>
              <div className="depth-frame-8">
                <div className="text-wrapper-4">Order</div>
              </div>
              <div className="depth-frame-9">
                <div className="text-wrapper-5">Actions</div>
              </div>
            </div>
          </div>
          <div className="depth-frame-4">
            {orders.length === 0 ? (
              // Show a blank row if there are no orders yet
              <div className="depth-frame-10">
                <div className="depth-frame-11">
                  <div className="depth-frame-12" />
                </div>
                <div className="depth-frame-13">
                  <div className="text-wrapper-6">&nbsp;</div>
                </div>
                <div className="depth-frame-14">
                  <div className="text-wrapper-7">&nbsp;</div>
                </div>
                <div className="depth-frame-15">
                  <div className="text-wrapper-8">&nbsp;</div>
                </div>
              </div>
            ) : (
              // Render a row for each order
              orders.map((order, idx) => (
                <div className="depth-frame-10" key={order.orderId || idx}>
                  <div className="depth-frame-11">
                    <div
                      className={`depth-frame-12`}
                      style={
                        order.previewUrl
                          ? { backgroundImage: `url(${order.previewUrl})` }
                          : undefined
                      }
                    />
                  </div>
                  <div className="depth-frame-13">
                    <div className="text-wrapper-6">
                      {order.filename || ""}
                    </div>
                  </div>
                  <div className="depth-frame-14">
                    <div className="text-wrapper-7">
                      {order.orderId ? `Order #${order.orderId}` : ""}
                    </div>
                  </div>
                  <div className="depth-frame-15">
                    <div className="text-wrapper-8">
                      {order.filename ? "Download | Delete" : ""}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
