module.exports = function(sequelize, DataTypes) {
    // Store Customer values for interaction with other models
    const FoodBank = sequelize.define("FoodBank", {
        bankName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // email force not null would be better, for login later
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Everything else "can" be null, but most won't
        phone: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        // Used cityName and stateName because state is used in react
        cityName: {
            type: DataTypes.STRING
        },
        stateAbr: {
            type: DataTypes.STRING
        },
        zipCode: {
            type: DataTypes.STRING
        },
        latitude: {
            type: DataTypes.DOUBLE(10,7)
        },
        longitude: {
            type: DataTypes.DOUBLE(10,7)
        },
        availability: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })
    
    FoodBank.associate = function(models) {
        // add associations here
        // Orders will only ever belong to a Customer or a FoodBanks and if either are deleted the order should be
        // FoodBank.hasOne(models.Order, {
        //     onDelete: "cascade"
        // });
        // FoodBank.hasOne(models.Pantry, {
        //     onDelete: "cascade"
        // });
    };
    
    return FoodBank;
}