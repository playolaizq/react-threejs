import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <h1>React + Three.js</h1>
      <h2>
        <a href="https://www.artstation.com/artwork/AJGbV" target="_blank">Littlest Tokyo</a>
        {' '}
        by <a href="https://www.artstation.com/glenatron" target="_blank">Glen Fox</a>, CC Attribution
      </h2>
    </header>
  );
}

export default Header;
