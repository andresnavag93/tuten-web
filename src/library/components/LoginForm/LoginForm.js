import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  InputSearch,
  InputButton,
  Span,
  Container,
  H3,
  Div,
  Label,
  Form,
} from "./LoginFormStyles";
import { put } from "../../networking/http";
import { setToken } from "../../redux/actions";
import { navigate } from "@reach/router";

export const LoginForm = ({ type }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [code, setCode] = useState(200);
  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    let response = await put("/user/", data.email, data.password);
    if (response.code == 401) {
      setCode(401);
      setStatus(response.status);
    } else {
      setCode(200);
      setStatus("");
      console.log(response.sessionTokenBck);
      dispatch(setToken(response.sessionTokenBck));
      navigate("/", { replace: true });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Div>
          <Label htmlFor="email">
            <Span>Email</Span>
            <InputSearch name="email" ref={register} />
          </Label>
          <Label htmlFor="password">
            <Span>Password</Span>
            <InputSearch name="password" ref={register} />
          </Label>
          {code !== 200 && <H3>{status}</H3>}
          <InputButton type="submit" value="Send" />
        </Div>
      </Form>
    </Container>
  );
};
