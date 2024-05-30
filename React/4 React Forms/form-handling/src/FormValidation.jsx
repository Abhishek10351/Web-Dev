import { useForm } from "react-hook-form";

export default function FormValidation() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    const registerOptions = {
        name: {
            required: "Name cannot be blank",
            pattern: {
                // value: /^[a-zA-Z]+$/i,
                // name can not contain just spaces
                value: /^(?!\s*$).+/,
                message: "Invalid name",
            },
        },
        email: {
            required: "Email cannot be blank",
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
            },
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 10,
                message: "Password must be at least 10 characters",
            },
        },
    };
    // min is used for int comparision , while minlength is for string comparision

    // console.log(watch("name"));
    // console.log(errors?.name);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    {...register("name", registerOptions.name)}
                />
                <small style={{ color: "red" }}>
                    {errors?.name && errors?.name.message}
                </small>
            </div>
            <div className="">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    {...register("email", registerOptions.email)}
                />
                <small style={{ color: "red" }}>
                    {errors?.email && errors?.email.message}
                </small>
            </div>
            <div className="">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    {...register("password", registerOptions.password)}
                />
                <small style={{ color: "red" }}>
                    {errors?.password && errors?.password.message}
                </small>
            </div>
            <button> Submit</button>
        </form>
    );
}
