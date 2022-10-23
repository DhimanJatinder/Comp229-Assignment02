import { Router } from "express";

import { DisplayContactsList, DisplayContactsAddPage, ProcessContactsAddPage, DisplayContactsEditPage, ProcessContactsEditPage ,ProcessContactsDelete } from "../controllers/contact.controller.server.js";

const router = Router();
router.get('/contact-list', DisplayContactsList);
router.get('/contact-add', DisplayContactsAddPage);
router.post('/contact-add', ProcessContactsAddPage);
router.get('/contact-edit/:id', DisplayContactsEditPage );
router.post('/contact-edit/:id',ProcessContactsEditPage);
router.get('/contact-delete/:id', ProcessContactsDelete);

export default router ;