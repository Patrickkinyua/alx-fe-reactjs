import React from 'react'

const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Bio: {props.bio}</p>
    </div>
  )
}

export default UserProfile