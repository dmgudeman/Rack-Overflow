const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        title: {
            type: String

        },
        text: {
            type: String,
            required: true,
        },
        voteCount: {
            type: Number,
            default: 0,
        },
        tags: [
            {
                type: Schema.Types.ObjectId,
                ref: "Tag",
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Post", postSchema);
