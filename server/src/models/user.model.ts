import { DataTypes, Model } from "sequelize";
import sequelize from "config/db";

interface UserAttributes {
    id: number
    names: string
    last_names: string
    email: string
    password: string
}

class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public names!: string;
    public last_names!: string;
    public email!: string;
    public password!: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        names: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_names: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },   {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true,
    }
);

export default User