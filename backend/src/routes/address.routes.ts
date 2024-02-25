import { Router } from "express";
import { AddressController } from "../app/controllers/AddressController";
import { verifyToken } from "../middlewares/auth";
import { checkAuthorization } from "../middlewares/permission";

const addressRoutes = (router: Router) => {
  router.post("/endereco", checkAuthorization(true), AddressController.createAddress);
  router.get("/endereco", checkAuthorization(true), verifyToken, AddressController.getAllAddresses);
  router.get("/endereco/:id", checkAuthorization(true), verifyToken, AddressController.getAddressById);
  router.put("/endereco/:id", checkAuthorization(true), verifyToken, AddressController.updateAddress);
  router.delete("/endereco/:id", checkAuthorization(true), verifyToken, AddressController.deleteAddress);
};

export default addressRoutes;