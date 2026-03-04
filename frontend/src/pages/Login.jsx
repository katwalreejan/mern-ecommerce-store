import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Signup.css"; 

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setError(data?.error || "Something went wrong");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data));
      console.log("Success");
       toast.success("User logged in successfully 🎉");
      navigate("/home");
    } catch (err) {
      setError("Server not reachable");
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleFormSubmit}>
        <h2>Login</h2>

        <label>Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log in</button>

        {error && <p className="error">{error}</p>}
         <p className="auth-link">
          Don't have an account? <Link to="/signup">SignUp</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;