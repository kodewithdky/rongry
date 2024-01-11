import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyle.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //form funtion
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        phone,
        address,
        answer,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Register-Rongry"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h3 className="title">Regiter</h3>
          <div className="mb-2">
            <input
              type="text"
              value={name}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              value={phone}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              value={address}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              value={answer}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Favorit book"
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              value={password}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
