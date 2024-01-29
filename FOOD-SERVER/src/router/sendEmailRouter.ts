import { Router } from "express";
import { sendEmailToUser } from "../controller/sendEmailController";

const router = Router();

router.route("/sendemail").post(sendEmailToUser);

export default router;
