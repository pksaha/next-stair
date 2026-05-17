import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

/**
 * Upload a base64 image string to Cloudinary.
 * Returns the secure HTTPS URL of the stored image.
 */
export async function uploadBase64ToCloudinary(
  base64: string,
  folder: string = "next-stair/generations"
): Promise<string> {
  const dataUri = `data:image/png;base64,${base64}`

  const result = await cloudinary.uploader.upload(dataUri, {
    folder,
    resource_type: "image",
    format: "webp",        // convert to webp for smaller files
    quality: "auto:good",  // Cloudinary auto-optimises
  })

  return result.secure_url
}

export { cloudinary }
