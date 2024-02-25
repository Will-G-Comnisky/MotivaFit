import { Router } from "express";
import { AddressController } from "../app/controllers/AddressController";
import { verifyToken } from "../middlewares/auth";
import { checkAuthorization } from "../middlewares/permission";

const addressRoutes = (router: Router) => {
  router.post("/endereco", AddressController.createAddress);
  router.get("/endereco", verifyToken, AddressController.getAllAddresses);
  router.get("/endereco/:id", verifyToken, AddressController.getAddressById);
  router.put("/endereco/:id", verifyToken, AddressController.updateAddress);
  router.delete("/endereco/:id", verifyToken, AddressController.deleteAddress);
};

export default addressRoutes;