const mongoose=require("mongoose");

const host ="localhost";
const port ="27017";
const db= "Villaplast";


// const host ="usuario_so";
// const port ="12345";
// const db= "villaplast.rutxqo3.mongodb.net/?retryWrites=true&w=majority";


// mongodb+srv://usuario_so:<password>@villaplast.rutxqo3.mongodb.net/?retryWrites=true&w=majority
exports.mongoConnect=()=>{
    // const mongoStringConnection=`mongodb://${host}:${port}@${db}`;
    const mongoStringConnection="mongodb+srv://santiago_0:12345@villa.yb49rxn.mongodb.net/test?retryWrites=true&w=majority"
    // const mongoStringConnection=`mongodb+srv://${host}:${port}/${db}`;

    mongoose.connect(mongoStringConnection);
    mongoose.Promise=global.Promise;
    const dbConnection=mongoose.connection;
    dbConnection.on("error",console.error.bind(console,"Mongo connection error"));

}