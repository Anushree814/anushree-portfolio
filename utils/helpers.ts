export const validateInput = (value: unknown) => {
  if (!value || typeof value !== "string") {
    return false;
  }
  return true;
};

export const getErrorMessage = (error: any): string => {
  console.log("🚀 ~ getErrorMessage ~ error:", error)
  let message: string;
  if (error && typeof error === "object" && "message" in error) {
    message = error.message;
  } else if (error instanceof Error) {
     message = error.message;
  }else if(typeof error==='string'){
    message=error
  }else{
    message='Unknown error'
  }
  return message;
};
