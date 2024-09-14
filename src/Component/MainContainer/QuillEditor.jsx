import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

const QuilEditor = () => {
  const [editorHtml, setEditorHtml] = useState("");

  const handleChange = (value) => {
    setEditorHtml(value);
  };

  return (
    <div>
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        modules={QuilEditor.modules}
        formats={QuilEditor.formats}
      />
    </div>
  );
};

QuilEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    ["link", "image"],
    [{ align: [] }],
    ["clean"], // remove formatting button
  ],
};

QuilEditor.formats = [
  "header",
  "font",
  "list",
  "bullet",
  "bold",
  "italic",
  "underline",
  "link",
  "image",
  "align",
  "clean",
];

export default QuilEditor;
