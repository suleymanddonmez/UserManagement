import React from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { FormGroup, TextField } from "@mui/material";

const GetInitialValues = (formTypes) => {
  let values = {};
  for (const [key, typeDef] of Object.entries(formTypes)) {
    values[key] = typeDef.value;
  }
  return values;
};

const GetSchema = (formTypes) => {
  let shape = {};
  for (const [key, typeDef] of Object.entries(formTypes)) {
    if (typeDef.type == "number") {
      shape[key] = Yup.number();
    } else if (typeDef.type == "email") {
      shape[key] = Yup.string().email("Invalid email");
    } else {
      shape[key] = Yup.string();
    }

    if (typeDef.min) {
      shape[key] = shape[key].min(2, "Too Short!");
    }
    if (typeDef.min) {
      shape[key] = shape[key].max(50, "Too Long!");
    }
    if (typeDef.required) {
      shape[key] = shape[key].required("Required");
    }
  }
  return Yup.object().shape(shape);
};

export function FormInput({ typeDef, values, touched, errors, ...otherProps }) {
  return (
    <FormGroup>
      <TextField
        type={typeDef.type}
        name={typeDef.key}
        label={typeDef.label}
        size="small"
        value={values[typeDef.key]}
        error={errors[typeDef.key] && touched[typeDef.key] && errors[typeDef.key]}
        helperText={errors[typeDef.key] && touched[typeDef.key] && errors[typeDef.key]}
        {...otherProps}
      />
    </FormGroup>
  );
}

function Form({ children, formTypes }) {
  const initialValues = GetInitialValues(formTypes);
  const validationSchema = GetSchema(formTypes);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <FormikForm onSubmit={handleSubmit}>{children(values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting)}</FormikForm>
      )}
    </Formik>
  );
}

export default Form;
