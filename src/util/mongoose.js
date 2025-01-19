module.exports = {
    multipleMongooseToObject: function (mongoosesArrays){
        return mongoosesArrays.map(mongooseArray => mongooseArray.toObject());
    },
    mongooseToObject: function (mongooseObject){
        return mongooseObject ? mongooseObject.toObject() : mongoose;
    },
};
