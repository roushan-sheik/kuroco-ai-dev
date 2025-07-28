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
    route("/create-new-project", "routes/_layout/CreateNewProject.tsx"),
    route(
      "/create-new-project/team-selection",
      "routes/_layout/TeamSelection.tsx"
    ),
  ]),
] satisfies RouteConfig;
