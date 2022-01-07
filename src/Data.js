import React, { useState, useEffect, useLayoutEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/about",
    text: "sobre",
  },
  {
    id: 2,
    url: "/technologies",
    text: "tecnologias",
  },
  {
    id: 3,
    url: "/projects",
    text: "projetos",
  },
  {
    id: 4,
    url: "/contact",
    text: "contato",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/godloveqwer/",
    icon: <FaLinkedin className="icon" />,
  },
  {
    id: 2,
    url: "https://www.instagram.com/___godlove___/",
    icon: <FaInstagram className="icon" />,
  },
  {
    id: 3,
    url: "https://github.com/cooperlove",
    icon: <FaGithub className="icon" />,
  },
];

export const photoUrl =
  "https://lh3.googleusercontent.com/yLmPwQrlONX-RlTKO9qXCQyTwUBqVMfgnLQLTfH-esw9RppjMQGlIuHkYbgIZg0FRKSCgRKxrmlohi8CUTwp6yJZzwUc_4FATehnu0CRjMCg6HJhXfz7e8KzTYM3IjITjLU0q92EVO_P_N3vqvbtd9y2GTIe0tHZVybkJbbkftNj3KnE3pOzdWrLc3DYu6s4I7yG1waebCPdeXdUd06FjqNbKxRCeIxHbTuA3fC1UYnGxRnGwyaYCcPCqJghkl9IAoEVM0nmTcWgAmSUuEpCiAKlE50HhAJ3cVFfFDR37DmMnEauxfBgFhJ_44Vy4rwhhltLSRunx6fZh-O5P5uZ-iNCayuyjwi6dAdmmkPVx_qvRsTwSH6tEESIvUTb4-wXugj1oQ230Wy1p_pBi6VfZZ2rcxiT_w9fgUqIP_9q6aIH7VXiRB7pz9kYH1mOdqfu4jnhOzUj_6BZ7iYdl-r53mciAcP7y87kpJ1lW1ex6D__mC-B_Abibv_9ndegea6l9KdMON4Ei7TDx_aAXo7w_-DgBCQBcYnffiIYz2pLAgzJpdKQyO1XGciw45m-jKN4hC_GekiscFwq-m1m9d9jMAnHRGijs-WOwDdju6LN2lnpcyWXUPwiuy9tV9sSqCq41vDW8PtDhLupcSYNBzbibEkH-EHviyZ-ZyaobLS7nwpeNFKsujX5_7uLTVS-Eh9rPxx4oMs-fj47QM0iBmF52lo=w571-h469-no?authuser=0";

export const projects = [
  {
    id: 1,
    title: "Portifolio",
    img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Este website que você está navegando",
    url: "https://github.com/CooperLove/navbar",
    dataAos: "fade-down",
    delay: 500,
  },
  {
    id: 2,
    title: "Slider",
    img: "https://lh3.googleusercontent.com/MblRMwk2JJco6SfMZ7dQV2aCTresd6ukKeywSaBpU7FNg-V7gkPLkecjBgomJUMfP30MusZphjLBxbmqQOV8cjsb4KeX8vvyjZFqsiPJa0rTkXSXbzE2IxwLQ0bORT9CHzkK7o2WMTvv8aqzqG8IrUqzCL1F_2K9CeE84fKl6SQkMV02NM0HAjYuV5h7oI-4U3vSCqEEf0xl7rhmMUzDDF8QMeBlzIMGau0EY8f0l3EUVVggXSKl9hSbFZo_lj57EDYH7W7ORakDLEanrQuMlT7H5e-ExTkt1dcJP6hzG8vS-7m7L9eyPzzCJg_SskoTC5bNazfDWQPDNHKk7xALrxOGYGQqugfH1pLiUqHU3RrKP18WEAlSOg87wQxfYPrj19zhLwzF0EJhcbNGeJfAEvwOTRSxzzq6z1W-q2zIYrrpSIXzqPfs8_1tiO0pc88y3mDbfOXWtL3GkVTLzgPBPhPcB8wxzi-WJk8DvK_JFiz6mFzTCcBX580Aasd1yfYe2smYAB1JfrYvk0cSq9lvwJV8qoYs03E6UJ5_z2XHLlEbx-jPwDw7s7SewNtrvDqTo2odDOpS-WGj-ocjBRgKCzTaCMbU0XpnfaFbawQ6w4g5ZouCrFmkKMqjDVozBGUoU6ZbUqO9v6Kpd_rmxvBHhzQNVxi82KkMSWnbiPBjhVd2URAFmjhz5ylL_cHcMwYpP-HaQn1lMbMLQL_Qvh0HfrY=w1158-h804-no?authuser=0",
    desc: "Demonstração da utilização de um slider. O site mostra as avaliações ficticias, onde elas mudam a cada 3 segundos ",
    url: "https://github.com/CooperLove/slider",
    dataAos: "fade-down",
    delay: 500,
  },
  {
    id: 3,
    title: "Grocery Bud",
    img: "https://images.pexels.com/photos/9070106/pexels-photo-9070106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Um lista de compras, onde é possível adicionar, remover e atualizar os itens da lista.",
    url: "https://github.com/CooperLove/grocery-bud",
    dataAos: "fade-down",
    delay: 500,
  },
  {
    id: 4,
    title: "Accordion",
    img: "https://images.pexels.com/photos/208494/pexels-photo-208494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Site de Q&A.",
    url: "https://github.com/CooperLove/accordion",
    dataAos: "fade-up",
    delay: 500,
  },
  {
    id: 5,
    title: "Restaurant Menu",
    img: "https://images.pexels.com/photos/4551128/pexels-photo-4551128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Menu de um restaurante ficticio. Nele é possível ver a lista de itens a venda e filtrar por categoria.",
    url: "https://github.com/CooperLove/restaurant_menu",
    dataAos: "fade-up",
    delay: 500,
  },
  {
    id: 6,
    title: "Birthday Reminder",
    img: "https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Exibe todos os aniversariantes do dia atual.",
    url: "https://github.com/CooperLove/birthdayreminder",
    dataAos: "fade-up",
    delay: 500,
  },
];

// https://github.com/CooperLove/navbar
// https://github.com/CooperLove/slider
// https://github.com/CooperLove/grocery-bud
// https://github.com/CooperLove/accordion
// https://github.com/CooperLove/restaurant_menu
// https://github.com/CooperLove/birthdayreminder

export const technologiesIcon = [
  {
    id: 1,
    title: "JavaScript",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
    dataAos: "flip-left",
    delay: 500,
  },
  {
    id: 2,
    title: "React",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    dataAos: "flip-left",
    delay: 300,
  },
  {
    id: 3,
    title: "HTML 5",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    dataAos: "flip-down",
    delay: 0,
  },
  {
    id: 4,
    title: "CSS 3",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    dataAos: "flip-right",
    delay: 300,
  },
  {
    id: 5,
    title: "Node JS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
    dataAos: "flip-right",
    delay: 500,
  },
];

export function useWindowSize(elementId) {
  const [size, setSize] = useState([0, 0]);
  var elem;
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, elem.scrollHeight]);
      console.log(elem.scrollHeight);
    }
    window.addEventListener("resize", updateSize);
    elem = document.getElementById(elementId);
    console.log("data", elem);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
