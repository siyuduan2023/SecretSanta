import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        fetch('https://bookish-potato-vxxwrpxj7g42w6jp-3333.preview.app.github.dev/participant', {
          method: 'POST',
        })
      }}>
        <h3>Likes</h3>
      <input type="text" placeholder="Enter your name" />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
