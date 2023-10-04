import React from "react";
import Layout from "../components/Layout";
import AboutUs from "../components/AboutUs";
import FormContact from "../components/FormContact";

export default function About() {
  return (
    <Layout>
      <>
        <AboutUs />
        <FormContact />
      </>
    </Layout>
  );
}
