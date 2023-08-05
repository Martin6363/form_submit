import { useForm } from "react-hook-form";
import '../assets/styles/formInput.scss';


export default function App() {
  const { register,
          handleSubmit,
          formState: { errors },
          reset,
          trigger      
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    reset();
  }

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user-box">
          <input className={`${errors.name && "invalid"}`}
           {...register("name", {
            required: 'Name is required' 
          })} 
          />
          <label>Name</label>
          {errors.name && (<small>{errors.name.message}</small>)}
        </div>
        <div className="user-box">
            <input className={`${errors.lastName && "invalid"}`}
              {...register("lastName", {
                 required: 'Last Name is required'
              })}
            />
            <label>Last Name</label>
            {errors.lastName && (<small>{errors.lastName.message}</small>)}
        </div>
        <div className="user-box">
            <input className={`${errors.email && "invalid"}`}
             {...register("email", { 
              required: 'Email is required',
              pattern: {
                value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
                message: "Invalid email address"
              }  
            })}
            />
            <label>Email</label>
            {errors.email && (<small>{errors.email.message}</small>)}
        </div>
        <div className="user-box">
          <input className={`${errors.password && "invalid"}`}
            type="password" 
            {...register("password",{ 
              required: 'Password is required',
              minLength: {
                value: 8,
                message: "Password must be 8-16 characters long"
              },
              maxLength: {
                value: 16,
                message: "Password must be 8-16 characters long"
              },
            }
            )}
            onKeyUp={() => {
              trigger("email")
            }} 
            />
          <label>Password</label>
          {errors.password && (<small>{errors.password.message}</small>)}
        </div>
        <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );
}
