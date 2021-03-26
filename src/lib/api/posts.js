import qs from "qs";
import client from "./client";

export const writePost = ({ title, body, tags }) =>
  client.post("/api/posts", { title, body, tags });

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  // 쿼리 스트링 문자열을 만들어줌 undefined는 이때 걸러짐
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`api/posts?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) =>
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });

export const removePost = (id) => client.delete(`/api/posts/${id}`);
