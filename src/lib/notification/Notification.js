import React from "react";
import PropTypes from "prop-types";

function Notification(props) {
  if (!props.visible) {
    return null;
  }
  return (
    <div type={props.type}>
      {props.withButtons
        ? <div>
            <span>
              {props.text}
            </span>
            <div>
              <button onClick={props.anotherOnClick}>
                {props.anotherTitle}
              </button>
              <button onClick={props.closeOnClick}>
                {props.closeTitle}
              </button>
            </div>
          </div>
        : props.text}
    </div>
  );
}

Notification.propTypes = {
  anotherTitle: PropTypes.string,
  anotherOnClick: PropTypes.func,
  closeTitle: PropTypes.string,
  closeOnClick: PropTypes.func,
  visible: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.oneOf(["success", "info", "warning", "danger"]),
  withButtons: PropTypes.bool
};

Notification.defaultProps = {
  type: "success",
  text: "Saved Successfully!",
  anotherTitle: "Add another",
  closeTitle: "Close"
};

export default Notification;
