import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    require: [true, "should add category name"],
    unique: true,
    maxlength: [50, "max appahbet is 50"],
  },
  description: {
    type: String,
    required: [true, "should add description"],
  },
  CaregoryUrl: {
    type: String,
    default: "no-category-photo",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Category = model("Category", categorySchema);

export default Category;
