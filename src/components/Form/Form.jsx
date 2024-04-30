export const Form = ({ children, ref, onSubmit, className }) => {
  return (
    <form
      ref={ref}
      onSubmit={onSubmit}
      className={`flex flex-col gap-4 ${className}`}
    >
      {children}
    </form>
  );
};
