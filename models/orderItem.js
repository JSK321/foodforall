module.exports = function(sequelize, DataTypes) {
    // Store Customer values for interaction with other models
    const OrderItem = sequelize.define("OrderItem", {
        order: {
            type: DataTypes.STRING,
            allowNull: false
        },
        orderAmount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })
    OrderItem.associate = function(models) {
        // add associations here
        OrderItem.belongsTo(models.Order);
        OrderItem.belongsTo(models.Pantry);
    };
    

    return OrderItem;
}