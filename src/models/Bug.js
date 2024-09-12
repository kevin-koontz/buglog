import { Schema } from "mongoose";

export const BugsSchema = new Schema({


},
  timestamps: true, toJSON: { virtuals: true })