// src/utils/cloudinaryUrl.ts

type CloudinaryParams = {
  width?: number;
};

/**
 *
 * @param publicId
 * @param opts
 * @returns
 */
export const cloudinaryUrl = (
  publicId: string,
  { width }: CloudinaryParams = {}
): string => {
  const cloudName = "ddncjeozb";
  const base = `https://res.cloudinary.com/${cloudName}/image/upload`;

  const w = width && width > 0 ? width : 800;

  const transforms = `w_${w},q_auto,f_auto`;

  if (!publicId) {
    throw new Error("cloudinaryUrl: publicId is required");
  }

  return `${base}/${transforms}/${publicId}`;
};
