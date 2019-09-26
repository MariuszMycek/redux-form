import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelper from './FormHelper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  formControl: {
    marginBottom: 10,
    minHeight: 68,
  },
});

const FormSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => {
  const classes = useStyles();

  return (
    <FormControl
      error={touched && error ? true : false}
      fullWidth
      className={classes.formControl}
      variant="filled"
    >
      <InputLabel htmlFor="age-native-simple" shrink>
        {label}
      </InputLabel>
      <Select
        native
        {...input}
        {...custom}
        inputProps={{
          name: 'select',
          id: 'select-native-simple',
        }}
      >
        {children}
      </Select>
      <FormHelper error={touched && error} />
    </FormControl>
  );
};

export default FormSelectField;
