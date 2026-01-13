const CLOUD_NAME = "ddncjeozb";
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export const cloudinaryUrl = (publicId: string, width?: number): string => {
  if (!publicId) throw new Error("cloudinaryUrl: publicId is required");

  const path = width ? `w_${width},q_auto,f_auto/${publicId}` : publicId;

  return `${BASE_URL}/${path}`;
};
