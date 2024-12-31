import { FormEvent, useState } from "react";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import useMultistep from "./useMultistep";
import UserForm from "./UserForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};
const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};
function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, IsFirstStep, prev, next, IsLastStep } =
    useMultistep([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!IsLastStep) return next();
    alert("Successful Account creation!");
  }
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "3rem",
        borderRadius: "0.5rem",
        fontFamily: "arial",
        maxWidth: "max-content",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            position: "absolute",
            top: ".05rem",
            right: ".5rem",
          }}
        >
          {currentStepIndex + 1} /{steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {IsFirstStep && (
            <button type="button" onClick={prev}>
              Prev
            </button>
          )}
          <button type="submit">{IsLastStep ? "Finsih" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
