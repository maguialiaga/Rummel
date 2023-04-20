import React from "react";
import Layout from "../components/Layout";
import Features from "../components/Features";
import ContentMix from "../components/ContentMix";
import FormMix from "../components/FormMix";

export default function MixMaster() {
  return (
    <Layout>
      <>
        <Features />
        <ContentMix />
        <FormMix />
      </>
    </Layout>
  );
}
