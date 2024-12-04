import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../../redux/contactsOps";

function ContactForm() {
  const initialValues = {
    username: "",
    number: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.number,
    };
    dispatch(addContact(newContact));
    options.resetForm();
  };

  const orderSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "To short")
      .max(50, "To long")
      .required("Requried"),
    number: Yup.string()
      .matches(
        /^(?:\+?\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/,
        "Required"
      )
      .min(7, "To short")
      .required("Required"),
  });

  return (
    <div className={css.formBox}>
      <Formik
        validationSchema={orderSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={css.formInfo}>
          <label className={css.labelForm}>
            <span>Name</span>
            <Field type="text" name="username" className={css.inputForm} />
            <ErrorMessage
              name="username"
              component="span"
              className={css.error}
            />
          </label>
          <label className={css.labelForm}>
            <span>Number</span>
            <Field type="text" name="number" className={css.inputForm} />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </label>

          <button type="submit" className={css.formBtn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
