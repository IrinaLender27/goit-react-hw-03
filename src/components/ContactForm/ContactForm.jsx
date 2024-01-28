import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "To short")
    .max(50, "To long")
    .required("This is a required field"),
  number: Yup.string()
    .min(3, "To short")
    .max(50, "To long")
    .required("This is a required field"),
});

export const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        onAdd({ id: Date.now(), ...values });
        actions.resetForm();
      }}
    >
      <Form className={css.formContainer}>
        <div className={css.formGroup}>
          <lable htmlFor={nameId}>Name</lable>
          <Field
            className={css.inputForm}
            id={nameId}
            type="text"
            name="name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <lable htmlFor={numberId}>Number</lable>
          <Field
            className={css.inputForm}
            id={numberId}
            type="tel"
            name="number"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
