import { useEffect, useRef, useState } from "react";

const Input = ({
  type = "text",
  name = "",
  label,
  isClear = false,
  formData,
  setFormData, 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputElement = useRef(null);

  const onChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value) setIsFocused(true);
    else setIsFocused(false);
  };

  const onFocus = () => setIsFocused(true);
  const onBlur = (e) => {
    if (!e.target.value) setIsFocused(false);
  };

  const clearInput = () => {
    setFormData((prev) => ({ ...prev, [name]: "" }));
    setIsFocused(false);
  };

  useEffect(() => {
    if (isClear) clearInput();
  }, [isClear]);

  return (
    <div className={`form-group ${isFocused ? "focused" : ""}`}>
      {type !== "textarea" ? (
        <input
          ref={inputElement}
          type={type}
          name={name}
          value={formData?.[name]}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      ) : (
        <textarea
          ref={inputElement}
          name={name}
          value={formData?.[name]}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
      <label>{label}</label>
      <span className="focus-border" />
    </div>
  );
};

export default Input;
