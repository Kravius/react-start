import style from "../../styles/Button.module.css";

function MoveListToOtherSection({ fromSection, toSection, textToMove, id }) {
  // fromSection, toSection this is useState set we want change
  const textToMoveColor = textToMove === "remake" ? "blue" : "green";

  const moveList = () => {
    const dataMove = { move: "" };

    fromSection((prevFrom) => {
      dataMove.move = prevFrom[id];
      const updatePrev = prevFrom.filter((_, index) => index !== id);
      return updatePrev;
    });

    toSection((prevTo) => {
      return [...prevTo, dataMove.move];
    });
  };
  const btn = (
    <button
      className={style["move-btn"]}
      onClick={moveList}
      style={{
        color: textToMoveColor,
      }}
    >
      {textToMove}
    </button>
  );
  return btn;
}

export { MoveListToOtherSection };
