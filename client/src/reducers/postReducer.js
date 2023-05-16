import { GET, CREATE, UPDATE, DELETE,SEARCH } from "../actiontypes/actionTypes";

const posts = (posts = [], action) => {
  switch (action.type) {
    case GET:
      return action.payload;
    case SEARCH:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((p) =>
        p._id === action?.payload?._id ? action.payload : p
      );
    case DELETE:
      return posts.filter((p) => p._id !== action.payload);
    default:
      return posts;
  }
};

export default posts;
