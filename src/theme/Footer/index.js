import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Newsletter } from "../../components/NewsLetter";

export default function FooterWrapper(props) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Newsletter data={siteConfig.customFields.newsletter} />
    </>
  );
}