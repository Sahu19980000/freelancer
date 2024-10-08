import React from "react";

const Category_card = (props) => {
  return (
    <div className="freelancer-category-card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-2">
              <img src={props.img} />
            </div>
            <div className="col-md-10">
              <p className="text-black mx-4 fw-semibold" >
                {props.maintitle}
                <br />
                {props.skillscounter}
                <br />
                <span >
                  <i class="ri-star-s-fill">{props.rating}</i>
                </span>
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Category_card;
