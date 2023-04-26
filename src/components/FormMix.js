import React, { forwardRef, useRef, useState } from "react";
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
  FormSelect,
  Options,
  FormInputMsg,
  TextArea,
} from "../styles/FormStyles";
import { Container, Heading, MainHeadingFour } from "../globalStyles";
import validateFormMix from "../data/validateFormMix";
import emailjs from "@emailjs/browser";

const FormMix = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [option, setOption] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateFormMix({ name, email, link, option });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    emailjs
      .sendForm(
        // "service_jrm9xqc",
        "service_3h13353",
        "template_6e5i939",
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
    setLink("");
    setMessage("");
    setOption("");
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
      label2: "Enter your name",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
      name: "user_name",
    },
    {
      label: "Email*",
      label2: "Enter your email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
      name: "user_email",
    },
    // {
    //   label: "Link* required",
    //   label2:
    //     "Enter your Link (Upload your stems to Google Drive, Dropbox or We transfer",
    //   value: link,
    //   onChange: (e) => setLink(e.target.value),
    //   type: "link",
    //   name: "link",
    // },
    // {
    //   label: "Message",
    //   label2: "Enter your messsage",
    //   value: message,
    //   onChange: (e) => setMessage(e.target.value),
    //   type: "message",
    //   name: "message",
    // },
  ];

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Send your stems here</FormTitle>
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
              <FormInputRow key={2}>
                <FormLabel>Link*</FormLabel>
                <FormInput
                  type={"URL"}
                  placeholder={
                    "Enter your Link (Upload your stems to Google Drive, Dropbox or We transfer)"
                  }
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  name={"user_link"}
                  autoComplete="off"
                />
              </FormInputRow>

              <FormInputRow key={3}>
                {/* <FormLabel>Choose your request</FormLabel> */}
                {/* <FormLabel>Choose an option</FormLabel> */}
                <FormSelect
                  type={"select"}
                  name={"user_option"}
                  onChange={(e) => setOption(e.target.value)}
                >
                  <option value={"Choose"}>Choose an option*</option>
                  <option value={"Mixdown"}>Mixdown</option>
                  <option value={"Mixdown & Digital Master"}>
                    Mixdown & Digital Master
                  </option>
                  <option value={"Mixing and Analog"}>
                    Mixing and Analog Master
                  </option>
                </FormSelect>
              </FormInputRow>
              <FormInputRow key={4}>
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
        <MainHeadingFour>
          Turrnarround of 10 days max. after your payment
        </MainHeadingFour>
        <MainHeadingFour>2 Revisions included</MainHeadingFour>
        <MainHeadingFour>Extra revision 15 EUR</MainHeadingFour>
      </Container>
      <Heading>
        {/* <MainHeadingFour>
          Turrnarround of 10 days max. after your payment - 2 Revisions included
        </MainHeadingFour>
        <MainHeadingFour>Extra revision ---- 15 EUR</MainHeadingFour> */}
      </Heading>
    </FormSection>
  );
};

export default FormMix;
