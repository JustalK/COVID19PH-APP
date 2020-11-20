import React from 'react';
import logo from './logo.svg';
import './less/main.less';

function App() {
	function handleClick(e: React.MouseEvent) {
  		e.preventDefault();
  		console.log('The link was clicked.');
	}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
		<a href="#" onClick={handleClick}>
  Click me
</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
