const router = require("express").Router();
const addProducts = require("./admin/addProducts");
const getProducts = require("./Products/getProducts");
const deleteProduct = require("./admin/deleteProduct");
const modifyProduct = require("./admin/modifyProduct");


const addFournniseur = require("./admin/addFournniseur");
const getFournniseur = require("./admin/getFournnisuer");
const deleteFournniseur = require("./admin/deleteFournniseur");
const modifyFournniseur = require("./admin/modifyFournniseur"); 

// Authentication
const { register, login, renewToken, logout } = require("./imports");
router.post("/register", register);
router.post("/login", login);
router.post("/renewtoken", renewToken);
router.get("/logoutSession", logout);

// Products Crud
router.post("/addProducts", addProducts);
router.get("/getProducts", getProducts);
router.delete("/deleteProduct/:productId", deleteProduct);
router.put("/modifyProduct/:productId", modifyProduct);

// Fornnisseur Crud
router.post("/addFournniseur", addFournniseur);
router.get("/getFournniseur", getFournniseur);
router.delete("/deleteFournniseur/:id", deleteFournniseur);
router.put("/modifyFournniseur/:id", modifyFournniseur)

module.exports = router;

;