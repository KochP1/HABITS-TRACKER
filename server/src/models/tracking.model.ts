import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

interface TrackerAttributes {
    id?: number
    habits_id: number
    date: string
    done: string
}

export class Tracking extends Model<TrackerAttributes> implements TrackerAttributes {
    public id!: number;
    public habits_id!: number;
    public date!: string;
    public done!: string
}

Tracking.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    habits_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: DataTypes.ENUM('yes', 'no'),
        allowNull: false,
        defaultValue: 'no'
    }
}, {
        sequelize,
        modelName: 'Tracking',
        tableName: 'tracking',
        timestamps: false,
    }
);