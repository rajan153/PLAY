import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  API_SECRET: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (localFilePath) return null;

    // upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // File upload successfully
    console.log("File Uploaded to Cloudinary!!", response.url);
    return response;
  } catch (error) {
    // For removing locally saved temp file when upload operation failed
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export {uploadOnCloudinary}
