export type ProjectKey =
  | "winery"
  | "heritageResidence"
  | "frederOscar"
  | "suite"
  | "kitchen"
  | "office"
  | "electricCabin"
  | "lawFirmOffice"
  | "developmentFirm"
  | "Calm55";

export type Project = {
  slug: ProjectKey;
  title: string;
  cover: string;
  images: string[];
};

export const projectsMap: Record<ProjectKey, Project> = {
  Calm55: {
    slug: "Calm55",
    title: "Calm 55 Design & Build Renovation",
    cover: "TL1_ngtnxp.png",
    images: [
      "TL1_ngtnxp.png",
      "TL2_xb7kte.png",
      "TL3_o8kbb2.png",
      "TL4_igvkby.png",
      "TL5_aru32u.png",
      "TL6_nghpbl.png",
      "TL7_j5tmkr.png",
      "TL7.5_fqxsyv.png",
      "TL8_q8v1dv.png",
      "TL9_z1czeh.png",
      "TL10_kklx3a.png",
      "TL11_fgzyn7.png",
      "TL12_nu9kvm.png",
    ],
  },

  lawFirmOffice: {
    slug: "lawFirmOffice",
    title: "Law Firm Office",
    cover: "14_poorvu.jpg",
    images: [
      "18_okcx6e.jpg",
      "15_fow0ci.jpg",
      "17_ffcq2m.jpg",
      "13_bheg0w.jpg",
      "12_zdo6nl.jpg",
      "16_ybet8v.jpg",
      "14_poorvu.jpg",
    ],
  },
  developmentFirm: {
    slug: "developmentFirm",
    title: "Investment & Development Firm Project",
    cover: "G25_tmrpkj.png",
    images: [
      "G35_eadrzq.png",
      "CD34_uwvm9j.png",
      "G25_tmrpkj.png",
      "22g_zwatvs.jpg",
      "23G_obilj7.webp",
      "24G_roqh6o.jpg",
    ],
  },

  winery: {
    slug: "winery",
    title: "Winery",
    cover: "/Photos/winery/1_1 - Exterior_Dawn.jpg",
    images: [
      "/Photos/winery/1_1 - Exterior_Dawn.jpg",
      "/Photos/winery/1_2 - Interior_tasting_room.jpg",
      "/Photos/winery/1_3 - Exterior_dawn_drone_shot.jpg",
      "/Photos/winery/1_4-Winery_entrance.jpg",
      "/Photos/winery/1_5-Winery_entrance.jpg",
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
    cover: "F67_vvyxm5.png",
    images: [
      "OUTFRONT1_m9ptwd.png",
      "F67_vvyxm5.png",
      "DFT23_dxexqh.png",
      "FD45_qmr8ve.png",
      "LIVINGROOM2.1_ykri84.png",
      "SWIMINPOOL2_etvdou.png",
      "LIVINGROOM2.1_ykri84.png",
      "FD35_wtnt1q.png",
      "SWIMINPOOL1_zflowm.png",
      "FGY67_o9cmto.png",
      "DR43_odo6aj.png",
    ],
  },

  suite: {
    slug: "suite",
    title: "Luxury Suite",
    cover: "/Photos/Suite/courtyard2.png",
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
    cover: "/Photos/office/office-after2.jpg",
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
};

export const projectsList: Project[] = Object.values(projectsMap);

export const projectImages: Record<ProjectKey, string[]> = Object.fromEntries(
  Object.entries(projectsMap).map(([slug, proj]) => [slug, proj.images])
) as Record<ProjectKey, string[]>;
