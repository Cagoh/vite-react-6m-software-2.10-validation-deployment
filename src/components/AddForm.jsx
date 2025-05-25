//components/AddForm.jsx
import { useState } from "react";

function AddForm({ handlerAddItem }) {
  const [item, setItem] = useState();

  const handlerLocation = (e) => {
    const form = { ...item, location: e.target.value };
    setItem(form);
  };
  const handlerValuePSI = (e) => {
    const form = { ...item, valuePSI: e.target.value };
    setItem(form);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    handlerAddItem(item);
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handlerLocation}
        />
        <input
          type="text"
          name="valuePSI"
          placeholder="PSI Value"
          onChange={handlerValuePSI}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default AddForm;
