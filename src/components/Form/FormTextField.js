import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  textField: {
    marginBottom: 10,
    minHeight: 68,
  },
});

const FormTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.textField}
      fullWidth
      label={label}
      error={touched && invalid}
      helperText={touched && error}
      InputLabelProps={{
        shrink: true,
      }}
      variant="filled"
      inputProps={custom.type === 'time' ? { step: custom.step } : {}}
      {...input}
      {...custom}
    />
  );
};

export default FormTextField;
