import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { Graphics2 } from "../Graphics2/Graphics2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

//tworzenie własnych hooków
const useLocalState = (key, initial) => {
  const [form, setForm] = useState(() => {
    return initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(form));
  }, [form]);

  return [form, setForm];
};

export const Form = () => {
  // const [form, setForm] = useLocalState("user", { name: "", password: "" });
  const [name, setName] = useState("");
  const [password, setPassword] = useLocalState("");
  const [error, setError] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  let history = useHistory();
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (name.length <= 2) {
      setError("Nazwa musi być dłuższa niż 2 znaki");
    } else if (form.pass.length <= 4) {
      setError("Hasło musi być dłuższe niż 4 znaki");
    } else {
      setError("");

      history.push("/game");

      //  <h1>Witaj {form.name}</h1>
      //przekierowanie do kompoenentu startGame
    }
  };
  };

  return (
    <>
      <div className="container_form">
        <Graphics2 />
        <div className="wrap_form">
          <div className="form">
            <h3 className="form_logo">Log in</h3>
            <form onSubmit={submitForm}>
              <br />
              <br />
              <br />
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
              <div className="pass_wrap">
                <input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setAge(e.target.value)}
                />
                <i onClick={togglePasswordVisiblity}>{eye}</i>
              </div>
              <button type="submit" className="btn_login">
                Zaloguj
              </button>
              <p className="form_alert">{error}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
