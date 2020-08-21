import React from "react";
import GameplayAgg from "./Gameplay_Agg.png";
import GameplayHand from "./Gameplay_Hand.png";
import GameplayBoard from "./Gameplay_Board.png";

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
              className="carousel slide"
              data-ride="carousel"
            >
              <p>
                In depth tutorial TBD...Double click the draw pile to begin.
                Double click or drag and drop cards to put in their piles. For
                each suit, there is one pile going up from Ace to King, and one
                pile going down from King to Ace, shown below{" "}
              </p>
              <img src={GameplayAgg} width="100%" />
              <p>
                Your hand will appear after double clicking the draw pile in
                between the aggregate piles and the game board.
              </p>
              <img src={GameplayHand} width="100%" />
              <p>
                The game board represents piles from Ace to King, with the draw
                stack in the middle of the second row of the game board.{" "}
              </p>
              <img src={GameplayBoard} width="100%" />
              <p>
                On events where a choice must be made about which pile to drop
                to, a double click will not work. Instead, drag and drop the
                card to your choice. For instance, if you are currently on the
                10 of hearts going down and 8 of hearts going up, a double click
                will not work. Drag and drop to either continue the pile going
                up or down.
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
