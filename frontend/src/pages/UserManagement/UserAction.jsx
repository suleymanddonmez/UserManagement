import React from "react";
import { Button, Grid, Icon } from "@mui/material";
import Form, { FormInput } from "../../components/Form";

const formTypes = {
  firstName: {
    type: "text",
    label: "İsim",
    min: 2,
    max: 50,
    required: true,
    key: "firstName",
    value: "",
  },
  lastName: {
    type: "text",
    label: "Soyisim",
    min: 2,
    max: 50,
    required: true,
    key: "lastName",
    value: "",
  },
  email: {
    type: "email",
    label: "E-posta",
    key: "email",
    value: "",
  },
};

function UserAction() {
  return (
    <Form formTypes={formTypes}>
      {(values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting) => (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormInput typeDef={formTypes.firstName} onChange={handleChange} onBlur={handleBlur} values={values} errors={errors} touched={touched} />
          </Grid>
          <Grid item xs={6}>
            <FormInput typeDef={formTypes.lastName} onChange={handleChange} onBlur={handleBlur} values={values} errors={errors} touched={touched} />
          </Grid>
          <Grid item xs={6}>
            <FormInput typeDef={formTypes.email} onChange={handleChange} onBlur={handleBlur} values={values} errors={errors} touched={touched} />
          </Grid>

          <Grid item xs={12} sx={{ textAlign: "right" }}>
            <Button variant="contained" startIcon={<Icon iconName={"Save"} />} size="medium" color="success">
              Kaydet
            </Button>
          </Grid>
        </Grid>
      )}
    </Form>
  );
}

export default UserAction;
