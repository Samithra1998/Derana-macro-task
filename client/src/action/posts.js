import * as api from "../Api/index";
import {
  GET,
  CREATE,
  UPDATE,
  DELETE,
  SEARCH,
  GET_POST,
} from "../actiontypes/actionTypes";

export const fetchPosts = () => async (dispatch) => {
  const { data } = await api.getPosts();
  dispatch({ type: GET, payload: data });
};

export const fetchPost = (id) => async (dispatch) => {
  const { post } = await api.getPost(id);
  dispatch({ type: GET_POST, payload: post });
};

export const searchPosts = (searchQuery) => async (dispatch) => {
  try {
    const { data } = await api.getPostsBySearch(searchQuery);
    console.log(data);
    dispatch({ type: SEARCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (formData) => async (dispatch) => {
  const { newPost } = await api.addPosts(formData);
  dispatch({ type: CREATE, payload: newPost });
};

export const editPost = (id, formData) => async (dispatch) => {
  const { updatedPost } = await api.updatePost(id, formData);
  dispatch({ type: UPDATE, payload: updatedPost });
};

export const removePost = (id) => async (dispatch) => {
  await api.deletePost(id);
  dispatch({ type: DELETE, payload: id });
};
