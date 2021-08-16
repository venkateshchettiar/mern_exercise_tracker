import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import Navbar from "./components/Navbar";
import ExerciseList from "./components/ExerciseList";
import EditExercises from "./components/EditExercises";

//test

function App() {
  return (
    <div className="container">
      <Navbar />
      <br />
      <Route path="/" exact component={ExerciseList} />
      <Route path="/update/:id" component={EditExercises} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </div>
  );
}

export default App;
