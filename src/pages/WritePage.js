import React from "react";
import WriteActionButtons from "../components/write/WriteActionButtons";
import Responsive from "../components/common/Responsive";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxConainer from "../containers/write/TagBoxContainer";

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxConainer />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
