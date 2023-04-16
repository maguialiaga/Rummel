import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";

export default function Home() {
  return (
    <Layout>
      <>
        <Hero />
        <Hero2 />
      </>
    </Layout>
  );
}
