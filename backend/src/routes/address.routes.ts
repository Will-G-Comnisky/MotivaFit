import { Router } from "express";
import { AddressController } from "../app/controllers/AddressController";
import { verifyToken } from "../middlewares/auth";
import { authorize } from "../middlewares/permission";

const addressRoutes = (router: Router) => {
  router.post("/endereco", AddressController.createAddress);
  router.get("/endereco", verifyToken, authorize, AddressController.getAllAddresses);
  router.get("/endereco/:id", verifyToken, authorize, AddressController.getAddressById);
  router.put("/endereco/:id", verifyToken, authorize, AddressController.updateAddress);
  router.delete("/endereco/:id",  verifyToken, authorize, AddressController.deleteAddress);
};

export default addressRoutes;