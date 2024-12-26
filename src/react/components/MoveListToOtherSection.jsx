function MoveListToOtherSection({ fromSection, toSection, text, id }) {
  // fromSection, toSection this is useState set we want change
  const moveList = () => {
    fromSection((prevFrom) => {
      const dataMove = prevFrom[id];
      const updatePrev = prevFrom.filter((_, index) => index !== id);
      toSection((prevTo) => {
        return [...prevTo, dataMove];
      });
      return updatePrev;
    });
  };
  const btn = <button onClick={moveList}>{text}</button>;
  return btn;
}

export { MoveListToOtherSection };
