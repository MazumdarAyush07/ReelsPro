import mongoose, { Schema, model, models } from "mongoose";

export interface IComment {
  _id?: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  video: mongoose.Types.ObjectId;
  content: string;
  createdAt?: Date;
}

const commentSchema = new Schema<IComment>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 500,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

commentSchema.index({ video: 1, createdAt: -1 });

const Comment = models?.Comment || model<IComment>("Comment", commentSchema);

export default Comment;
