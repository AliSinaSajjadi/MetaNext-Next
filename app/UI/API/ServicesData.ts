import calcGreen from "/Swiper1/calcGreen.png";
import ManagmentG from "/Swiper1/managmentGray.png";
import ManagmentC from "/Swiper1/managmentC.png";
import ChatGray from "/Swiper1/ChatGray.svg";
import CRMS from "/Swiper1/CRMC.png";
import MobileG from "/Swiper1/mobile.png";
import MobileC from "/Swiper1/mobileC.png";
import Explore from "/Swiper1/explore.png";
import ExploreC from "/Swiper1/global-searchC.png";

interface Service {
  text: string;
  image1: string;
  image2: string;
}

const ServicesData: Service[] = [
  {
    text: "حسابداری آنلاین",
    image1: "/Swiper1/calcGreen.png",
    image2: "/Swiper1/calcGreen.png",
  },
  {
    text: "مدیریت نیروی کار",
    image1: "/Swiper1/managmentGray.png",
    image2: "/Swiper1/managmentC.png",
  },
  {
    text: "گفتوگو با مشتریان",
    image1: "/Swiper1/ChatGray.svg",
    image2: "/Swiper1/CRMC.png",
  },
  {
    text: "اپلیکیشن فروش",
    image1: "/Swiper1/mobile.png",
    image2:  "/Swiper1/mobileC.png",
  },
  {
    text: "سایت فروش",
    image1:  "/Swiper1/explore.png",
    image2: "/Swiper1/global-searchC.png",
  },
];

export default ServicesData;
