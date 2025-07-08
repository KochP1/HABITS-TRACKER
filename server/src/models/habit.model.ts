import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";


interface HabitAttributes {
    id?: number
    user_id: number
    name: string
    color: string
    question: string
    frequency: string
    unit?: string
    target?: number
    target_type?:  string
    type: string
}

export class Habit extends Model<HabitAttributes> implements HabitAttributes {
    public id!: number;
    public user_id!: number
    public name!: string
    public color!: string
    public question!: string
    public frequency!: string
    public unit!: string
    public target!: number
    public target_type!:  string
    public type!: string
}

Habit.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
    frequency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: true
    },
    target: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    target_type: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.ENUM('yes or no', 'measurable'),
        allowNull: false
    }

},{
        sequelize,
        modelName: 'Habit',
        tableName: 'habits',
        timestamps: false,
    })
