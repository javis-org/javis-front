import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TinyMCEEditor() {
  return (
    <Editor
      apiKey={import.meta.env.VITE_EDITORKEY} // API 키를 환경 변수에서 가져옴
      init={{
        plugins: [
          // Core editing features including code sample and hr
          "codesample",
          "lists",
          "searchreplace",
          "visualblocks",
          "wordcount",
          // "textcolor",
          "hr", // Add horizontal line plugin
        ],
        toolbar:
          "undo redo | fontfamily fontsize align | bold italic underline strikethrough forecolor backcolor hr codesample  | checklist numlist bullist indent outdent | removeformat",
        // Include codesample and hr in the toolbar
        // 'codesample' for code sample and 'hr' for horizontal line
      }}
      initialValue=""
    />
  );
}
