import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Goals() {
  const [goals, setGoals] = useState("");
  const navigate = useNavigate();

  const handleSaveGoals = () => {
    if (goals.trim()) {
      alert("Goals saved! Redirecting to homepage...");
      navigate("/home");
    } else {
      alert("Please enter your goals.");
    }
  };

  return (
    <div className="goals">
      <h2>Set Your Goals</h2>
      <textarea
        placeholder="Write your goals here..."
        value={goals}
        onChange={(e) => setGoals(e.target.value)}
        rows="4"
        cols="50"
      ></textarea>
      <button onClick={handleSaveGoals}>Save Goals</button>
    </div>
  );
}

export default Goals;