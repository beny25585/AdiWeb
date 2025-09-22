export type Project = {
  slug: string;
  titleHE: string;
  titleEN: string;
  titleTH: string;
  location: string;
  image: string;
  descriptionHE?: string;
  descriptionEN?: string;
  descriptionTH?: string;
};

export const projects: Project[] = [
  {
    slug: "campus",
    titleHE: "קמפוס הייטק",
    titleEN: "Hi-Tech Campus",
    titleTH: "วิทยาเขตไฮเทค",
    location: "Tel Aviv",
    image: "/images/project1.jpg",
    descriptionHE: "פרויקט משרדים חדשני באזור המרכז.",
    descriptionEN: "Innovative office campus in central Israel.",
    descriptionTH: "โครงการสำนักงานนวัตกรรมใจกลางอิสราเอล",
  },
  {
    slug: "library",
    titleHE: "ספרייה עירונית",
    titleEN: "City Library",
    titleTH: "ห้องสมุดเมือง",
    location: "Holon",
    image: "/images/project2.jpg",
    descriptionHE: "ספרייה מודרנית עם חללים ירוקים.",
    descriptionEN: "Modern library with green spaces.",
    descriptionTH: "ห้องสมุดสมัยใหม่พร้อมพื้นที่สีเขียว",
  },
  {
    slug: "office",
    titleHE: "מטה חברה",
    titleEN: "HQ Office",
    titleTH: "สำนักงานใหญ่",
    location: "Ramat Gan",
    image: "/images/project3.jpg",
    descriptionHE: "בניין מטה חברה יוקרתי.",
    descriptionEN: "Prestigious corporate headquarters.",
    descriptionTH: "สำนักงานใหญ่ที่หรูหรา",
  },
];
