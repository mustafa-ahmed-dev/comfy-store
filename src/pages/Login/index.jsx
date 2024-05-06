import { Form, redirect } from "react-router-dom";

import { FormInput, SubmitButton } from "../../components";
import { GuestUserButton, LinkToRegister } from "./components";

import { toast } from "react-toastify";

import { loginUser } from "./../../api/auth";
import { login } from "../../features/user/userSlice";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();

    const data = Object.fromEntries(formData);

    try {
      const response = await loginUser(data);

      const user = {
        token: response.data.jwt,
        ...response.data.user,
      };

      store.dispatch(login(user));

      toast.success("Account logged in successfully", {
        draggable: true,
      });

      return redirect("/");
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

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>

        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />

        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />

        <div className="mt-4">
          <SubmitButton text="login" isBlock={true} />
        </div>

        <GuestUserButton />

        <LinkToRegister />
      </Form>
    </section>
  );
};

export default Login;
