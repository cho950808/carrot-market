import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    setError,
    reset,
  } = useForm<LoginForm>({ mode: "onChange" });
  const onValid = (data: LoginForm) => {
    console.log("가입 완료");
    setError("username", { message: "Taken username" });
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid, onInvalid)}
        className="flex flex-col space-y-3 p-4"
      >
        <input
          {...register("username", {
            required: "Username is required",
            minLength: {
              message: "The username should be longer than 5 chars",
              value: 5,
            },
          })}
          type="text"
          placeholder="Username"
        />
        {errors.username?.message}
        <input
          {...register("email", {
            required: "Email is required",
            validate: {
              notGmail: (value) =>
                !value.includes("@gmail.com") || "Gmail is not allowed",
            },
          })}
          type="email"
          placeholder="Email"
          className={`${
            Boolean(errors.email) ? "border-red-500 border-2" : "border-2"
          }`}
        />
        {errors.email?.message}
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Password"
        />
        <input
          type="submit"
          value="Create Account"
          className="bg-red-200 h-[50px]"
        />
        {errors.errors?.message}
      </form>
    </div>
  );
}
