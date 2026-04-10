const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    totalStreak: {
        type: Number,
        default: 0
    },
    currentStreak: {
        type: Number,
        default: 0
    },
    bestStreak: {
        type: Number,
        default: 0
    },
    completedDates: {
        type: [Date],
        default: []
    }
});

module.exports = mongoose.model("Activity", activitySchema);