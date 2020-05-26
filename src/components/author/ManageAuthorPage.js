import React, { useState } from "react";
import TextInput from "../common/TextInput";

const ManageAuthorPage = () => {
  const [authorName, setAuthorName] = useState("");

  function handleOnChange(event) {
    const { value } = event.target;
    setAuthorName(value);
  }

  return (
    <form>
      <TextInput
        name="authorName"
        label="Name"
        value={authorName}
        onChange={handleOnChange}
      />

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default ManageAuthorPage;
