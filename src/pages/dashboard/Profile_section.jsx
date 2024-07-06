import React from 'react'

const Profile_section = (props) => {
  return (
    <div className="card-body">
    <div className="row">
      <div className="col-md-2">
        <i
          className="ri-shopping-cart-2-line"
          style={{ fontSize: "40px", color: "#0800CF" }}
        />
      </div>
      <div className="col-md-10">
        <p className="card-title" style={{ fontSize: "13px" }}>
          <br />
          <b>{props.title}</b>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Profile_section