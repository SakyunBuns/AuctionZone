import Square from "./Square";

export default function Board() {
  return (
    <>
      <SquareRow />
      <SquareRow />
      <SquareRow />
    </>
  );
}

function SquareRow() {
  return (
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
  );
}
