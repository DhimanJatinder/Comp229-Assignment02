//Index Routes
import { Router } from "express";
import {
  displayHomePage,
  displayAboutPage,
  displayProjectsPage,
  displayServicesPage,
  displayContactPage,
} from "../controllers/index.controller.server.js";

// Instanciating Router
const router = Router();

// add middleware to connect app
router.get("/", displayHomePage);
router.get("/home", displayHomePage);
router.get("/about", displayAboutPage);
router.get("/projects", displayProjectsPage);
router.get("/services", displayServicesPage);
router.get("/contact", displayContactPage);

export default router;
