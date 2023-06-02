import { dsnCN } from "../../hooks/helper";
import DsnGrid, { DsnGridProps } from "../../layout/DsnGrid";
import Image from "next/image";

const data = [
  {
    src: "/img/logo/1.png",
    text: "Empresas de la industria de la construccion",
  },
  {
    src: "/img/logo/2.png",
    text: "Empresas de servicio administrativo y juridico",
  },
  { src: "/img/logo/3.png", text: "Empresas de produccion agricola" },
  { src: "/img/logo/4.png", text: "Empresa gubernamentales" },
  { src: "/img/logo/5.png", text: "Empresas deportivas" },
  { src: "/img/logo/6.png", text: "Asociaciones civiles" },
  { src: "/img/logo/7.png", text: "Agencias de publicidad" },
  { src: "/img/logo/8.png", text: "Empresas de industria textil" },
];

function BrandClient({ className, ...retsProps }: DsnGridProps) {
  return (
    <DsnGrid
      className={dsnCN("brand-client wrapper-client", className)}
      {...retsProps}
    >
      {data &&
        data.map(($item, $index) => (
          <div className="logo-box" key={$index}>
            <div className="p-relative text-center">
              <Image src={$item?.src} alt={""} width={350} height={54} />
              <h5 className="text-center">{$item?.text}</h5>
            </div>
          </div>
        ))}
    </DsnGrid>
  );
}

export default BrandClient;
