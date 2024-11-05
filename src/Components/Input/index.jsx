import React from "react";

function InputFields({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label className="font-normal">{label}</label>
      <input
        className="bg-slate-50 h-8 w-full pl-3 border rounded-sm mt-1 focus:outline-none"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default InputFields;
