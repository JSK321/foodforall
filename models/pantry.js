module.exports = function(sequelize, DataTypes) {
    // Store Pantry values for interaction with other models
    const Pantry = sequelize.define("Pantry", {
        itemName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        itemAmount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        unitType: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    Pantry.associate = function(models) {
        // add associations here
        // Orders will only ever belong to a Pantry or a FoodBank and if either are deleted the order should be
        Pantry.hasMany(models.OrderItem, {
            onDelete: "cascade"
        });
    };
    
    return Pantry;
}