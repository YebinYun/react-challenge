import { useContext, useState } from "react";
import "./Editor.css";
import { contentDispatchContext } from "../App";

function Editor() {
  const { onCreate } = useContext(contentDispatchContext);
  const [content, setContent] = useState({
    title: "",
    contact: "",
  });

  const onChangeContent = (e) => {
    setContent({
      ...content,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (content.name === "" || content.contact === "") {
      alert("이름과 연락처를 입력해주세요");
      return;
    }
    onCreate(content.name, content.contact);

    setContent({
      name: "",
      contact: "",
    });
  };
  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <h3>Add Contact</h3>
      <div className="input_wrap">
        <input
          name="name"
          value={content.name}
          onChange={onChangeContent}
          className="name"
          placeholder="이름 ..."
          onKeyDown={onKeydown}
        />
        <input
          name="contact"
          value={content.contact}
          onChange={onChangeContent}
          className="contact"
          placeholder="연락처(이메일) ..."
          onKeyDown={onKeydown}
        />
      </div>
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}

export default Editor;
