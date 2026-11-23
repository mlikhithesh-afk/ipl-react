import { useState } from "react";
import Hero from "./components/Hero.jsx";
import MatchCard from "./components/MatchCard.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

const matches = [
  {
    id: 1,
    team1: "Mumbai Indians",
    short1: "MI",
    team2: "Chennai Super Kings",
    short2: "CSK",
    venue: "Wankhede Stadium, Mumbai",
    date: "Saturday, 28 March",
    time: "7:30 PM IST",
    color1: "#1769d2",
    color2: "#f6c445",
  },
  {
    id: 2,
    team1: "Royal Challengers Bengaluru",
    short1: "RCB",
    team2: "Kolkata Knight Riders",
    short2: "KKR",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    date: "Sunday, 29 March",
    time: "3:30 PM IST",
    color1: "#e52b36",
    color2: "#743bb8",
  },
  {
    id: 3,
    team1: "Rajasthan Royals",
    short1: "RR",
    team2: "Sunrisers Hyderabad",
    short2: "SRH",
    venue: "Sawai Mansingh Stadium, Jaipur",
    date: "Monday, 30 March",
    time: "7:30 PM IST",
    color1: "#e85a9b",
    color2: "#f0782b",
  },
  {
    id: 4,
    team1: "Delhi Capitals",
    short1: "DC",
    team2: "Punjab Kings",
    short2: "PBKS",
    venue: "Arun Jaitley Stadium, Delhi",
    date: "Tuesday, 31 March",
    time: "7:30 PM IST",
    color1: "#2679cf",
    color2: "#d83a4b",
  },
];

function App() {
  const [selectedTeam, setSelectedTeam] = useState("All teams");
  const teams = [
    "All teams",
    ...new Set(matches.flatMap((match) => [match.team1, match.team2])),
  ];
  const filteredMatches =
    selectedTeam === "All teams"
      ? matches
      : matches.filter(
          (match) =>
            match.team1 === selectedTeam || match.team2 === selectedTeam,
        );

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="matches-section" id="matches">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE SEASON STARTS HERE</p>
              <h2>Upcoming matches</h2>
              <p className="section-description">
                Pick your team, find your fixture, and get match-day ready.
              </p>
            </div>
            <label className="filter-control">
              <span>Filter by team</span>
              <select
                value={selectedTeam}
                onChange={(event) => setSelectedTeam(event.target.value)}
              >
                {teams.map((team) => (
                  <option key={team} value={team}>
                    {team}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="match-grid">
            {filteredMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
          {filteredMatches.length === 0 && (
            <p className="empty-state">No matches found for this team.</p>
          )}
        </section>

        <section className="about-section" id="about">
          <span className="about-icon" aria-hidden="true">
            ✦
          </span>
          <div>
            <p className="eyebrow">MADE FOR FANS</p>
            <h2>One league. A billion stories.</h2>
            <p>
              IPL Match Center brings fixtures, teams, and the excitement of
              every match together in one place.
            </p>
          </div>
        </section>

        <section className="guidelines-section" id="guidelines">
          <p>
            <strong>Quick guide:</strong> Choose a team from the dropdown to
            narrow the fixture list. Each card shows the teams, venue, date,
            and start time.
          </p>
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">
            ✦
          </span>
          <span>
            <strong>IPL</strong> MATCH CENTER
          </span>
        </a>
        <p>Made for the love of cricket.</p>
      </footer>
    </>
  );
}

export default App;
