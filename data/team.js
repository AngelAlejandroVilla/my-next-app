const data = [
  {
    id: 1,
    name: "Ahmed Shawky",
    position: "Fiscalista",
    src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    social: [
      { title: "FB", url: "#0" },
      { title: "TW", url: "#0" },
    ],
  },
  {
    id: 2,
    name: "Hisham Megahed",
    position: "Director",
    src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    social: [
      { title: "FB", url: "#0" },
      { title: "TW", url: "#0" },
    ],
  },
  {
    id: 3,
    name: "Jeremy Smith",
    position: "Fiscalista",
    src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    social: [
      { title: "FB", url: "#0" },
      { title: "TW", url: "#0" },
    ],
  },
  {
    id: 4,
    name: "Bill Gardner",
    position: "Fiscalista",
    src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    social: [
      { title: "FB", url: "#0" },
      { title: "TW", url: "#0" },
    ],
  },
  {
    id: 5,
    name: "Jeremy Dupont",
    position: "Fiscalista",
    src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    social: [
      { title: "FB", url: "#0" },
      { title: "TW", url: "#0" },
    ],
  },
  {
    id: 6,
    name: "Angelo Walking",
    position: "Fiscalista",
    src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    social: [
      { title: "FB", url: "#0" },
      { title: "TW", url: "#0" },
    ],
  },
];

export const getTeamData = () => data;

export const getTeamItem = (value, whereName = "id") => {
  return data.find((item) => item[whereName] === value);
};
