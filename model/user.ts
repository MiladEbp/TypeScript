import {model,Schema} from 'mongoose';

let UserSchema:Schema = new Schema({url: String, text: String, id: Number,name:String,lastName:String},{collection:"milad"});

export let  UserModel = model("Users",UserSchema,"milad");
