import { Resistor } from "./modules/draw/components/Resistor";
import {
  Section,
  Lecture,
  BlogDetail,
  Blog,
  Login,
  Register,
  Profile,
  Home,
  NotFound
} from "./modules";

export const PATHS = [
  {
    path: "/section/:sectionId",
    exact: true,
    component: Section,
    header: true
  },
  {
    path: "/lecture/:lectureId",
    exact: true,
    component: Lecture,
    header: true
  },
  {
    path: "/blog/:postId",
    exact: true,
    component: BlogDetail,
    header: true
  },
  {
    path: "/blog",
    exact: true,
    component: Blog,
    header: true
  },
  {
    path: "/login",
    exact: true,
    component: Login,
    header: false
  },
  {
    path: "/register",
    exact: true,
    component: Register,
    header: false
  },
  {
    path: "/profile",
    exact: true,
    component: Profile,
    header: true
  },
  {
    path: "/",
    exact: true,
    component: Home,
    header: true
  }
];

export const BASE_URL = "http://localhost:4040/";

export const ELEMENTS: { [k: string]: any } = {
  resistor: Resistor
};
