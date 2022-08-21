import React, { useState, useCallback } from "react";

import { getRandomUsers } from "./components/api";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [followingIds, setFollowingIds] = useState([]);

  const fetchUsers = () => {
    getRandomUsers(100).then((data) => {
      setUsers(data.results);
    });
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClickFollowButton = useCallback(
    (clickedId) => () => {
      setFollowingIds((prevFollowingIds) => {
        return prevFollowingIds.includes(clickedId)
          ? prevFollowingIds.filter((id) => id !== clickedId)
          : [...prevFollowingIds, clickedId];
      });
    },
    []
  );

  return (
    <div className="app">
      <h1>使用React Profile来调试性能</h1>
      <button onClick={fetchUsers}>获取用户</button>
      <br />
      <input
        type="search"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <UserList
        users={users}
        searchText={searchText}
        followingIds={followingIds}
        handleClickFollowButton={handleClickFollowButton}
      />
    </div>
  );
}

export default App;
