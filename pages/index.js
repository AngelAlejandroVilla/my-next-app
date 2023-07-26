import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../layout/Layout";
import SliderPortfolio from "../components/slider-portfolio/SliderPortfolio";
import HeroSection from "../components/hero-section/HeroSection";
import TitleSection from "../components/heading/TitleSection";
import ServiceOne from "../components/services/grid/ServiceOne";
import ParallaxImage from "../components/Image/ParallaxImage";
import MoveBox from "../components/move-box/MoveBox";
import Accordion, { AccordionItem } from "../components/accordion/Accordion";
import DsnGrid from "../layout/DsnGrid";
import TitleCover from "../components/heading/TitleCover";
import Image from "next/image";
import BrandClient from "../components/brand-client/BrandClient";
import NextPage from "../components/next/NextPage";
import Footer from "../components/footer/Footer";
import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";

function Home() {
  TitleSection.defaultProps = {
    classDesc: "line-shape line-shape-before",
    classDesInner: "line-bg-right",
  };

  return (
    <Layout>
      <Head>
        <title>Incio | NFT CONSULTING</title>
      </Head>
      <SliderPortfolio
        webgel
        fullWidth
        className={"align-items-end pb-80"}
        webgelOptions={{
          displacement: "/img/displacement/8.jpg",
          speedIn: 3.5,
        }}
        metaData={{ hasSeparator: true }}
      />
      <HeroSection
        className="container section-margin container fill-right-container"
        data-dsn-title="Sobre Nosotros"
      />
      {/*<!-- ========== Vision ========== */}

      {/*Start Parallax Img*/}
      <ParallaxImage
        alt={""}
        src={
          "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        height={"80vh"}
        parallaxFrom={{ scale: 1.3 }}
        parallax={{ scale: 1 }}
        overlay={5}
      />
      {/*End Parallax Img*/}

      {/*<!-- ========== About Section ========== */}
      <div
        className="container section-margin"
        data-dsn-title="Visión y Misíon"
      >
        <TitleSection
          className="mb-15"
          description={"Mas Sobre Nosotros"}
          defaultSpace={false}
        />
        <DsnGrid col={2} colTablet={1}>
          <div className="box-left">
            <h2>Visión y Misión </h2>
          </div>
          <div className="box-right">
            <p className="max-w570 dsn-up mb-15 ">
              Nuestra visión es ser una empresa de servicios fiscales reconocida
              por nuestra excelencia en el servicio y el trabajo en conjunto con
              nuestros clientes, brindando soluciones innovadoras y confiables
              que impulsen el éxito financiero de nuestros clientes y les
              permitan alcanzar sus metas empresariales de manera estratégica y
              cumpliendo con las normativas legales
            </p>

            <p className="max-w570 dsn-up">
              Nuestra misión es proporcionar servicios fiscales integrales y de
              alta calidad, ofreciendo asesoramiento experto, cumplimiento
              normativo y soluciones personalizadas a nuestros clientes.
            </p>
          </div>
        </DsnGrid>
      </div>
      {/*<!-- ========== End About Section ========== */}

      {/*<!-- ========== About section ========== */}
      <div className="p-relative section-margin">
        <DsnGrid className="container" col={2} colTablet={1}>
          <div className="p-relative box-left order-md-2">
            <TitleCover>Fislosofía</TitleCover>
            <TitleSection className="mb-30" defaultSpace={false}>
              Nuestra Filosofía
            </TitleSection>
            <p className="max-w570 dsn-up mb-10 border-top pt-30">
              En NFT CONSULTING creemos fielmente en la ayuda mutua y la
              colaboración; es por eso que centramos nuestros ideales un
              pensamiento de beneficio mutuo y el intercambio de conocimientos
              para el crecimiento, confiamos plenamente en valores como la
              cortesía y el respeto para una mejora continua en el enfoque de
              comunicación con nuestros clientes y llegar a un servicio
              excepcional de crecimiento conjunto.
            </p>
          </div>
          <div className="p-relative box-right order-md-1">
            <div className="box-im h-100 ">
              <Image
                className="cover-bg-img "
                src="https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw"
              />
            </div>
          </div>
        </DsnGrid>
      </div>
      {/*<!-- ========== End About section ========== */}

      {/*Start Box Info Move Content*/}
      <div className="p-relative section-margin">
        <ParallaxImage
          src="https://images.pexels.com/photos/7693241/pexels-photo-7693241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          overlay={2}
          alt={""}
        />
        <MoveBox tablet={false}>
          <TitleSection
            className={`align-items-start mb-30`}
            description={"La mejor atención a nuestros clientes"}
            defaultSpace={false}
          >
            Nuestros Servicios
          </TitleSection>

          <p className="mb-10">
            Somos un equipo de expertos fiscales comprometidos con el estudio y
            aplicación de estrategias para el aprovechamiento de impuestos en
            base al CFF. Nos enorgullece proteger la integridad de nuestros
            clientes frente a las acciones de autoridades, personas e
            instituciones
          </p>

          <p className={`sm-p mt-15 theme-color`}>Contáctanos.</p>
        </MoveBox>
      </div>
      {/*End Box Info Move Content*/}

      {/*Start Service*/}
      <div
        className="container section-margin"
        data-dsn-title="Reingeniería Fiscal"
      >
        <TitleSection
          className="align-items-center text-center"
          description={""}
        >
          Reingeniería <br /> Fiscal
        </TitleSection>
        <ServiceOne />
      </div>
      {/*End Service*/}

      {/*Start box vertical Section*/}
      <section
        className="box-gallery-vertical container section-margin"
        data-dsn-title="Estructura de negocios"
      >
        <DsnGrid
          col={2}
          colTablet={1}
          colGap={0}
          rowGap={0}
          rowGapTablet={0}
          rowGapMobile={0}
        >
          <div className="p-relative mb-lg-section">
            <div className="box-im w-100 h-100 p-absolute">
              <ParallaxImage
                alt={""}
                src={
                  "https://images.pexels.com/photos/7693187/pexels-photo-7693187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                overlay={3}
                height="100%"
                heightTable={"70vh"}
                heightMobile={"70vh"}
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 70vw,33vw"
              />
            </div>
          </div>
          <div className="p-relative pt-lg-section">
            <div className="box-info h-100 box-padding background-section ">
              <DsnGrid className="box-info-inner" col={1} colGap={0}>
                <TitleCover>NFT</TitleCover>
                <TitleSection
                  className={"text-uppercase"}
                  description={"tu mejor opcion"}
                  defaultSpace={false}
                >
                  Estructura De Negocios
                </TitleSection>
                <Accordion>
                  <AccordionItem
                    title="Consultoría de Negocios"
                    active
                    number={1}
                  >
                    <p>
                      -Consultoría en Constitución de Sociedades <br />
                      -Consultoría la Determinación de su Objeto Social <br />
                      -Consultoría en la Estructura Administrativa <br />
                      -Consultoría sobre Obligaciones Mercantiles <br />
                      -Consultoría en Planeación de Proyectos <br />
                      -Consultoría en Estructuración de Franquicias <br />
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    title="Procesos Administrativos y Financieros"
                    number={2}
                  >
                    <p>
                      -Estructura de procesos de Tesorería <br />
                      -Estructuras de Inversión <br />
                      -Procesos de Reclutamiento, Selección, Capacitación y
                      administración de Persona
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Planeación Fiscal" number={3}>
                    <p>
                      -Estructuras Fiscales <br />
                      -Precios de Transferencia <br />
                      -Valuación de Activos Intangibles <br />
                      -Protección Empresarial y Patrimonial <br />
                      -Defensa Fiscal <br />
                      -Planeación de Seguridad Social y Accesorios <br />
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Contabilidad Corporativa" number={4}>
                    <p>
                      -Elaboración de Contabilidades <br />
                      -Actualización de Obligaciones <br />
                      -Definicion de procesos Contables <br />
                    </p>
                  </AccordionItem>
                </Accordion>
              </DsnGrid>
            </div>
          </div>
        </DsnGrid>
      </section>
      {/*End box vertical Section*/}

      {/*========== End brand-client Section ==========*/}
      <section
        className="container section-margin"
        data-dsn-title="Nuestros Clientes"
      >
        <TitleSection
          className={`align-items-center text-center`}
          description={"Nuestros Clientes"}
        >
          Su Exito <br />
          Nuestra Reputación
        </TitleSection>

        <BrandClient
          col={4}
          colTablet={3}
          colMobile={2}
          colGap={0}
          rowGap={0}
        />
      </section>
      {/*========== End brand-client Section ==========*/}

      {/*========== Next Page ==========*/}
      <NextPage className="section-padding border-top background-section" />
      {/*========== End Next Page ==========*/}

      {/*========== Footer ==========*/}
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
    </Layout>
  );
}

export default Home;
