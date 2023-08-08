import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import FacePage from "@site/src/components/face-page";


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description=""
    >
      <main>
        <FacePage />
      </main>
    </Layout>
  );
}
