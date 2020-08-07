import React from "react";

const Tutorial = () => (
  <div>
    <button
      type="button"
      className="btn btn-primary"
      data-toggle="modal"
      data-target="#tutorial"
    >
      Click for tutorial
    </button>

    <div
      className="modal fade"
      id="tutorial"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="ModalCarouselLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalCarouselLabel">
              Tutorial
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div
              id="carousel-modal-demo"
              class="carousel slide"
              data-ride="carousel"
            >
              <p>
                Tutorial TBD...Double click the draw pile to begin. Double click
                or drag and drop cards to put in their piles. For each suit,
                there is one pile going up from Ace to King, and one pile going
                down from King to Ace.
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Tutorial;
