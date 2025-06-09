type ErrorMessageProps = {
  text: string;
};

function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <div id="error">
      <h1>An error occured</h1>
      <p>{text}</p>
    </div>
  );
}

export default ErrorMessage;
