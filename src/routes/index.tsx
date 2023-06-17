import { Routes as ReactRouterDomRoutes, Route } from "react-router-dom";

import { Home, Player } from "pages";

export function Routes() {
  return (
    <ReactRouterDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/watch/:id" element={<Player />} />
    </ReactRouterDomRoutes>
  );
}
