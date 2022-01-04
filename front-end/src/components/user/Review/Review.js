import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div className="review">
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="title">Reviews (47)</div>
            </div>
            <div className="col-md-6">
              <div className="btn-wrappers">
                <div className="d-inline">
                  <button className="btn btn-outline-dark">Sort By</button>
                  <button className="btn btn-outline-dark ml-3">Filter</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="bg-dark" style={{ borderBottom: "0.5px solid black" }} />

          <div className="review-box-wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="review-box">
                  <div className="d-flex justify-content-between">
                    <div className="name">
                      Jenny
                      <span
                        className="text-muted pl-1"
                        style={{ fontWeight: "300" }}
                      >
                        Verified Buyer
                      </span>
                    </div>
                    <div className="empty"></div>
                    <div className="date">09/30/2021</div>
                  </div>
                  <div className="d-flex">
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                  </div>

                  <div className="review-sub-title">Amazing Quality.</div>
                  <div className="review-description">
                    Peach loves these PB and J treats, such great value for
                    money and fast shipping! Will Absolutely order again during
                    sales.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="review-box">
                  <div className="d-flex justify-content-between">
                    <div className="name">
                      Jenny
                      <span
                        className="text-muted pl-1"
                        style={{ fontWeight: "300" }}
                      >
                        Verified Buyer
                      </span>
                    </div>
                    <div className="empty"></div>
                    <div className="date">09/30/2021</div>
                  </div>
                  <div className="d-flex">
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                  </div>

                  <div className="review-sub-title">Amazing Quality.</div>
                  <div className="review-description">
                    Peach loves these PB and J treats, such great value for
                    money and fast shipping!
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="review-box">
                  <div className="d-flex justify-content-between">
                    <div className="name">
                      Jenny
                      <span
                        className="text-muted pl-1"
                        style={{ fontWeight: "300" }}
                      >
                        Verified Buyer
                      </span>
                    </div>
                    <div className="empty"></div>
                    <div className="date">09/30/2021</div>
                  </div>
                  <div className="d-flex">
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                  </div>

                  <div className="review-sub-title">Amazing Quality.</div>
                  <div className="review-description">
                    Peach loves these PB and J treats, such great value for
                    money and fast shipping!
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="review-box">
                  <div className="d-flex justify-content-between">
                    <div className="name">
                      Jenny
                      <span
                        className="text-muted pl-1"
                        style={{ fontWeight: "300" }}
                      >
                        Verified Buyer
                      </span>
                    </div>
                    <div className="empty"></div>
                    <div className="date">09/30/2021</div>
                  </div>
                  <div className="d-flex">
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                    <div className="review-bar"></div>
                  </div>

                  <div className="review-sub-title">Amazing Quality.</div>
                  <div className="review-description">
                    Peach loves these PB and J treats, such great value for
                    money and fast shipping!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
