import React from "react";
import Form from "./components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from "./components/Success";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
