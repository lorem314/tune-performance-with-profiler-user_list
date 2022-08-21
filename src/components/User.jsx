import React from "react"

import FollowButton from "./FollowButton"

const User = ({ user, followingIds, handleClickFollowButton }) => {
  const isFollowing = followingIds.includes(user.login.uuid)
  return (
    <li className="user">
      <img
        width="72px"
        height="72px"
        src={user.picture.medium}
        alt="user-avatar"
      />
      <div className="user-info">
        <small>{user.login.uuid}</small>
        <div>
          Name : {user.name.title}. {user.name.first} {user.name.last}
        </div>
        <small>{user.email}</small>
      </div>
      <div className="actions">
        <FollowButton
          isFollowing={isFollowing}
          onClick={handleClickFollowButton(user.login.uuid)}
        />
      </div>
    </li>
  )
}

export default User
