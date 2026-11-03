import type { Project } from "@/data/projects";
import { cloudinaryOriginalImageUrl } from "./cloudinary";
import { getImageUrl } from "./getImageUrl";

type ProjectCover = Pick<Project, "cover" | "coverDelivery">;

export function getProjectCoverImageProps(project: ProjectCover, width: number) {
  if (project.coverDelivery !== "high-quality") {
    return { src: getImageUrl(project.cover, width) };
  }

  // Let Next optimize the original once instead of recompressing a Cloudinary derivative.
  const src = project.cover.startsWith("http") || project.cover.startsWith("/Photos")
    ? project.cover
    : cloudinaryOriginalImageUrl(project.cover);

  return { src, quality: 90 };
}
