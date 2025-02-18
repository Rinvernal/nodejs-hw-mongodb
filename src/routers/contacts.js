import { Router } from "express";
import { createContactController, deleteContactController, getContactByIdController, getContactsController, patchContactController, upsertContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactSchema, updateContactShema } from "../validation/contacts.js";
import { isValidId } from "../middlewares/isValidId.js";

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController))
router.post('/contacts', ctrlWrapper(createContactController))
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController))
router.put('/contacts/:contactId', ctrlWrapper(upsertContactController))
router.patch('/contacts/:contactId', ctrlWrapper(patchContactController))
router.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController)
)
router.put(
  '/contacts/:contactId',
  validateBody(updateContactShema),
  ctrlWrapper(patchContactController)
)

router.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController)
)
export default router;