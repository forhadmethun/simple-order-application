export const apiError = error => {
    if (error.response) {
        if (error.response.data.errorMessage)
            return error.response.data.errorMessage;
        else
            return `${error.response.status} Error`;
    }
    return error.message;
};