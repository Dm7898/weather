import { ErrorText } from "../styles/StyledComponents";

const ErrorMessage = ({ message }) => {
  return message ? <ErrorText>{message}</ErrorText> : null;
};

export default ErrorMessage;
