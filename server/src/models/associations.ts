import { Habit } from "./habit.model";
import { Tracking } from "./tracking.model";

export function setupAssociations() {

    Habit.hasMany(Tracking, {
        foreignKey: 'habits_id',
    });


    Tracking.belongsTo(Habit, {
        foreignKey: 'habits_id',
    });
}