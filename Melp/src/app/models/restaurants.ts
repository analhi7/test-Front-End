export class Restaurants{
    constructor(
     public _id :string,
     public rating :String,
     public name:Number,
     public contact: {
      site: String,
      email:String,
      phone:String,
     },
     public address: {
        street: String,
        city:String,
        state:String,
        location: {
         lat:String,
         lng:String
        }
       },
     
     
    ){}
}