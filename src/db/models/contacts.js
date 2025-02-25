import { model, Schema } from "mongoose";

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true
    },
    isFavourite: {
      type: Boolean,
      default: false
    },
    contactType: {
      type: String,
      enum: ["work", "home", "personal"],
      require: true,
      default: "personal"
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    photo: { type: String },
  },
    {
      timestamps: true,
      versionKey: false
    }
);

export const Contact = model('Contact', contactsSchema);