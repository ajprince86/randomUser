import "./App.css";
import { useState, useEffect } from "react";
import { fetchUser } from "./services/rando_user";
import UserSummary from "./components/UserSummary";
import Header from "./components/Header";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  async function refreshUser(e) {
    try {
      const data = await fetchUser();
      setCurrentUser(data);
      // console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    refreshUser();
  }, []);

  console.log(currentUser);

  return (
    <div className="App">
      <Header />
      <div className="main">
        <button onClick={(e) => refreshUser(e)}>Refresh</button>
        <div className="render-data">
          {/* <h1>{currentUser.name.first}</h1> */}
          {/* <div>{JSON.stringify(currentUser)}</div> */}
          <UserSummary userData={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
