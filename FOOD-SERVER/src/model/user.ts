import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Нэрээ заавал оруулна уу"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "И-мэйл хаяг заавал оруулна уу"],
    },
    password: {
      type: String,
      required: [true, "Нууц үг заавал оруулна уу"],
      minlenght: 6,
      select: false,
    },
    avatarUrl: {
      type: String,
    },
    address: {
      khoroo: { type: String },
      duureg: { type: String },
      buildingNo: { type: Number },
    },
    role: {
      type: String,
      enum: ["Admin", "User", "Moderator"],
      default: "User",
    },
    otp: {
      type: String,
      default: "",
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    phone: String,
    orders: [
      {
        orderNo: String,
        payment: {
          paymentAmount: {
            type: Number,
            default: 0,
          },
          status: {
            type: String,
            enum: ["paid", "unpaid"],
            default: "unpaid",
          },
          paidDate: {
            type: Date,
            default: Date.now,
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
        },
        address: {
          khoroo: { type: String },
          duureg: { type: String },
          buildingNo: { type: String },
          info: String,
        },
        delivery: {
          status: {
            type: String,
            enum: ["Pending", "Progressing", "Delivered"],
            default: "Pending",
          },
          deliveredAt: {
            type: Date,
            default: Date.now,
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function async() {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

const User = model("User", userSchema);

export default User;
