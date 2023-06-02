import React from "react";
import Layout from "../layout/Layout";
import SliderPortfolio from "../components/slider-portfolio/SliderPortfolio";
import HeroSection from "../components/hero-section/HeroSection";
import TitleSection from "../components/heading/TitleSection";
import ServiceOne from "../components/services/grid/ServiceOne";
import ParallaxImage from "../components/Image/ParallaxImage";
import MoveBox from "../components/move-box/MoveBox";
import SwiperPagination from "../components/swiper-pagination/SwiperPagination";
import Testimonial from "../components/testimonial/Testimonial";
import Accordion, { AccordionItem } from "../components/accordion/Accordion";
import DsnGrid from "../layout/DsnGrid";
import TitleCover from "../components/heading/TitleCover";
import BlogSwiper from "../components/bolg/BlogSwiper";
import Team from "../components/Team/Team";
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
    <Layout
      modelRight={{
        children: <ModalContact />,
        propsModal: { textBtn: "Contactanos" },
      }}
    >
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
        data-dsn-title="How We Are"
      />

      {/*Start Service*/}
      <div className="container section-margin" data-dsn-title="Our Services">
        <TitleSection
          className="align-items-center text-center"
          description={""}
        >
          Reingenieria <br /> Fiscal
        </TitleSection>
        <ServiceOne />
      </div>
      {/*End Service*/}

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
            description={"La mejor atencion a nuestros clientes"}
            defaultSpace={false}
          >
            Nuestros Servicios
          </TitleSection>

          <p className="mb-10">
            Somos estudiosos de la ley,con apego estricto a la Constitución
            Política de los Estados Unidos Mexicanos y todas aquellas leyes que
            rigen nuestra vida cotidiana, nuestro actuar como individuos y como
            empresas, nos preciamos de proteger los derechos de los ciudadanos
            ante el comportamiento de las autoridades, personas o instituciones.
          </p>
          <p className="mb-10">
            Brindar asesoría especializada a nuestros clientes, integridad,
            patrimonio, así como salvaguardar sus garantías individuales,
            mediante la ejecución de ejercicios corporativos, nuestra obsesión,
            ser los mejores en ello, en nuestra realidad.
          </p>

          <p className={`sm-p mt-15 theme-color`}>Contactanos.</p>
        </MoveBox>
      </div>
      {/*End Box Info Move Content*/}

      {/*Start testimonial Section*/}
      <div className="section-margin" data-dsn-title="Testimonials">
        <Testimonial
          className="container section-margin"
          title="Vision, Mision y Filosofia"
          skin={["testimonials-half"]}
          backgroundColor={"background-section"}
          desktop={{ slidesPerView: 2 }}
          mobile={{ slidesPerView: 1 }}
          speed={1000}
          grabCursor
          loop
          loopedSlides={2}
          parallax
          parallaxImage={{ "data-swiper-parallax-scale": 0.7 }}
          parallaxContent={{
            "data-swiper-parallax-opacity": 0,
            "data-swiper-parallax": "30%",
          }}
        >
          <SwiperPagination
            className={`justify-content-between dsn-container mt-30`}
          />
        </Testimonial>
      </div>

      {/*End testimonial Section*/}

      {/*Start box vertical Section*/}
      <section
        className="box-gallery-vertical container section-margin"
        data-dsn-title="Our Services"
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

      {/*========== team Section ========== */}
      <section className="container section-margin " data-dsn-title="Our Team">
        <TitleSection
          className={` align-items-center text-center`}
          description={"Nuestro Equipo"}
        >
          A Tus Servicios
        </TitleSection>

        <Team col={3} colTablet={2} />
      </section>
      {/*========== End team Section ========== */}

      {/*========== End brand-client Section ==========*/}
      <section
        className="container section-margin"
        data-dsn-title="our clients"
      >
        <TitleSection
          className={`align-items-center text-center`}
          description={"Nuestros Clientes"}
        >
          Su Exito <br />
          Nuestra Reputacion
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
