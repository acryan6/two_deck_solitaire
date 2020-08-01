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
      <div className="browser">
        <div className="container top-bar">
          <div className="row">
            <div className="col-sm title-block">
              <h1>Mini-Moo</h1>
              <h5>A Form of Devil's Solitaire</h5>
              {drawLength === 0 ? <p>Your score is {score}</p> : null}
              <Tutorial />
            </div>
            <div className="col-sm">
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
