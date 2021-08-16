import React, { useState } from "react";
import Axios from "axios";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: username,
    };
    console.log(user);

    const url = "http://localhost:5000/users/add";
    Axios.post(url, user)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    setUsername("");
  };
  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary mt-3"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
