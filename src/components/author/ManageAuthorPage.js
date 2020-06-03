import React, { useState } from "react";
import TextInput from "../common/TextInput";
import { connect } from "react-redux";
import { saveAuthor } from "../../redux/actions/authorActions";
import { toast } from "react-toastify";

function ManageAuthorPage({ authors, saveAuthor, ...props }) {
  const [authorName, setAuthor] = useState("");

  function handleOnChange(event) {
    const { value } = event.target;
    setAuthor(value);
  }

  function handleSave(event) {
    event.preventDefault();

    const author = {
      name: authorName,
    };

    saveAuthor(author)
      .then(() => {
        toast.success("Author saved!");
      })
      .catch((error) => {
        toast.error("Failed to save author!");
      });
  }

  return (
    <form onSubmit={handleSave}>
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
}

function mapStateToProps(state) {
  return {
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  saveAuthor,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
