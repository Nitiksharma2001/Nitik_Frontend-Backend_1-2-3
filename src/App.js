import { useEffect, useState } from "react";
import Card from "./Components/Card";
import Loading from "./Components/Loading";
import "./App.css"
function App() {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      {Users.length !== 0 ? 
        <div className="App">
        {Users.map((user) => {
        return (
          <Card user={user} setUsers={setUsers}/>
          )
          
      })}</div>: <Loading/>}
      </>
      
  );
}

export default App;
