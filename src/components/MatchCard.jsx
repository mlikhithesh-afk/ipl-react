function MatchCard({ match }) {
  const {
    team1,
    short1,
    team2,
    short2,
    venue,
    date,
    time,
    color1,
    color2,
  } = match;

  return (
    <article className="match-card">
      <div className="card-topline">
        <span className="match-tag">LEAGUE MATCH</span>
        <span className="card-arrow" aria-hidden="true">
          ↗
        </span>
      </div>
      <div className="teams">
        <div className="team">
          <span className="team-badge" style={{ "--team-color": color1 }}>
            {short1}
          </span>
          <span className="team-name">{team1}</span>
        </div>
        <span className="versus">VS</span>
        <div className="team team-right">
          <span className="team-badge" style={{ "--team-color": color2 }}>
            {short2}
          </span>
          <span className="team-name">{team2}</span>
        </div>
      </div>
      <div className="card-divider" />
      <div className="match-details">
        <div className="match-detail">
          <span className="detail-icon" aria-hidden="true">◷</span>
          <span>
            <small>DATE &amp; TIME</small>
            <strong>{date} · {time}</strong>
          </span>
        </div>
        <div className="match-detail">
          <span className="detail-icon" aria-hidden="true">⌖</span>
          <span>
            <small>VENUE</small>
            <strong>{venue}</strong>
          </span>
        </div>
      </div>
    </article>
  );
}

export default MatchCard;
