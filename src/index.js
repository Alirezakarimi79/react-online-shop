import React from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import App from "./containers/App";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);
