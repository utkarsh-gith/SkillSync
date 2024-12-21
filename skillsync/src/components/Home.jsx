import React from "react";

function Home() {
  return (
    <div className="home">
      <h2>Welcome to SkillSync</h2>
      <section className="stats">
        <h3>Your Stats</h3>
        <p>Stats will appear here...</p>
      </section>
      <section className="goals">
        <h3>Today's Goals</h3>
        <p>Your saved goals will appear here...</p>
      </section>
    </div>
  );
}

export default Home;