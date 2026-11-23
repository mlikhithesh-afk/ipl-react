function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-kicker">
          <span className="live-dot" />
          THE BIGGEST CRICKET FESTIVAL
        </div>
        <h1>
          Every match.
          <br />
          <span>One destination.</span>
        </h1>
        <p className="hero-subtitle">
          Your front-row seat to the drama, the rivalries, and the moments that
          make the IPL unforgettable.
        </p>
        <a className="hero-button" href="#matches">
          View matches <span aria-hidden="true">→</span>
        </a>
        <div className="hero-note">
          <span className="note-line" />
          ALL THE FIXTURES. ALL THE FEELINGS.
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-ring art-ring-outer" />
        <div className="art-ring art-ring-inner" />
        <div className="art-star">✦</div>
        <div className="art-label">IT&apos;S<br />MATCH<br />TIME</div>
        <span className="art-dot art-dot-one" />
        <span className="art-dot art-dot-two" />
        <span className="art-dot art-dot-three" />
      </div>
      <div className="hero-bottom-line" />
    </section>
  );
}

export default Hero;
