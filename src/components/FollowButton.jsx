import React from "react"

const FollowButton = ({ isFollowing, onClick }) => {
  return (
    <button
      className={`follow-button ${isFollowing && "is-following"}`}
      onClick={onClick}
    >
      {isFollowing ? "取消关注" : "关注"}
    </button>
  )
}

export default FollowButton
