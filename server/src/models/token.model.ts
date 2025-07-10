import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

interface TokenAttributes {
    id?: number
    token: string
    expires_at: string
    user_id?: number
}

export class Token extends Model<TokenAttributes> implements TokenAttributes {
    public id!: number;
    public token!: string;
    public expires_at!: string;
    public user_id!: number;
}

Token.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        token: {
            type: DataTypes.STRING,
            allowNull: false
        },

        expires_at: {
            type: DataTypes.DATE,
            allowNull: false
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
}, {
        sequelize,
        modelName: 'Token',
        tableName: 'blacklisted_tokens',
        timestamps: false,
    });