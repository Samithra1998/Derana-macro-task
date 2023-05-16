import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grid,
  Grow,
  TextField,
  Button,
} from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { fetchPosts, searchPosts } from "../../action/posts";
import makeStyles from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const dispatch = useDispatch();
  const classes = makeStyles();
  const [currentId, setCurrentId] = useState(0);
  const query = useQuery();
  const navigate = useNavigate();
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, currentId]);

  const searchPost = () => {
    if (search.trim()) {
      dispatch(searchPosts({ search }));
      navigate(`/posts/search?searchQuery=${search || "none"}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Container maxWidth="xl">
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            className={classes.gridContainer}
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={6} md={8}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <AppBar
                className={classes.appBarSearch}
                position="static"
                color="inherit"
              >
                <TextField
                  style={{ margin: "10px 0" }}
                  name="search"
                  variant="outlined"
                  label="Search Posts"
                  fullWidth
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <Button
                  onClick={searchPost}
                  className={classes.searchButton}
                  variant="contained"
                  color="primary"
                >
                  Search
                </Button>
              </AppBar>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
