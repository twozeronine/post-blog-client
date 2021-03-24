import React from "react";
import Responsive from "../components/common/Responsive";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxConainer from "../containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxConainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
