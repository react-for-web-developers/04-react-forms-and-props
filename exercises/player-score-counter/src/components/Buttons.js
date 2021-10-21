function Buttons({ increase, decrease }) {
  return (
    <div>
      <button className="btn btn-left" onClick={increase}>Increase</button>
      <button className="btn btn-right" onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Buttons;