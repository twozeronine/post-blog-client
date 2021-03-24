import { createAction, createActions, handleActions } from "redux-actions";

// 액션 타입 설정
const INITIALIZE = "write/INITIALIZE"; // 모든 내용 초기화
const CHANGE_FIELD = "write/CHANGE_FIELD"; // 특정 key 값 바꾸기

// 액션 객체 생성 함수
export const initialize = createAction(INITIALIZE);
export const changeField = createActions(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

// 초기 상태 설정
const initialState = {
  title: "",
  body: "",
  tags: [],
};

// 리듀서 설정

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState, //initialState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
  },
  initialState,
);

export default write;
