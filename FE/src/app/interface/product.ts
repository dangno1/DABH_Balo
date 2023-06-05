export interface IProduct {
    _id?:Number,
    name:String | null | undefined,
    price:Number | null | undefined,
    description:String
    category:String
    img?:String
}