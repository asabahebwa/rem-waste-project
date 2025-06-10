type ErrorMessageProps = {
  text: string;
};

function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <div className="max-w-[80rem] mx-auto flex items-center justify-center min-h-screen bg-[#111827] text-white text-xl">
      <h1>An error occured</h1>
      <p>{text}</p>
    </div>
  );
}

export default ErrorMessage;
