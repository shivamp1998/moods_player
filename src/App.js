import  Component  from './Component';

function App() {
  const time = new Date().toLocaleDateString();
  return (
    <div className="App">
      <Component/>
    </div>
  );
}

export default App;
