import express from "express";
import 
{create, getAll, getOne, remove, update }
from "../controllers/categoryController";

const routerCategory = express.Router();

routerCategory.post("/", create);
routerCategory.get("/", getAll);
routerCategory.get("/:id", getOne);
routerCategory.put("/:id", update);
routerCategory.delete("/:id", remove);

export default routerCategory