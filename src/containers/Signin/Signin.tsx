import "./Signin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { postPut } from "../../http-service";

type UserSign = {
  email: string;
  password: string;
};

export const Signin = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const { email, password, rememberMe } = target;

    const data: UserSign = { email: email.value, password: password.value };

    postPut("/user/login", "POST", data).then((res) => {
      if (res.status === 200) {
        // Store in localStorage if rememberMe is checked.
        if (rememberMe.checked) {
          localStorage.setItem("token", res.body.token);
        } else {
          sessionStorage.setItem("token", res.body.token);
        }

        window.location.pathname = "/user";
      }
      if (res.status === 401) {
        localStorage.clear();
        window.location.pathname = "/signin";
      }
    });
  };
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};
