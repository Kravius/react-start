function TempCell({ temp, setTemp }) {
  return (
    <input value={temp} onChange={(ev) => setTemp(ev.target.value)}></input>
  );
}

function TempFar({ temp, setTemp }) {
  const far = (temp) => (+temp * 9) / 5 + 32;
  const cell = (ev) => ((ev.target.value - 32) * 5) / 9;
  return (
    <input
      type="number"
      value={far(temp)}
      onChange={(ev) => setTemp(cell(ev))}
    ></input>
  );
}

export { TempFar, TempCell };
