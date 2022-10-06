const express = require("express");
const router = require("./users");

router.get("/test", (req,res) => res.json({mes: "This is the ingredients route."}))