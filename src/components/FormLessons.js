import React, { useRef, useState } from "react";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
  FormSelect,
  FormTitle,
  TextArea,
} from "../styles/FormStyles";
import { Container } from "../globalStyles";
import validateForm from "../data/validateForm";
import emailjs from "@emailjs/browser";

const FormLessons = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [mentor, setMentor] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({ name, email, mentor });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    emailjs
      .sendForm(
        "service_3h13353",
        "template_nelp46j",
        form.current,
        "vRc98fB-F8s0iNWTT"
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
    setMentor("Choose your mentor");
    setError(null);
    setSuccess("Email was sent!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: "Name*",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
      name: "user_name",
    },
    {
      label: "Email*",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
      name: "user_email",
    },
    // {
    //   label: "Message",
    //   value: message,
    // onChange: (e) => setMessage(e.target.value),
    //   type: "message",
    //   name: "message",
    // },
  ];
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Start learning with us</FormTitle>
            <FormWrapper ref={form} onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                    name={el.name}
                    autoComplete="off"
                  />
                </FormInputRow>
              ))}
              <FormInputRow>
                {/* <FormLabel>Choose your request</FormLabel> */}
                {/* <FormLabel>Choose an option</FormLabel> */}
                <FormSelect
                  type={"select"}
                  name={"user_mentor"}
                  onChange={(e) => setMentor(e.target.value)}
                >
                  <option value={"Choose"}>Choose your mentor*</option>
                  <option value={"No preference"}>No preference</option>
                  <option value={"Djolee"}>Djolee</option>
                  <option value={"Gespona"}>Gespona</option>
                  <option value={"Last men on earth"}>Last Men On Earth</option>
                </FormSelect>
              </FormInputRow>
              <FormInputRow>
                <FormLabel>Message</FormLabel>
                <TextArea
                  type={"message"}
                  placeholder={"Enter your message"}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name={"message"}
                  autoComplete="off"
                />
              </FormInputRow>
              <FormButton type="submit">Get your quote</FormButton>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default FormLessons;
