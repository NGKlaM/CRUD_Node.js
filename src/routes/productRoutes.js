import express from "express";
import {
    create,getAll, getOne, remove, update,
} from "../controllers/productController";
const routerProducts = express.Router();

routerProducts.post("/", create);
routerProducts.get("/", getAll);
routerProducts.get("/:id", getOne);
routerProducts.put("/:id", update);
routerProducts.delete("/:id", remove);

// Add other CRUD routes as needed

export default routerProducts;
