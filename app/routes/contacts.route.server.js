import { Router } from "express";

import { DisplayContactsList, DisplayContactsAddPage, ProcessContactsAddPage, DisplayContactsEditPage, ProcessContactsEditPage ,ProcessContactsDelete } from "../controllers/contact.controller.server.js";
import { AuthGaurd } from "../utils/index.js";

const router = Router();
router.get('/contact-list', DisplayContactsList);
router.get('/contact-add' , AuthGaurd, DisplayContactsAddPage);
router.post('/contact-add', AuthGaurd, ProcessContactsAddPage);
router.get('/contact-edit/:id', AuthGaurd, DisplayContactsEditPage );
router.post('/contact-edit/:id', AuthGaurd, ProcessContactsEditPage);
router.get('/contact-delete/:id', AuthGaurd, ProcessContactsDelete);

export default router ;