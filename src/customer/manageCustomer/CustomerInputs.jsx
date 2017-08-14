import React from "react";
import PropTypes from "prop-types";
import Notification from "../../lib/notification/Notification";
import TextInput from "../../lib/TextInput";

// prettier-ignore
const CustomerInputs = ({
  titleText,
  showNotification,
  hasError,
  saving,
  isDirty,
  customer,
  redirect,
  reload,
  onNameChange,
  onClickClose,
  onClickSave,
  errors,
}) => (
  <div className="form">
    <h2>
      {titleText}
    </h2>
    <Notification
      visible={showNotification}
      text={
        hasError
          ? `Form has error:- ${errors[0]}`
          : "Saved Successfully!"
      }
      withButtons={!hasError}
      type={hasError ? "danger" : "success"}
      closeOnClick={redirect}
      anotherOnClick={reload}
    />
    <TextInput
      name="name"
      label="Customer Name"
      type="text"
      onChange={onNameChange}
      value={customer.name}
    />
    <input
      type="submit"
      minLength={3}
      disabled={saving || !isDirty || hasError}
      onClick={onClickSave}
      value={saving ? "Saving" : "Save"}
    />
    <input type="button" onClick={onClickClose} value="Close" />
  </div>);

CustomerInputs.propTypes = {
  errors: PropTypes.array.isRequired,
  titleText: PropTypes.string.isRequired,
  showNotification: PropTypes.bool.isRequired,
  saving: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  isDirty: PropTypes.bool.isRequired,
  customer: PropTypes.object.isRequired,
  onClickClose: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
  reload: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired
};

export default CustomerInputs;
