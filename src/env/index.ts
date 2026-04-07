export const baseUrl = "http://localhost:3000";
// process.env.NODE_ENV === "production"
//   ? (process.env.NEXT_PUBLIC_BASE_URL as string)
// : "http://localhost:3000";

export const MONGO_URL = process.env.MONGO_URL as string;
export const cloudName = process.env
  .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string;
export const cloudinaryImageUrl = process.env.CLOUDINARY_URL as string;

export const mail = {
  host: process.env.EMAIL_HOST as string,
  port: process.env.EMAIL_PORT as string,
  auth: {
    user: process.env.EMAIL_USER as string,
    pass: process.env.EMAIL_PASS as string,
  },
};
