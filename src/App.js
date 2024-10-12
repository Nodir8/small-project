import { useState } from "react";

const useInpuValidation = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const validateInput = () => {
    return value.search(/\d/) > 0;
  };
  const validateColor = validateInput() ? "text-danger" : null;
  return { value, onChange, validateInput };
};

const User = () => {
  const firstName = useInpuValidation("");
  const lastName = useInpuValidation("");

  return (
    <div className="w-50 mx-auto mb-5">
      <div className="border p-3 mt-5">
        <p className="text-center fs-3">Register</p>
        <div className="d-flex gap-3">
          <input
            type="text"
            className={`form-control ${firstName.validateColor}`}
            placeholder="FirstName"
            value={firstName.value}
            onChange={firstName.onChange}
          />
          <input
            type="text"
            className={`form-control ${lastName.validateColor}`}
            placeholder="LastName"
            value={lastName.value}
            onChange={lastName.onChange}
          />
        </div>
        <button className="mt-3 btn-success">Send data</button>
      </div>
    </div>
  );
};

const App = () => {
  return <User />;
};

export default App;
