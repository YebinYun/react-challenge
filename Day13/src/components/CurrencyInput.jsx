
const Krw = ({ exchangeRate, onChangeHandler, value }) => {
  return (
    <>
      <label>{exchangeRate}:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChangeHandler(exchangeRate, e.target.value)}
      />
    </>
  );
};

export default Krw;