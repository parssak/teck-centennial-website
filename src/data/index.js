import { getRoutes, getNavigation } from "@/data/utils";

export const SITE_PATH = "teck-centennial-website";

const MASTER_ROUTES = [
  {
    path: "/",
    label: "home",
    component: () => import("@/views/"),
    hidden: false,
  },
  {
    path: "/about",
    label: "about",
    hidden: false,
    fake: true,
  },
  {
    path: "/about/overview",
    label: "overview",
    component: () => import("@/views/about"),
    hidden: false,
  },
  {
    path: "/about/policies",
    label: "policies",
    component: () => import("@/views/about/policies"),
    hidden: false,
  },
  {
    path: "/about/staff",
    label: "staff & board",
    component: () => import("@/views/about/staff"),
    hidden: false,
  },
  {
    path: "/about/donations",
    label: "donations",
    component: () => import("@/views/about/donations"),
    hidden: false,
  },
  {
    path: "/services",
    label: "services",
    fake: true,
    hidden: false,
  },
  {
    path: "/services/eresources",
    label: "eResources",
    component: () => import("@/views/services/"),
    hidden: false,
  },
  {
    path: "/services/library-card",
    label: "library card",
    component: () => import("@/views/services/library-card"),
    hidden: false,
  },
  {
    path: "/programs",
    label: "children's programs",
    fake: true,
    hidden: false,
  },
  {
    path: "/programs/after-school",
    label: "after school program",
    component: () => import("@/views/programs/after-school"),
    hidden: false,
  },
  {
    path: "/programs/tdsrc",
    label: "TDSRC information",
    component: () => import("@/views/programs/tdsrc"),
    hidden: false,
  },
  {
    path: "/programs/sponsors",
    label: "sponsors",
    component: () => import("@/views/programs/sponsors"),
    hidden: false,
  },
  {
    path: "/announcements",
    label: "announcements",
    component: () => import("@/views/announcements"),
    hidden: false,
  },
  {
    path: "/announcements/:id",
    label: "announcements/id",
    component: () => import("@/views/announcements/id"),
    hidden: true,
  },
  {
    path: "/contact",
    label: "contact",
    component: () => import("@/views/contact"),
    hidden: false,
  },
];

export const routes = getRoutes(MASTER_ROUTES);

export const navigation = getNavigation(MASTER_ROUTES);

export const announcements = [
  {
    id: "1",
  },
];

export const hours = [
  {
    day: "Sunday",
    hours: "Closed",
  },
  {
    day: "Monday",
    hours: "Closed",
  },
  {
    day: "Tuesday",
    hours: "9:00am - 6:00pm",
  },
  {
    day: "Wednesday",
    hours: "9:00am - 7:00pm",
  },
  {
    day: "Thursday",
    hours: "9:00am - 6:00pm",
  },
  {
    day: "Friday",
    hours: "9:00am - 6:00pm",
  },
  {
    day: "Saturday",
    hours: "9:00am - 2:00pm",
  },
];