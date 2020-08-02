import React, { useState } from "react";
import { Btn } from "./styles/Btns";
import {
  FormGroupForCheckBox,
  FormGroup,
  FormStyles,
  Input,
  Label,
} from "./styles/Form.elements";
import { FormWrapper } from "./styles/Wrappers";

interface Props {
  title: string;
}

const RegisterForm = ({ title }: Props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    gender: "FEMALE",
  });

  const { firstName, lastName, email, password, password2, gender } = formData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;

    const inputValue =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      gender: gender,
    };

    const foo = async () => {
      await fetch("http://localhost:4000/user/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    };
    if (password === password2) {
      foo();
    } else {
      return;
    }
  };

  return (
    <FormWrapper>
      <h3>{title}</h3>
      <FormStyles onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type='text'
            name='firstName'
            placeholder='firstName'
            value={firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='lastName'
            placeholder='lastName'
            value={lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name='email'
            type='email'
            placeholder='email'
            value={email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroupForCheckBox>
          <Input
            type='radio'
            name='gender'
            value='FEMALE'
            id='FEMALE'
            checked={gender === "FEMALE"}
            onChange={handleChange}
          />
          <Label htmlFor='FEMALE'>
            <span>Female</span>
          </Label>

          <Input
            type='radio'
            name='gender'
            value='MALE'
            id='MALE'
            checked={gender === "MALE"}
            onChange={handleChange}
          />
          <Label htmlFor='MALE'>
            <span>Male</span>
          </Label>
        </FormGroupForCheckBox>
        <FormGroup>
          <Input
            name='password'
            type='password'
            placeholder='password'
            value={password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name='password2'
            type='password'
            placeholder='repeat password'
            value={password2}
            onChange={handleChange}
          />
        </FormGroup>
        <Btn type='submit'>Register</Btn>
      </FormStyles>
    </FormWrapper>
  );
};

export default RegisterForm;
