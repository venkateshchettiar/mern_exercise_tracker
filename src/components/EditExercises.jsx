import React, { useState, useEffect } from "react";
import axios from "axios";
import { DatePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditExercises = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loc = window.location.href;
    const id = loc.split("/")[4];
    const url = `http://localhost:5000/exercises/${id}`;
    console.log(url);
    axios.get(url).then((response) => {
      console.log(response.data);
      setUsername(response.data.username);
      setDescription(response.data.description);
      setDuration(response.data.duration);
      setStartDate(20210807);
    });

    const userUrl = "http://localhost:5000/users/";
    axios.get(userUrl).then((response) => {
      if (response.data.length > 0) {
        setUsers(response.data.map((user) => user.username));
      }
    });
  }, []);

  const updateExercise = (e) => {
    e.preventDefault();
    const loc = window.location.href;
    const id = loc.split("/")[4];
    const newUrl = `http://localhost:5000/exercises/update/${id}`;
    const exercise = {
      username: username,
      description: description,
      duration: duration,
      startDate: startDate,
    };
    console.log(exercise);
    axios.put(newUrl, exercise).then((response) => {
      console.log(response.data);
      window.location = "/";
    });
  };

  return (
    <div>
      <h3>Update New Exercise Log</h3>
      <form onSubmit={updateExercise}>
        <div className="form-group">
          <label>Username: </label>
          <select
            // ref="userInput"
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            {users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>

          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>

        <div className="form-group mt-2">
          <input
            type="submit"
            value="Update Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditExercises;
