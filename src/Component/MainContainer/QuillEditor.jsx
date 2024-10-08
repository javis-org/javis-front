import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "./quillCustom.css"; // 사용자 정의 CSS 파일 추가

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const QuilEditor = ({ save, setSave, setTextLength }) => {
  const [editorHtml, setEditorHtml] = useState("");
  const [fontSize, setFontSize] = useState("24px"); // 기본 폰트 크기 설정
  const quilRef = useRef();
  console.log("fontSize", fontSize);

  // 글자 크기 변경 핸들러
  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value); // 선택된 글자 크기로 상태 업데이트

    if (quilRef.current) {
      const editorInstance = quilRef.current.getEditor();
      const editorRoot = editorInstance.root;
      editorRoot.style.fontSize = e.target.value; // Quill의 전체 글자 크기 변경
    }
  };

  useEffect(() => {
    // Quill 인스턴스가 완전히 로드된 후 포커스 적용
    setTimeout(() => {
      if (quilRef.current) {
        const editorInstance = quilRef.current.getEditor();
        editorInstance.focus(); // 에디터에 포커스
        console.log("Focus applied");
      }
    }, 100); // 약간의 지연을 줘서 Quill이 완전히 로드된 후 포커스 적용
  }, []);

  useEffect(() => {
    const editorInstance = quilRef.current.getEditor();
    const editorRoot = editorInstance.root;
    editorRoot.style.fontSize = fontSize;
  }, [fontSize]);

  useEffect(() => {
    const delayDebounceTimer = setTimeout(async () => {
      console.log("디바운스 후 실행되는 작업:", editorHtml);

      // 통신 코드 임시
      console.log("통신 시작");
      await sleep(1000);
      setSave("저장완료");
      console.log("통신 완료");
    }, 1000);

    // Quill 인스턴스에서 텍스트 길이 가져오기
    if (quilRef.current) {
      const editorInstance = quilRef.current.getEditor();
      const length = editorInstance.getLength();
      setTextLength(length - 1);
    }

    return () => clearTimeout(delayDebounceTimer);
  }, [editorHtml]);

  const handleChange = (value) => {
    if (save !== "저장중") {
      setSave("저장중");
    }
    setEditorHtml(value);
  };

  return (
    <div>
      {/* 글자 크기 선택 드롭다운 */}
      <label htmlFor="fontSizeSelect">글자 크기: </label>
      <select
        id="fontSizeSelect"
        value={fontSize}
        onChange={handleFontSizeChange}
      >
        <option value="16px">작게</option>
        <option value="24px">보통</option>
        <option value="30px">크게</option>
        <option value="34px">아주 크게</option>
      </select>

      <ReactQuill
        ref={quilRef}
        value={editorHtml}
        onChange={handleChange}
        modules={QuilEditor.modules}
        formats={QuilEditor.formats}
        theme={"bubble"}
      />
    </div>
  );
};

QuilEditor.modules = {
  toolbar: [
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ align: [] }],
  ],
};

QuilEditor.formats = [
  "list",
  "bullet",
  "bold",
  "italic",
  "underline",
  "link",
  "align",
];

export default QuilEditor;
