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
  FormTitle,
} from "../styles/FormStyles";
import { Container } from "../globalStyles";
import validateForm from "../data/validateForm";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({ name, email });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    emailjs
      .sendForm(
        "service_jrm9xqc",
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
      label2: "Enter your Name",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
      name: "user_name",
    },
    {
      label: "Email*",
      label2: "Enter your Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
      name: "user_email",
    },
    {
      label: "Link*",
      label2:
        "Enter your Link (Upload your stems to Google Drive, Dropbox or We transfer",
      value: link,
      onChange: (e) => setLink(e.target.value),
      type: "message",
      name: "message",
    },
    {
      label: "Message",
      label2: "Ask us anything",
      value: message,
      onChange: (e) => setMessage(e.target.value),
      type: "message",
      name: "message",
    },
  ];
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Send your stems here!</FormTitle>
            <FormWrapper ref={form} onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={el.label2}
                    value={el.value}
                    onChange={el.onChange}
                    name={el.name}
                    autoComplete="off"
                  />
                </FormInputRow>
              ))}

              <FormButton type="submit">Send</FormButton>
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

export default Form;