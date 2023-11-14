
export const OrderCounter = ({ value, decrement, increment }) => {
  return (
    <div className="border border-gray-300 flex text-xl rounded text-blue-600">
      <Button value='-' handleClick={decrement} disabled={value <= 1}/>
      <Input value={value} />
      <Button value='+' handleClick={increment} />
    </div>
  );
};

const Input = ({ value }) => {
  return (
    <input
      className="px-2 py-1 w-10 text-center text-base"
      type="number"
      min="1"
      value={value}
      defaultValue={value}
    />
  );
};

const Button = ({ value, handleClick, disabled }) => {
  return (
    <button
      className={`px-2 py-1 w-10  ${disabled && 'opacity-60 cursor-not-allowed'}`}
      disabled={disabled}
      onClick={handleClick}
    >
        {value}
    </button>
  );
};
