"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddressController_1 = require("../app/controllers/AddressController");
const auth_1 = require("../middlewares/auth");
//import { authorize } from "../middlewares/permission";
const addressRoutes = (router) => {
    router.post("/endereco", AddressController_1.AddressController.createAddress);
    router.get("/endereco", auth_1.verifyToken, AddressController_1.AddressController.getAllAddresses);
    router.get("/endereco/:id", auth_1.verifyToken, AddressController_1.AddressController.getAddressById);
    router.put("/endereco/:id", auth_1.verifyToken, AddressController_1.AddressController.updateAddress);
    router.delete("/endereco/:id", auth_1.verifyToken, AddressController_1.AddressController.deleteAddress);
};
exports.default = addressRoutes;
