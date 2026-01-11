export type ProjectKey =
  | "winery"
  | "heritageResidence"
  | "frederOscar"
  | "suite"
  | "kitchen"
  | "office"
  | "electricCabin"
  | "communicationsRoom";

export type Project = {
  slug: ProjectKey;
  title: string;
  cover: string;
  images: string[];
};

export const projectsMap: Record<ProjectKey, Project> = {
  winery: {
    slug: "winery",
    title: "Winery",
    cover: "/Photos/Winery/1_1 - Exterior_Dawn.jpg",
    images: [
      "/Photos/Winery/1_1 - Exterior_Dawn.jpg",
      "/Photos/Winery/1_2 - Interior_tasting_room.jpg",
      "/Photos/Winery/1_3 - Exterior_dawn_drone_shot.jpg",
      "/Photos/Winery/1_4-Winery_entrance.jpg",
      "/Photos/Winery/1_5-Winery_entrance.jpg",
    ],
  },

  heritageResidence: {
    slug: "heritageResidence",
    title: "The Heritage Residence",
    cover: "/Photos/TheHeritageResidence/vila1.png",
    images: [
      "/Photos/TheHeritageResidence/vila1.png",
      "/Photos/TheHeritageResidence/vila2.png",
      "/Photos/TheHeritageResidence/vila3.png",
      "/Photos/TheHeritageResidence/vila4.png",
      "/Photos/TheHeritageResidence/vila5.png",
      "/Photos/TheHeritageResidence/vila6.png",
      "/Photos/TheHeritageResidence/vila7.png",
      "/Photos/TheHeritageResidence/vila8.png",
    ],
  },

  frederOscar: {
    slug: "frederOscar",
    title: "FREDER OSCAR",
    cover: "/Photos/F-RENDER-OSCAR/F- RENDER OSCAR_Photo - 1.jpg",
    images: [
      "/Photos/F-RENDER-OSCAR/F- RENDER OSCAR_Photo - 1.jpg",
      "/Photos/F-RENDER-OSCAR/F- RENDER OSCAR_Photo - 2.jpg",
      "/Photos/F-RENDER-OSCAR/F- RENDER OSCAR_Photo - 3.jpg",
      "/Photos/F-RENDER-OSCAR/F- RENDER OSCAR_Photo - 4.jpg",
      "/Photos/F-RENDER-OSCAR/F- RENDER OSCAR_Photo - 5.jpg",
      "/Photos/F-RENDER-OSCAR/F- RENDER OSCAR_Photo - 6.jpg",
      "/Photos/F-RENDER-OSCAR/F- RENDER OSCAR_Photo - 7.jpg",
      "/Photos/F-RENDER-OSCAR/F- RENDER OSCAR_Photo - 8.jpg",
      "/Photos/F-RENDER-OSCAR/F- RENDER OSCAR_Photo - 9.jpg",
      "/Photos/F-RENDER-OSCAR/F- RENDER OSCAR_Photo - 10.jpg",
    ],
  },

  suite: {
    slug: "suite",
    title: "Luxury Suite",
    cover: "/Photos/Suite/suite1.jpg",
    images: [
      "/Photos/Suite/courtyard1.png",
      "/Photos/Suite/courtyard2.png",
      "/Photos/Suite/lobby.png",
      "/Photos/Suite/suite1.jpg",
      "/Photos/Suite/suite2.png",
      "/Photos/Suite/suite3.png",
    ],
  },

  kitchen: {
    slug: "kitchen",
    title: "Modern Kitchen Renovation",
    cover: "/Photos/kichen/kichen-after1.jpg",
    images: [
      "/Photos/kichen/kichen-before1.jpg",
      "/Photos/kichen/kichen-before2.jpg",
      "/Photos/kichen/kichen-before3.jpg",
      "/Photos/kichen/kichen-after1.jpg",
      "/Photos/kichen/kichen-after2.jpg",
      "/Photos/kichen/kichen-after3.jpg",
    ],
  },

  office: {
    slug: "office",
    title: "Office Redesign",
    cover: "/Photos/office/office-after1.jpg",
    images: [
      "/Photos/office/office-after1.jpg",
      "/Photos/office/office-after2.jpg",
      "/Photos/office/office-after3.jpg",
      "/Photos/office/office-before2.jpg",
    ],
  },

  electricCabin: {
    slug: "electricCabin",
    title: "Clean Electrical Cabinet",
    cover: "/Photos/electricCabin/electricCabin-after.jpg",
    images: [
      "/Photos/electricCabin/electricCabin-after.jpg",
      "/Photos/electricCabin/electricCabin-before.jpg",
    ],
  },

  communicationsRoom: {
    slug: "communicationsRoom",
    title: "Corporate Communications Room",
    cover: "/Photos/communicationsRoom/communicationsRoom-after1.jpg",
    images: [
      "/Photos/communicationsRoom/communicationsRoom-after1.jpg",
      "/Photos/communicationsRoom/communicationsRoom-before1.jpg",
      "/Photos/communicationsRoom/communicationsRoom-before2.jpg",
      "/Photos/communicationsRoom/communicationsRoom-before3.jpg",
    ],
  },
};

export const projectsList: Project[] = Object.values(projectsMap);

export const projectImages: Record<ProjectKey, string[]> = Object.fromEntries(
  Object.entries(projectsMap).map(([slug, proj]) => [slug, proj.images])
) as Record<ProjectKey, string[]>;
