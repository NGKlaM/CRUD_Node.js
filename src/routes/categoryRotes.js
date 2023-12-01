import express from "express";
import 
{create, getAll, getOne, getOneByName, getOneBySlug, remove, update }
from "../controllers/categoryController";
// import { checkIsAdmin } from "../middlewares/checkisAdmin";
import { checkRequestBodyCategory } from "../middlewares/checkRequestBody";

const routerCategory = express.Router();

routerCategory.post("/", checkRequestBodyCategory,create);
routerCategory.get("/", getAll);
routerCategory.get("/:id", getOne);
routerCategory.put("/:id",checkRequestBodyCategory, update);
routerCategory.delete("/:id", remove);
routerCategory.get("/name/:name",getOneByName);
routerCategory.get("/slug/:slug",getOneBySlug);

export default routerCategory