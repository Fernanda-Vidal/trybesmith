import StatusCodes from './StatusCodes';

export default function validationString(field: string, request: string) {
  if (!field) return { message: `"${request}" is required`, status: StatusCodes.BAD_REQUEST };
  
  if (typeof field !== 'string') {
    return ({ message: `"${request}" must be a string`, status: StatusCodes.UNPROCESSABLE_ENTITY });
  }

  if (field.length < 3) {
    const err = `"${request}" length must be at least 3 characters long`;
    return ({ message: err, status: StatusCodes.UNPROCESSABLE_ENTITY });
  }

  return false;
}