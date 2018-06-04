export const sendResponse = (resp, statusCode, body) => {
  return resp
    .set('Content-Type', 'application/json')
    .status(statusCode)
    .send(body);
}

export const sendErrorResponse = (resp, statusCode, message) => {
  return sendResponse(resp, statusCode, {
    error: message
  });
};
