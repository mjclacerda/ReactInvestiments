export default function TextInput({
  labelDescription = "Descrição do label:",
  inputValue = "Valor padrão do input",
  onInputChange = null,
  id = "id_input_text",
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
        autoFocus
        id={id}
        className="border"
        type="text"
        value={inputValue}
        onChange={handleinputChange}
      ></input>
    </div>
  );
}
