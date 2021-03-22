import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AutoForm";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
};

export default RegisterPage;
