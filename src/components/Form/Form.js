import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import FormTextField from './FormTextField';
import FormSelectField from './FormSelectField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { validate } from '../../utils/validate';
import { changeToFloat, changeToInteger } from '../../utils/normalize';

const useStyles = makeStyles({
  paper: {
    padding: 20,
  },
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  buttonCancel: {
    marginLeft: 20,
  },
});

let Form = props => {
  const { handleSubmit, pristine, reset, submitting, typeValue } = props;
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} classes={{ root: classes.paper }}>
        <form>
          <div>
            <Field name="name" component={FormTextField} label="Dish name" />
          </div>
          <div>
            <Field
              name="preparation_time"
              component={FormTextField}
              label="Preparation time (hh-mm-ss)"
              type="time"
              step="1"
            />
          </div>
          <div>
            <Field name="type" component={FormSelectField} label="Dish type">
              <option value="" />
              <option value={'pizza'}>Pizza</option>
              <option value={'soup'}>Soup</option>
              <option value={'sandwich'}>Sandwich</option>
            </Field>
          </div>

          {typeValue === 'pizza' && (
            <>
              <div>
                <Field
                  name="no_of_slices"
                  component={FormTextField}
                  label="Number of slices"
                  placeholder="integer within the range of 2 to 16"
                  normalize={changeToInteger}
                />
              </div>
              <div>
                <Field
                  name="diameter"
                  component={FormTextField}
                  label="Diameter"
                  placeholder="number within the range of 10 to 100 with max one decimal"
                  normalize={changeToFloat}
                />
              </div>
            </>
          )}

          {typeValue === 'soup' && (
            <div>
              <Field
                name="spiciness_scale"
                component={FormTextField}
                label="Spiciness scale"
                normalize={changeToInteger}
                placeholder="integer within the range of 1 to 10"
              />
            </div>
          )}

          {typeValue === 'sandwich' && (
            <div>
              <Field
                name="slices_of_bread"
                component={FormTextField}
                label="Slices of bread"
                normalize={changeToInteger}
                placeholder="integer within the range of 1 to 8"
              />
            </div>
          )}

          <div className={classes.buttonsWrapper}>
            <Button
              disabled={pristine || submitting}
              variant="contained"
              onClick={handleSubmit}
              color="secondary"
            >
              Submit
            </Button>
            <Button
              className={classes.buttonCancel}
              variant="contained"
              disabled={pristine || submitting}
              onClick={reset}
              color="primary"
            >
              Clear Values
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

// Decorate with redux-form
Form = reduxForm({
  form: 'foodForm',
  validate,
  onSubmitSuccess: (result, dispatch, props) => dispatch(props.reset()),
})(Form);

// Decorate with connect to read form values
const selector = formValueSelector('foodForm'); // <-- same as form name

Form = connect(state => {
  const typeValue = selector(state, 'type');

  return {
    typeValue,
  };
})(Form);

export default Form;
