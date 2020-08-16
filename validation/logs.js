// validation/logs.js

const Validator = require('validator');

module.exports = function validateLogInput(data) {
  let errors = {};

  data.type
  data.totalProtein
  data.totalCals
  data.grams

  if (Validator.isEmpty(data.totalCals)) {
    errors.totalCals = 'Cals are required';
  }

  if (Validator.isEmpty(data.totalProtein)) {
    errors.totalProtein = 'totalProtein is required';
  }

  if (Validator.isEmpty(data.type)) {
    errors.type = 'Type is required';
  }

  if (Validator.isEmpty(data.grams)) {
    errors.grams = 'Grams is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};