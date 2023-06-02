import { dsnCN } from "../../hooks/helper";
import Button from "../button/Button";
import BgDot from "../header/BgDot";

const NextContent = {
  title: "Requieres mas informacion \no quieres hacernos una pregunta?",
  subtitle: `Informate Mas`,
  buttonText: "Contactanos",
};

function NextPage({ className, ...restProps }) {
  return (
    <section
      className={dsnCN(
        "next-page p-relative d-flex align-items-center",
        className
      )}
      {...restProps}
    >
      <BgDot />
      <BgDot rightPosition />
      <div className="container w-100">
        <div className="c-wrapper d-flex justify-content-between">
          <div className="d-flex flex-column">
            <p className="sub-heading line-shape line-shape-after ">
              <span className="line-bg-left">{NextContent.subtitle}</span>
            </p>
            <h2 className="section-title max-w750 mt-15">
              {NextContent.title}
            </h2>
          </div>

          <div className="button-box d-flex justify-content-end align-items-center">
            <Button
              href={"/contact"}
              className="mr-15 line-head"
              borderStyle={"border-color-heading-color"}
              borderRadius
              transitionPage={{ title: NextContent.buttonText }}
            >
              {NextContent.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NextPage;