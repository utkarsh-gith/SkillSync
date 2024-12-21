import React, { useState } from "react";

const Home = () => {
  const [goals, setGoals] = useState(["Complete React project", "Work out for 30 minutes"]);

  return (
    <div className="home">
      <div className="stats">
        <h2>Welcome to SkillSync!</h2>
        <p>Here are your stats and goals for today:</p>
        <ul>
          {goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;