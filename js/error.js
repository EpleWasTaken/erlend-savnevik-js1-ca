function sendErrorMessage(errorMessage) {
  if (!errorMessage) {
    errorMessage = "An error occured trying to call the API, try again later.";
  }

  return `<div class="error">${errorMessage}</div>`;
}
