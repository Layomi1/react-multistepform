import { ReactNode } from "react";
type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          margin: 0,
          marginBottom: "2rem",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          justifyContent: "flex-start",
          gap: "1rem",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
