interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <div onClick={onSquareClick}>
      <button className="square flex justify-center items-center w-20 h-20 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded transition duration-150 ease-in-out text-3xl">
        {value}
      </button>
    </div>
  );
};

export default Square;
