export interface IUser {
    _id?:Number
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:"member"
    }
}