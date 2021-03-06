const bcrypt = require("bcrypt")
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
    // Store user values for interaction with other models
    const User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // email force not null would be better, for login later
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            required: true,
            validate: {
                len: [8]
            }
        },
        // Everything else "can" be null
        phone: {
            type: DataTypes.STRING
        },
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            get() {
                return moment(this.getDataValue('createdAt')).format('lll');
            }
        },
    })
    User.associate = function (models) {
        // add associations here
        // Orders will only ever belong to a Customer or a FoodBank and if either are deleted the order should be
        User.hasMany(models.Order, {
            onDelete: "cascade"
        });
    };

    User.beforeCreate(function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    })

    return User;
}
