import { Router } from "express";

import { DisplayContactList } from "../controllers/contact.controller.server.js";

const router = Router();
router.get('/contact-list', DisplayContactList);

export default router ;