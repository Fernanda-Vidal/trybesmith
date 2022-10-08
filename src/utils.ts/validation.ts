import StatusCodes from './StatusCodes';

export function validationString(field: string, request: string, num: number) {
  if (!field) return { message: `"${request}" is required`, status: StatusCodes.BAD_REQUEST };
  
  if (typeof field !== 'string') {
    return ({ message: `"${request}" must be a string`, status: StatusCodes.UNPROCESSABLE_ENTITY });
  }

  if (field.length < num) {
    const err = `"${request}" length must be at least ${num} characters long`;
    return ({ message: err, status: StatusCodes.UNPROCESSABLE_ENTITY });
  }

  return false;
}

export function validationNumber(level: number) {
  if (!level && level !== 0) {
    return { message: '"level" is required', status: StatusCodes.BAD_REQUEST };
  }

  if (typeof level !== 'number') {
    return ({ message: '"level" must be a number', status: StatusCodes.UNPROCESSABLE_ENTITY });
  }

  if (level <= 0) {
    const err = '"level" must be greater than or equal to 1';
    return ({ message: err, status: StatusCodes.UNPROCESSABLE_ENTITY });
  }

  return false;
}