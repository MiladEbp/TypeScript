"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({ url: String, text: String, id: Number, name: String, lastName: String }, { collection: "milad" });
exports.UserModel = mongoose_1.model("Users", UserSchema, "milad");
