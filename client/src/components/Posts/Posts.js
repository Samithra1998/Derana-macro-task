import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { CircularProgress, Grid } from "@material-ui/core";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log("Loading posts", posts);
  return !posts.length ? (
    <CircularProgress color="secondary" />
  ) : (
    <Grid
      container
      className={classes.mainContainer}
      alignItems="stretch"
      spacing={4}
    >
      {posts?.map((post) => (
        <Grid key={post._id} item xs={12} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
