import SideNav from "./Components/SideNav/sideNav";
function App() {
  const time = new Date().toLocaleDateString();
  return (
    <div className="App">
      <SideNav/>
    </div>
  );
}

export default App;
