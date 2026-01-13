// src/utils/getImageUrl.ts
import { cloudinaryUrl } from "./cloudinary";

export function getImageUrl(src: string, width?: number) {
  if (src.startsWith("http")) return src;

  if (src.startsWith("/Photos")) return src;

  // otherwise – Cloudinary publicId
  return cloudinaryUrl(src, width);
}
