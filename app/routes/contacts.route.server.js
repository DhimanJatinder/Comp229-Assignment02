import { Router } from "express";

import { DisplayContactsAddPage, DisplayContactsList } from "../controllers/contact.controller.server.js";

const router = Router();
router.get('/contact-list', DisplayContactsList);
router.get('/contact-add', DisplayContactsAddPage);

export default router ;