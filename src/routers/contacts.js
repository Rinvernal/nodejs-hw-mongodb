import { Router } from "express";
import { createContactController, deleteContactController, getContactByIdController, getContactsController, patchContactController, upsertContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactSchema, updateContactSchema } from "../validation/contacts.js";
import { isValidId } from "../middlewares/isValidId.js";
import { checkRoles } from "../middlewares/checkRoles.js";
import { ROLES } from "../constants/index.js";

const router = Router();

router.get('/', checkRoles(ROLES.TEACHER), ctrlWrapper(getContactsController));
router.get('/:contactId', checkRoles(ROLES.TEACHER, ROLES.PARENT), isValidId, ctrlWrapper(getContactByIdController))
router.delete('/:contactId', checkRoles(ROLES.TEACHER), isValidId, ctrlWrapper(deleteContactController))
router.patch('/:contactId', checkRoles(ROLES.TEACHER, ROLES.PARENT), isValidId, validateBody(updateContactSchema), ctrlWrapper(patchContactController))
router.post(
  '/',
  checkRoles(ROLES.TEACHER),
  validateBody(createContactSchema),
  ctrlWrapper(createContactController)
)
router.put(
  '/:contactId',
  checkRoles(ROLES.TEACHER),
  isValidId,
  validateBody(createContactSchema),
  ctrlWrapper(upsertContactController)
)
export default router;