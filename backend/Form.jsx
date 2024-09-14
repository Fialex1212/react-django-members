import { useState } from "react";
import css from "./styles.module.css";

const Form = ({ addData }) => {
  const [formData, setFormData] = useState([]);

  const handelInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addData(formData);
    setFormData({
      fullname: "",
      role: "",
    });
  };

  return (
    <section>
      <div className="container">
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={`${css.form__fullname}` + "form__input"}
            type="text"
            value={formData.fullname}
            placeholder="Enter a fullname"
            onChange={handelInputChange}
            name="fullname"
          />
          <input
            className={`${css.form__role}` + "form__input"}
            type="text"
            value={formData.role}
            placeholder="Enter a role"
            onChange={handelInputChange}
            name="role"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
