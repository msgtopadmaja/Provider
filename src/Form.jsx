import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleSave = (e) => {
    e.preventDefault();
    if (name && age) {
      onSubmit({ name, age: parseInt(age) }); // Call the parent function with the new data
      setName(""); // Clear the input fields
      setAge("");
    }
  };

  const handleCancel = () => {
    setName(""); // Clear the both name and age input fields
    setAge("");
  };

  return (
    <div className="inputs">
      <form onSubmit={handleSave}>
        <div className="input">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="input">
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="buttons-form">
          <button type="submit">Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
