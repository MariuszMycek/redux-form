import { formatTime } from './normalize';
import { callApi } from './apiCaller';

const URL = 'https://frosty-wood-6558.getsandbox.com:443/dishes';

const prepareValues = values => {
  // in case when Chrome remove seconds if they equal 00
  values.preparation_time = formatTime(values.preparation_time);

  const {
    name,
    preparation_time,
    type,
    no_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread,
  } = values;

  values = {
    name,
    preparation_time,
    type,
  };

  switch (values.type) {
    case 'pizza':
      values = { ...values, no_of_slices, diameter };
      break;

    case 'soup':
      values = { ...values, spiciness_scale };
      break;

    case 'sandwich':
      values = { ...values, slices_of_bread };
      break;
    default:
  }
  return values;
};

export const handleSubmit = values => {
  values = prepareValues(values);
  return callApi(URL, 'post', values);
};
