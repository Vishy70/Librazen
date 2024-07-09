"use client";

import React from "react";
import { useState } from "react";

import CardWrapper from "@/components/auth/CardWrapper";
import { Form, FormGroup, FormLabel, Input } from "@/components/ui/Forms";
import { StyledButton } from "../ui/StyledButton";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {};

  return (
    <CardWrapper
      headerTitle="Welcome :D"
      headerLabel="Sign Up Here"
      redirectButtonLabel="Already have an account?"
      redirectButtonHref="/login"
      showSocial={true}
    >
      <Form onSubmit={handleSubmit}>
      <FormGroup>
          <FormLabel htmlFor="email">Name</FormLabel>
          <Input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={"Namey"}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={"user@email.com"}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder={"******"}
            required
          />
        </FormGroup>

        <StyledButton variant="secondary" size="md" className={"w-full"}>
          Enter Librazen
        </StyledButton>
      </Form>
    </CardWrapper>
  );
}
