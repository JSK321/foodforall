const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
    // Store Customer values for interaction with other models
    const Order = sequelize.define("Order", {
        orderTime: {
            type: DataTypes.DATE,
            allowNull: false,
            get() {
                return moment(this.getDataValue('createdAt')).format('lll');
            }
        },
        received: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        orderUpdatedAt:{
            type: DataTypes.DATE,
            allowNull: false,
            get() {
                return moment(this.getDataValue('updatedAt')).format('lll');
            }
        }
    })
    Order.associate = function(models) {
        // add associations here
        Order.belongsTo(models.User);
        Order.belongsTo(models.FoodBank);
        // Orders will only ever belong to a User or a Orders and if either are deleted the order should be
        Order.hasMany(models.OrderItem, {
            onDelete: "cascade"
        });
    };
    

    return Order;
}