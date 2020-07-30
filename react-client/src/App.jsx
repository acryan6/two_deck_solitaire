import React from "react";
import Board from "./components/Board.jsx";
import Aggregate from "./components/Aggregate.jsx";
import Hand from "./components/Hand.jsx";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider, DragDropContext } from "react-dnd";

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <div className="browser">
      <div className="container top-bar">
        <div className="row">
          <div className="col-sm title-block">
            <h1>Mini-Moo</h1>
            <h5>A Form of Devil's Solitaire</h5>
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

export default App;
