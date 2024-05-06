import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { FormInput, SubmitButton } from "./../../components";
import { LinkToLogin } from "./components";

import { registerUser } from "../../api/auth";

export const action = async ({ request }) => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  try {
    const response = await registerUser(data);

    toast.success("Account created successfully", {
      draggable: true,
    });

    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "Please double check your credentials";

    toast.error(errorMessage, {
      draggable: true,
    });

    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>

        <FormInput type="username" label="username" name="username" />

        <FormInput type="email" label="email" name="email" />

        <FormInput type="password" label="password" name="password" />

        <div className="mt-4">
          <SubmitButton text="register" isBlock={true} />
        </div>

        <LinkToLogin />
      </Form>
    </section>
  );
};

export default Register;
