import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Components/Card";
import Loading from "./Components/Loading";
function App() {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users ")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="App">
      {Users.length !== 0 ? Users.map((user) => {
        return (
          <Card user={user}/>
        )
      }): <Loading/>}
      
    </div>
  );
}

export default App;
