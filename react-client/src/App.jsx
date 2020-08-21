import React from "react";
import Board from "./components/Board.jsx";
import Aggregate from "./components/Aggregate.jsx";
import Hand from "./components/Hand.jsx";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider, DragDropContext } from "react-dnd";
import { useSelector } from "react-redux";
import Tutorial from "./components/Tutorial.jsx";

const App = () => {
  const [score, drawLength] = useSelector((state) => [
    state.getIn(["game", "score"]),
    state.getIn(["game", "drawStack"]).length,
  ]);
  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="h-100 d-flex align-items-center"
        style={{ flexDirection: "column" }}
      >
        <div className="container top-bar h-20">
          <div className="row h-100">
            <div className="col-sm title-block h-100">
              <h1>Mini-Moo</h1>
              <h5>A Form of Devil's Solitaire</h5>
              {drawLength === 0 ? <p>Your score is {score}</p> : null}
              {score >= 100 ? <Tutorial /> : null}
            </div>
            <div className="col-sm h-100">
              <Aggregate />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row hand-row">
            <Hand />
          </div>
        </div>
        <Board />
      </div>
    </DndProvider>
  );
};

export default App;
