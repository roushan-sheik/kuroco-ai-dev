import {
  layout,
  route,
  index,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  route("login", "routes/login.tsx"),
  route("register", "routes/register.tsx"),

  layout("components/layout/MainLayout.tsx", [
    index("routes/_layout/index.tsx"),
    route("projects", "routes/_layout/Projects.tsx"),
    route("blogs", "routes/_layout/Blogs.tsx"),
  ]),
] satisfies RouteConfig;
