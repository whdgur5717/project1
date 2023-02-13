import PropTypes, { symbol } from "prop-types";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/detail/:id" element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  );
}
export default App;
