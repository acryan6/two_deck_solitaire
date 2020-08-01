import React from "react";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, update, pileFinish } from "../actions";
import { ItemTypes } from "../utils/items";

const Aggregate = (props) => {
  const dispatch = useDispatch();

  const [{ isOverHearts }, heartsDrop] = useDrop({
    accept: ItemTypes.HEARTS,
    drop: (item, monitor) => {
      dispatch(
        increment(item.card),
        hearts.length === 13 ? dispatch(pileFinish()) : dispatch(update())
      );
    },
    collect: (monitor) => ({
      isOverHearts: !!monitor.isOver(),
    }),
  });

  const [{ isOverHeartsDown }, heartsDropDown] = useDrop({
    accept: ItemTypes.HEARTS,
    drop: (item, monitor) => {
      dispatch(
        decrement(item.card),
        heartsDown.length === 13 ? dispatch(pileFinish()) : dispatch(update())
      );
    },
    collect: (monitor) => ({
      isOverHeartsDown: !!monitor.isOver(),
    }),
  });

  const [{ isOverClubs }, clubsDrop] = useDrop({
    accept: ItemTypes.CLUBS,
    drop: (item, monitor) => {
      dispatch(
        increment(item.card),
        clubs.length === 13 ? dispatch(pileFinish()) : dispatch(update())
      );
    },
    collect: (monitor) => ({
      isOverClubs: !!monitor.isOver(),
    }),
  });

  const [{ isOverClubsDown }, clubsDropDown] = useDrop({
    accept: ItemTypes.CLUBS,
    drop: (item, monitor) => {
      dispatch(
        decrement(item.card),
        clubsDown.length === 13 ? dispatch(pileFinish()) : dispatch(update())
      );
    },
    collect: (monitor) => ({
      isOverClubsDown: !!monitor.isOver(),
    }),
  });

  const [{ isOverDiamonds }, diamondsDrop] = useDrop({
    accept: ItemTypes.DIAMONDS,
    drop: (item, monitor) => {
      dispatch(
        increment(item.card),
        diamonds.length === 13 ? dispatch(pileFinish()) : dispatch(update())
      );
    },
    collect: (monitor) => ({
      isOverDiamonds: !!monitor.isOver(),
    }),
  });

  const [{ isOverDiamondsDown }, diamondsDropDown] = useDrop({
    accept: ItemTypes.DIAMONDS,
    drop: (item, monitor) => {
      dispatch(
        decrement(item.card),
        diamondsDown.length === 13 ? dispatch(pileFinish()) : dispatch(update())
      );
    },
    collect: (monitor) => ({
      isOverDiamondsDown: !!monitor.isOver(),
    }),
  });

  const [{ isOverSpades }, spadesDrop] = useDrop({
    accept: ItemTypes.SPADES,
    drop: (item, monitor) => {
      dispatch(
        increment(item.card),
        spades.length === 13 ? dispatch(pileFinish()) : dispatch(update())
      );
    },
    collect: (monitor) => ({
      isOverSpades: !!monitor.isOver(),
    }),
  });

  const [{ isOverSpadesDown }, spadesDropDown] = useDrop({
    accept: ItemTypes.SPADES,
    drop: (item, monitor) => {
      dispatch(
        decrement(item.card),
        spadesDown.length === 13 ? dispatch(pileFinish()) : dispatch(update())
      );
    },
    collect: (monitor) => ({
      isOverSpadesDown: !!monitor.isOver(),
    }),
  });

  const [
    hearts,
    heartsDown,
    diamonds,
    diamondsDown,
    spades,
    spadesDown,
    clubs,
    clubsDown,
  ] = useSelector((state) => [
    state.getIn(["game", "hearts"]),
    state.getIn(["game", "heartsDown"]),
    state.getIn(["game", "diamonds"]),
    state.getIn(["game", "diamondsDown"]),
    state.getIn(["game", "spades"]),
    state.getIn(["game", "spadesDown"]),
    state.getIn(["game", "clubs"]),
    state.getIn(["game", "clubsDown"]),
  ]);

  const getDiv = (card, index, pile) => (
    <div key={index} cardnum={card.cardNum}>
      <img
        src={card.image}
        height="100%"
        max-width="100%"
        alt={`Image of the ${card.value.toLowerCase()} of ${card.suit.toLowerCase()} card`}
        style={{
          zIndex: index,
          position: "absolute",
        }}
      />
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div
            className="hearts empty-pile"
            ref={heartsDropDown}
            style={
              isOverHeartsDown
                ? { borderStyle: "solid", borderColor: "yellow" }
                : null
            }
          >
            {heartsDown.length > 0
              ? getDiv(heartsDown[heartsDown.length - 1])
              : null}
          </div>
          <div
            className="hearts empty-pile"
            ref={heartsDrop}
            style={
              isOverHearts
                ? { borderStyle: "solid", borderColor: "yellow" }
                : null
            }
          >
            {hearts.length > 0 ? getDiv(hearts[hearts.length - 1]) : null}
          </div>
        </div>
        <div className="col-sm">
          <div
            className="clubs empty-pile"
            ref={clubsDropDown}
            style={
              isOverClubsDown
                ? { borderStyle: "solid", borderColor: "yellow" }
                : null
            }
          >
            {clubsDown.length > 0
              ? getDiv(clubsDown[clubsDown.length - 1])
              : null}
          </div>
          <div
            className="clubs empty-pile"
            ref={clubsDrop}
            style={
              isOverClubs
                ? { borderStyle: "solid", borderColor: "yellow" }
                : null
            }
          >
            {clubs.length > 0 ? getDiv(clubs[clubs.length - 1]) : null}
          </div>
        </div>
        <div className="col-sm">
          <div
            className="diamonds empty-pile"
            ref={diamondsDropDown}
            style={
              isOverDiamondsDown
                ? { borderStyle: "solid", borderColor: "yellow" }
                : null
            }
          >
            {diamondsDown.length > 0
              ? getDiv(diamondsDown[diamondsDown.length - 1])
              : null}
          </div>
          <div
            className="diamonds empty-pile"
            ref={diamondsDrop}
            style={
              isOverDiamonds
                ? { borderStyle: "solid", borderColor: "yellow" }
                : null
            }
          >
            {diamonds.length > 0 ? getDiv(diamonds[diamonds.length - 1]) : null}
          </div>
        </div>
        <div className="col-sm">
          <div
            className="spades empty-pile"
            ref={spadesDropDown}
            style={
              isOverSpadesDown
                ? { borderStyle: "solid", borderColor: "yellow" }
                : null
            }
          >
            {spadesDown.length > 0
              ? getDiv(spadesDown[spadesDown.length - 1])
              : null}
          </div>
          <div
            className="spades empty-pile"
            ref={spadesDrop}
            style={
              isOverSpades
                ? { borderStyle: "solid", borderColor: "yellow" }
                : null
            }
          >
            {spades.length > 0 ? getDiv(spades[spades.length - 1]) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aggregate;
