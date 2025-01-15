import type { RouteConfig } from "@react-router/dev/routes";

import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("contacts/:contactId", "routes/contact.tsx"),
  route("contacts/:contactId/edit", "routes/editContact.tsx"),
] satisfies RouteConfig;
