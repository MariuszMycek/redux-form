import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';

const FormHelper = ({ error }) =>
  error ? <FormHelperText>{error}</FormHelperText> : null;

export default FormHelper;
