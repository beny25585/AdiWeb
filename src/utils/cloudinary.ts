const CLOUD_NAME = "ddncjeozb";
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/**
 * בונה URL של Cloudinary עם הגדרות שמבטיחות חדות.
 *
 * @param publicId מזהה קובץ ב‑Cloudinary (חובה)
 * @param width    רוחב מקסימלי בפיקסלים – ברירת מחדל 2400
 * @param dpr      device‑pixel‑ratio – "auto" (ברירת מחדל) או מספר (2,3 …)
 * @returns        URL של התמונה המותאמת
 */
export const cloudinaryUrl = (
  publicId: string,
  width: number = 2400,
  dpr: string = "auto"
): string => {
  if (!publicId) {
    throw new Error("cloudinaryUrl: publicId is required");
  }

  const validWidth = width > 0 ? width : 2400;

  // dpr_auto או dpr_2, dpr_3 וכו׳
  const dprPart = dpr === "auto" ? "dpr_auto" : `dpr_${dpr}`;

  const transformation = [
    `w_${validWidth}`,
    dprPart,
    "c_fill",
    "q_auto",
    "f_auto",
    "fl_progressive",
  ].join(",");

  const path = `${transformation}/${publicId}`;
  return `${BASE_URL}/${path}`;
};
