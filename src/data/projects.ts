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
  | "UrbanUmami"
  | "Calm55"
  | "baseHairStudio"
  | "horaizonFlow"
  | "theAddressSignatureHome";

export type Project = {
  slug: ProjectKey;
  title: string;
  cover: string;
  arcitecture?: boolean;
  goodImages?: boolean;
  images: string[];
  video?: string[];
};

export const projectsMap: Record<ProjectKey, Project> = {
  theAddressSignatureHome: {
    slug: "theAddressSignatureHome",
    title: "The Address Signature Home",
    cover: "11_M_fijf0z",
    goodImages: true,
    images: [
      "11_M_fijf0z",
      "5_lw7wyy",
      "66_dvhzge",
      "08_crjwge",
      "06_bpvade",
      "DSC_0115_jmsfdy",
      "DSC_0107_j4we5y",
      "DSC_0099_idswoc",
      "DSC_0092_r8ir7r",
      "DSC_0098_ibdwjr",
      "DSC_0241_ltxogp",
      "DSC_0227_1_xayoeg",
      "DSC_0153_1_brfhmd",
      "DSC_0227_1_xayoeg",
      "DSC_0215_1_nxqji9",
      "DSC_0186_rh159l",
      "DSC_0053_1_apzvjd",
      "DSC_0186_xlyygx",
      "04_zawmxw",
      "05_ttl2mr",
      "09_huq4zx",
      "07_rvvsxa",
      "44_j48wl7",
      "55_heegct",
    ],
    video: ["วีดีโอสำหรับ_TikTok_gmdqc3", "0609_8_fykqn8"],
  },
  horaizonFlow: {
    slug: "horaizonFlow",
    title: "Horizon Flow Residences",
    cover: "22.5_a7jfje.png",
    goodImages: true,
    images: [
      "22.5_a7jfje.png",
      "30_robyhv.png",
      "29_qndzv3.png",
      "28_h6aphf.png",
      "27_fi2rm0.png",
      "26png_olcwzm.png",
      "25_jj2jd7.png",
      "24_m1rdwp.png",
      "23_i24k3z.png",
      "22_ptmkvq.png",
      "21_eemk0d.png",
      "20_zuwx1d.png",
      "19_j2p3hb.png",
      "18_e00txb.png",
      "17_xapyhf.png",
      "16_s4qzqo.png",
      "15_l3e8qb.png",
      "14_sameue.png",
      "13_zv26p2.png",
      "12_vgttb0.png",
      "11_meox1c.png",
    ],
  },

  Calm55: {
    slug: "Calm55",
    title: "Calm 55 Design & Build Renovation",
    cover: "TL1_ngtnxp.png",
    goodImages: true,
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
    goodImages: true,
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
    goodImages: true,
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
    arcitecture: true,
    cover: "the_wine_valley_1_n4rlqz.png",
    images: [
      "the_wine_valley_1_n4rlqz.png",
      "WINE_VALLEY_2_vpmbmv.png",
      "WINE_VALLEY_3_u1qkep.png",
      "WINE_VALLEY_4_n7ax9k.png",
      "WINE_VALLEY_5.png_1_qy69lj.png",
    ],
  },

  heritageResidence: {
    slug: "heritageResidence",
    title: "The Heritage Residence",
    arcitecture: true,
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
    title: "German Colony Villa",
    arcitecture: true,
    cover: "F67_vvyxm5.png",
    goodImages: true,

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
  UrbanUmami: {
    slug: "UrbanUmami",
    title: "Urban Umami Restaurant",
    cover: "SUSHI_1_xdywvr.png",
    images: [
      "SUSHI_1_xdywvr.png",
      "SUSHI_2_d7ltvw.png",
      "SHSHI_3_ohn30e.png",
      "SUSHI_4_i8zv8k.png",
      "SUSHI_5_jgoxig.png",
    ],
  },

  suite: {
    slug: "suite",
    title: "Rothscild 221 Hotel",
    arcitecture: true,
    cover: "/Photos/Suite/courtyard2.png",
    images: [
      "/Photos/Suite/courtyard1.png",
      "/Photos/Suite/courtyard2.png",
      "/Photos/Suite/lobby.png",
      "776_q6zmwp.png",
      "/Photos/Suite/suite2.png",
      "/Photos/Suite/suite3.png",
    ],
  },
  baseHairStudio: {
    slug: "baseHairStudio",
    title: "BASE Hair Studio",
    cover: "B1jpg_mb0t7h.jpg",
    images: [
      "B1jpg_mb0t7h.jpg",
      "B2_l781gc.jpg",
      "B3_ehjuqs.jpg",
      "B4_chgh1l.jpg",
      "B5_tchjlt.jpg",
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

export const orderedKeys: ProjectKey[] = [
  "Calm55",
  "theAddressSignatureHome",
  "horaizonFlow",
  "lawFirmOffice",
  "developmentFirm",
  "winery",
  "heritageResidence",
  "UrbanUmami",
  "frederOscar",
  "suite",
  "baseHairStudio",
  "kitchen",
];

export const projectsList: Project[] = orderedKeys.map((k) => projectsMap[k]);

export const projectImages: Record<ProjectKey, string[]> = Object.fromEntries(
  Object.entries(projectsMap).map(([slug, proj]) => [slug, proj.images]),
) as Record<ProjectKey, string[]>;
