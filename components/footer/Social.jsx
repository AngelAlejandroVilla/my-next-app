import { dsnCN } from "../../hooks/helper";

const socialContent = [
  { name: "Dribbble.", href: "#0" },
  { name: "Behance.", href: "#0" },
  { name: "Linkedin.", href: "#0" },
  { name: "Twitter.", href: "#0" },
];

function Social({ className, ...restProps }) {
  return (
    <div
      className={dsnCN("footer-social p-relative", className)}
      {...restProps}
    ></div>
  );
}

export default Social;
