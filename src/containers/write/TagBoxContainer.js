import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TagBox from "../../components/write/TagBox";
import { changeField } from "../../modules/write";

const TagBoxConainer = () => {
  // 디스패치하기 위해 dispatch 와 스토어에서 값 가져옴.
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.write.tags);

  // 태그 입력시 디스패치
  const onChangeTags = (nextTags) => {
    dispatch(changeField({ key: "tags", value: nextTags }));
  };

  return <TagBox onChangeTags={onChangeTags} tags={tags} />;
};

export default TagBoxConainer;
