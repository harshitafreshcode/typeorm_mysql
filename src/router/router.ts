// import { ManyToMany } from "typeorm";
import auth from "../config/middleware/auth";
import { ManyToMany, ProjectToEmployeeM2M, craeteM2m, updateProjectToEmployeeM2M } from "../controller/Relation/M2MController";
import { createUser, getUsers } from "../controller/User/user";
import { createProduct, deleteProduct, getApi, getProduct, updateProduct } from "../controller/productController";
const Many2OneController = require('../controller/Relation/Many2OneController') 
const M2MController = require('../controller/Relation/M2MController')
const express = require("express")
const router = express.Router()
const V = require("../config/valiadtion/validation")


router.get('/users',getUsers)
router.post('/user',createUser)

router.post('/createEmp',Many2OneController.createEmp)
router.get('/manyToOne',Many2OneController.manyToOne)
router.get('/oneToMany',Many2OneController.oneToMany)


router.post('/craeteM2m',craeteM2m)
router.get('/ManyToMany',ManyToMany)
router.post('/ProjectToEmployeeM2M',ProjectToEmployeeM2M)
router.put('/updateProjectToEmployeeM2M',updateProjectToEmployeeM2M)



export default router