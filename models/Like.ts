import mongoose, { Schema, model, models } from "mongoose";

export interface ILike {
  _id?: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  video: mongoose.Types.ObjectId;
  createdAt?: Date;
}

const likeSchema = new Schema<ILike>(
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
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

//prevents a user from liking the same video multiple times
likeSchema.index({ user: 1, video: 1 }, { unique: true });

const Like = models?.Like || model<ILike>("Like", likeSchema);

export default Like;
