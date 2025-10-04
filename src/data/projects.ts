export type Project = {
  slug: string;
  image: string;
  folder: string;
};

export const projects: Project[] = [
  {
    slug: "office",
    image: "/Photos/office/office-after1.jpg",
    folder: "/Photos/ofice",
  },
  {
    slug: "kitchen",
    image: "/Photos/kichen/kichen-after1.jpg",
    folder: "/Photos/kichen",
  },
  {
    slug: "electricCabin",
    image: "/Photos/electricCabin/electricCabin-after.jpg",
    folder: "/Photos/electricCabin",
  },
  {
    slug: "comunications",
    image: "/Photos/communicationsRoom/communicationsRoom-after1.jpg",
    folder: "/Photos/cominicetions",
  },
];
