const data = [
  {
    id: 1,
    title: "NFT CONSULTING",
    slug: "maybe-speaker",
    category: [],
    description: "Compromiso Inquebrantable, Resultado Insuperables",
    src: "/img/team/15.jpg",
    overlay: 6,
  },
  {
    id: 2,
    title: "Soluciones Fiscales",
    slug: "yaren-collection",
    src: "/img/team/8.jpg",

    category: [],
    description: "En NFT CONSULTING nos encargamos de tu comodidad",
    overlay: 6,
  },
  {
    id: 3,
    title: "Contactanos Ahora",
    slug: "huggl-power-pack",
    src: "/img/team/1Img.jpg",

    category: [],
    description: "La Mejor Comunicacion Para Nuestros Clientes",
    overlay: 6,
  },
];

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "slug") => {
  return data.find((item) => item[whereName] === value);
};
export const getPortfolioLink = (item) => {
  if (item) return item.slug && "/portfolio/" + item.slug;

  return "";
};
