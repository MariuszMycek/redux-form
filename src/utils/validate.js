export const validate = values => {
  const errors = {};

  const requiredFields = () => {
    let fields = ['name', 'type', 'preparation_time'];

    switch (values.type) {
      case 'pizza':
        return [...fields, 'no_of_slices', 'diameter'];

      case 'soup':
        return [...fields, 'spiciness_scale'];

      case 'sandwich':
        return [...fields, 'slices_of_bread'];

      default:
        return fields;
    }
  };

  requiredFields().forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (
    values.preparation_time === '00:00' ||
    values.preparation_time === '00:00:00'
  ) {
    errors.preparation_time = 'Time has to be greater than 00:00:00';
  }

  if (values.no_of_slices < 2 || values.no_of_slices > 16) {
    errors.no_of_slices =
      'Number of slices has to be integer within the range of 2 to 16';
  }

  if (values.diameter && !/^\d{0,3}(\.\d{1})?$/.test(values.diameter)) {
    errors.diameter = 'Invalid format';
  } else if (values.diameter < 10 || values.diameter > 100) {
    errors.diameter =
      'Diameter has to be number within the range of 10 to 100 with max one decimal';
  }

  if (values.spiciness_scale < 1 || values.spiciness_scale > 10) {
    errors.spiciness_scale =
      'Spiciness has to be integer within the range of 1 to 10';
  }

  if (values.slices_of_bread < 1 || values.slices_of_bread > 8) {
    errors.slices_of_bread =
      'Slices of bread has to be integer within the range of 1 to 8';
  }

  return errors;
};
