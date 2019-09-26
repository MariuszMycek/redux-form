export const formatTime = value => {
  if (/^([0-9]{2}:[0-9]{2})$/.test(value)) {
    return value + ':00';
  }
  return value;
};

export const changeToInteger = value => {
  if (!value) {
    return value;
  }
  return parseInt(value);
};

export const changeToFloat = value => {
  if (
    !value ||
    value.charAt(value.length - 1) === ',' ||
    value.charAt(value.length - 1) === '.'
  ) {
    return value;
  }
  value = value.replace(',', '.');
  return parseFloat(value);
};
