import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as postsAPI from "../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

// 액션 타입 설정
const [
  READ_POST,
  READ_POST_SUCCESS,
  READ_POST_FAILURE,
] = createRequestActionTypes("post/READ_POST");

// 데이터를 비우지 않으면 다른 페이지에 들어갔을때 이미 전에 있던 데이터를 읽어와서 렌더링하고
// 새로운 포스트를 가져와서 렌더링하는데 그 틈새시간에 깜빡임현상이 발생하기 때문이다.
const UNLOAD_POST = "post/UNLOAD_POST"; // 포스트 페이지에서 벗어날 때 데이터 비우기

// 액션 객체 생성 함수

export const readPost = createAction(READ_POST, (id) => id);
export const unloadPost = createAction(UNLOAD_POST);

// saga 생성
const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}

// 초기 상태 설정
const initialState = {
  post: null,
  error: null,
};

// 리듀서
const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_POST]: () => initialState,
  },
  initialState,
);

export default post;
