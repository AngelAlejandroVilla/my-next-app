import React from "react";
import HeaderNormal from "../components/header/HeaderNormal";
import TitleSection from "../components/heading/TitleSection";
import Layout from "../layout/Layout";

import Map from "../components/Map/Map";
import DsnGrid from "../layout/DsnGrid";
import InfoBox from "../components/contact/InfoBox";
import ContactForm from "../components/contact/ContactForm";
import NextPage2 from "../components/next/NextPage2";
import Footer from "../components/footer/Footer";
import Head from "next/head";

function About() {
  TitleSection.defaultProps = {
    classDesc: "line-shape line-shape-before",
    classDesInner: "line-bg-right",
  };

  return (
    <Layout>
      <Head>
        <title>Contactanos | NFT CONSULTING</title>
      </Head>
      {/*========== Header Normal ========== */}
      <HeaderNormal className="text-center">
        <p className="subtitle p-relative line-shape  mb-20">
          <span className="pl-10 pr-10 background-section">
            COMPAÑÍA DE SERVICIOS FISCALES
          </span>
        </p>
        <h1 className="title text-uppercase">
          Compromiso Inquebrantable
          <br /> Resultados Insuperables
        </h1>
      </HeaderNormal>
      {/*========== End Header Normal ==========*/}
      {/*Start Map*/}
      <Map
        mapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg"
        zoom={10}
        height="80vh"
        defaultCenter={{ lat: 30.0489206, lng: 31.258553 }}
      />

      {/*Start Contact Form && Info Box*/}
      <div className="section-margin container">
        <DsnGrid col={2} colTablet={1}>
          <ContactForm />
          <InfoBox className="align-self-center" />
        </DsnGrid>
      </div>

      {/*========== Start Next Page Section ==========*/}
      <NextPage2 className={`background-section section-padding`} />
      {/*========== End Next Page Section ==========*/}

      {/*========== Footer ==========*/}
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
    </Layout>
  );
}

export default About;
