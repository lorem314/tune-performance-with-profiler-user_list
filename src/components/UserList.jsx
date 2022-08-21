import React from "react";

import User from "./User";

const UserList = ({
  users = [],
  searchText = "",
  followingIds = [],
  handleClickFollowButton = () => {},
}) => {
  return (
    <ul className="user-list">
      {users.length === 0 ? (
        <p>点击按钮获取用户</p>
      ) : (
        users
          .filter((user) => {
            if (searchText === "") return true;
            return (
              user.name.first
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
              user.name.last.toLowerCase().includes(searchText.toLowerCase())
            );
          })
          .map((user) => {
            const isFollowing = followingIds.includes(user.login.uuid);
            return (
              <User
                key={user.login.uuid}
                user={user}
                isFollowing={isFollowing}
                handleClickFollowButton={handleClickFollowButton}
              />
            );
          })
      )}
    </ul>
  );
};

export default UserList;
