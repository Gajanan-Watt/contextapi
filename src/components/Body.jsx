import { AuthContext } from "../context/AuthContext";

import { useContext, useState } from "react";
const payload = {
  email: "",
  password: ""
};
export const Body = () => {
  const { isAuth, login, token } = useContext(AuthContext);
  const [data, setData] = useState(payload);
  const handelChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const submitData = (e) => {
    e.preventDefault();
    login(data);
  };
  return (
    <div>
      {isAuth ? (
        <div>
          Login Status : sucessfull
          <br />
          Token of the user is:{token}
        </div>
      ) : (
        <form action="" onSubmit={submitData}>
          <input
            type="text"
            onChange={handelChange}
            placeholder="email"
            name="email"
          />
          <input
            type="password"
            onChange={handelChange}
            placeholder="password"
            name="password"
          />
          <input type="submit" />
        </form>
      )}
    </div>
  );
};
