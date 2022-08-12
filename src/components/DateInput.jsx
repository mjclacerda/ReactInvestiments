export default function DateInput({
  labelDescription = "Descrição do label:",
  inputValue = "24/01/2022",
  onInputChange = null,
  id = "id_input_date",
}) {
  function handleinputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-400" htmlFor={id}>
        {labelDescription}
      </label>
      <input
        id={id}
        className="border"
        type="date"
        value={inputValue}
        onChange={handleinputChange}
      ></input>
    </div>
  );
}
