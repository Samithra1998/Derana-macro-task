import { Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
import Particle from "./components/Particle";
import Contact from "./components/Contact/Contact";

const App = () => {
  const user = JSON.parse(localStorage.getItem("auth"));

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Particle />
        <div>
          <Navbar />
          <Routes>
            <Route path="/" exact Component={() => <Navigate to="/posts" />} />
            <Route path="/posts" exact element={<Home />} />
            <Route path="/posts/search" exact element={<Home />} />
            <Route path="/posts/:id" exact element={<PostDetails />} />
            <Route path="/contactus" exact element={<Contact/>}/>
            <Route
              path="/auth"
              exact
              Component={() => (!user ? <Auth /> : <Navigate to="/posts" />)}
            />
          </Routes>
        </div>
      </Container>
    </BrowserRouter>
  );
};

export default App;
