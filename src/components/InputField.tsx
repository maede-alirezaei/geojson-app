import "./InputField.css";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <label className="input-label">
      {label}
      <input
        className="input-field"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default InputField;
