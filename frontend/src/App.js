import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Likes from './components/Likes';


function App() {
  return (
    <div className="App">
      
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        fetch('https://bookish-potato-vxxwrpxj7g42w6jp-3333.preview.app.github.dev/participant', {
          method: 'POST',
          body: JSON.stringify({
            name: e.target.name.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
        })
      }}>
       
      <Header />
      <Likes />
      
      <input type="text" placeholder="Enter your name" name="name" />
      <button type="submit">Submit</button>
      </form>
    </div> 
  );
}

export default App;
