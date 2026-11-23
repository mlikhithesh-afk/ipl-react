function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home">
          <span className="brand-mark" aria-hidden="true">
            ✦
          </span>
          <span>
            <strong>IPL</strong> MATCH CENTER
          </span>
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#matches">Matches</a>
          <a href="#guidelines">Guidelines</a>
          <a href="#about">About</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
