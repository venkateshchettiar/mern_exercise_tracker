import React, { useState, useEffect } from "react";
import Axios from "axios";
import axios from "axios";
import { Link } from "react-router-dom";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/exercises/";

    Axios.get(url).then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  }, []);

  const editExercise = (id) => {
    console.log(id);
  };

  const deleteExercise = (id) => {
    console.log(id);
    const url = `http://localhost:5000/exercises/${id}`;
    axios.delete(url).then((res) => console.log("deleted"));
    setExercises(exercises.filter((el) => el._id !== id));
  };
  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        {exercises.map((e) => (
          <tbody key={e._id}>
            <tr>
              <td>{e.username}</td>
              <td>{e.description}</td>
              <td>{e.duration}</td>
              <td>{e.date}</td>
              <td>
                <Link
                  to={"/update/" + `${e._id}`}
                  onClick={() => editExercise(e._id)}
                >
                  edit
                </Link>{" "}
                |
                <Link
                  to={"/"}
                  href="#"
                  onClick={() => {
                    deleteExercise(e._id);
                  }}
                >
                  delete
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ExerciseList;
