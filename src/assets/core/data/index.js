import stay1 from "../../../assets/images/stay-conn1.png";
import stay2 from "../../../assets/images/stay-conn2.jpeg";
import stay3 from "../../../assets/images/stay-conn3.jpeg";
import stay4 from "../../../assets/images/stay-conn4.jpeg";
import stay5 from "../../../assets/images/stay-conn5.jpeg";
import whats1 from "../../../assets/icons/whats1.svg";
import whats2 from "../../../assets/icons/whats2.png";
import whats3 from "../../../assets/icons/whats3.png";
import news1 from "../../../assets/images/news1.png";
import news2 from "../../../assets/images/news2.png";
import news3 from "../../../assets/images/news3.png";
import news4 from "../../../assets/images/news4.png";
import call from "../../../assets/icons/call.png";
import snap from "../../../assets/icons/snap.png";
import fb from "../../../assets/icons/fb.png";
import insta from "../../../assets/icons/insta.png";
import whatsapp from "../../../assets/icons/whatsapp.png";
import mail from "../../../assets/icons/mail.png";
import underline from "../../../assets/images/underline.png";
import HomeActive from "../../icons/Home_active.png";
import HomeInactive from "../../icons/Home_inactive.png";
import ConnectionsActive from "../../icons/Followers_active.png";
import ConnectionsInActive from "../../icons/Followers_inactive.png";
import CommunitiesActive from "../../icons/Community_active.png";
import CommunitiesInActive from "../../icons/Community_inactive.png";
import MarketPlaceActive from "../../icons/Marketplace_active.png";
import MarketPlaceInActive from "../../icons/Marketplace_inactive.png";
import EventsActive from "../../icons/Events_active.png";
import EventsInActive from "../../icons/Events_inactive.png";
import ResourceCenterActive from "../../icons/Resource_center_active.png";
import ResourceCenterInActive from "../../icons/Resource_center_inactive.png";
import BusinessDirectoryActive from "../../icons/Business_Directory_active.png";
import BusinessDirectoryInActive from "../../icons/Business_Directory_inactive.png";


export const links = [
  {
    label: "Community",
    href: "/community",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Business",
    href: "/business",
  },
];

export const imgs = { underline: underline };

export const footerIcons = [
  {
    icon: call,
    href: "#",
  },
  {
    icon: snap,
    href: "#",
  },
  {
    icon: fb,
    href: "#",
  },
  {
    icon: insta,
    href: "#",
  },
  {
    icon: whatsapp,
    href: "#",
  },
  {
    icon: mail,
    href: "#",
  },
];
export const navLinks = [
  {
    label: "Community",
    href: "/community",
  },
  {
    label: "Exports",
    href: "/exports",
  },
  {
    label: "Diaspora",
    href: "/diaspora",
  },
  {
    label: "News & Trends",
    href: "/news-and-trends",
  },
];

export const rightLinks = [
  {
    label: "Sign in",
    href: "/login",
  },
  {
    label: "Sign up",
    href: "/signup",
    className: "border-[1px] rounded-full  px-6 py-2",
  },
];

export const pilesItems = [
  {
    label: "Logo Design",
    href: "/logo-design",
  },
  {
    label: "Mobile App",
    href: "/mobile-app",
  },
  {
    label: "Website Development",
    href: "/website-development",
  },
  {
    label: "3D Design",
    href: "/3d-design",
    span: "pl-20",
  },
  {
    label: "Digital Marketing",
    href: "/digital-marketing",
    span: "pl-20",
  },
];

export const stayConn = [
  {
    label: "Tourist Group",
    href: "#",
    img: stay1,
    desc: "Description",

    imgW: "w-32",
    imgH: "h-32",
  },
  {
    label: "Ghanaian Resorts",
    href: "#",
    img: stay2,
    desc: "Description",

    imgW: "w-44",
    imgH: "h-44",
  },
  {
    label: "Marketplace",
    href: "#",
    img: stay3,
    desc: "Description",

    imgW: "w-52",
    imgH: "h-52",
  },
  {
    label: "First Name",
    href: "#",
    img: stay4,
    desc: "Description",
    zIndex: " z-40",
    imgW: "w-44",
    imgH: "h-44",
  },
  {
    label: "Second Name",
    href: "#",
    img: stay5,
    desc: "Description",
    zIndex: " z-30",
    imgW: "w-32",
    imgH: "h-32",
  },
];

export const whatCanDo = [
  {
    title: "Logo Design",
    passage:
      "Access to News we help victims of natural disasters and the poor to help them to be happier with us",
    icon: whats1,
    iconBgColor: "bg-[#E2D57C]",
    bgColor: "bg-black text-white",
  },
  {
    title: "Business Ads",
    passage:
      "Access to News we help victims of natural disasters and the poor to help them to be happier with us",
    icon: whats2,
    iconBgColor: "bg-[#E2E8F4]",
  },
  {
    title: "Share Greatness",
    passage:
      "Access to News we help victims of natural disasters and the poor to help them to be happier with us",
    icon: whats3,
    iconBgColor: "bg-[#E2E8F4]",
  },
];

export const newsItems = [
  {
    img: news1,
    date: "11/09/2022",
    title: "GH Healthcare offers schools guidance on monkeypox",
    desc: "According to GHC, schools do not  need to take extra precaution on  monkey pox spread nationwide.",
  },
  {
    img: news2,
    date: "11/09/2022",
    title: "COVID-19 cases to subside by 30% in 2023",
    desc: "A stunning turn in everyday healthy living sees a drastic decline in cases. Health experts speculate that by mid year 2023, COVID will become obsolete.",
  },
  {
    img: news3,
    date: "11/09/2022",
    title: "How can we increase our life span?",
    desc: "A dose of health recipes from our experts to increase life span of individuals by at most 15 years",
  },
  {
    img: news4,
    date: "11/09/2022",
    title: "MHC yet again is organising GH Myhealth Marathon 2023",
    desc: "After the previous years thriller, MyhealthCop has brought out intentions of another marathon in the upcoming year.",
  },
];

export const countryCode = [
  { value: "+233", label: "+233" },
  { value: "+234", label: "+234" },
  { value: "+235", label: "+235" },
];
export const sidemenuIcons = [
  // {
  //   route: "",
  //   activeIcon: HomeActive,
  //   inactiveIcon: HomeInactive,
  //   label: "Home",
  // },
  {
    route: "/connections",
    activeIcon: ConnectionsActive,
    inactiveIcon: ConnectionsInActive,
    label: "Connections",
  },
  {
    route: "/communites",
    activeIcon: CommunitiesActive,
    inactiveIcon: CommunitiesInActive,
    label: "Communites",
  },
  {
    route: "/marketplace",
    activeIcon: MarketPlaceActive,
    inactiveIcon: MarketPlaceInActive,
    label: "Marketplace",
  },
  {
    route: "/events",
    activeIcon: EventsActive,
    inactiveIcon: EventsInActive,
    label: "Events",
  },
  {
    route: "/resource-center",
    activeIcon: ResourceCenterActive,
    inactiveIcon: ResourceCenterInActive,
    label: "Resource Center",
  },
  {
    route: "/business-directory",
    activeIcon: BusinessDirectoryActive,
    inactiveIcon: BusinessDirectoryInActive,
    label: "Business Directory",
  },
];
