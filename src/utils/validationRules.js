
const errorMessages = {
  minValue: (minimum) => `Must be more than ${minimum}`,
  maxValue: (maximum) => `Must be less than ${maximum}`,
  isRequired: () => 'Field is required'
};

export const minValue = (minimum) => {
  return (value) => {
    return !value || value > minimum ? null : errorMessages.minValue(minimum);
  };
};

export const required = (value) => {
  if (value) {
    return null;
  }
  return errorMessages.isRequired();
};

export const maxValue = (maximum) => {
  return (value) => {
    return !value || value < maximum ? null : errorMessages.maxValue(maximum);
  };
};