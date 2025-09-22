export type Service = {
  key: string;
  titleHE: string;
  titleEN: string;
  titleTH: string;
  descHE: string;
  descEN: string;
  descTH: string;
  icon: string;
};

export const services: Service[] = [
  {
    key: "architecture",
    titleHE: "אדריכלות ותכנון",
    titleEN: "Architecture & Planning",
    titleTH: "สถาปัตยกรรมและการวางแผน",
    descHE: "תכנון אדריכלי מלא, סקיצות ועבודת אדריכלים מובילים.",
    descEN: "Full architectural design, sketches, and leading architects’ work.",
    descTH: "การออกแบบสถาปัตยกรรมครบวงจร โดยสถาปนิกชั้นนำ",
    icon: "🏛️",
  },
  {
    key: "finishing",
    titleHE: "עבודות גמר פנים וחוץ",
    titleEN: "Interior & Exterior Finishing",
    titleTH: "งานตกแต่งภายในและภายนอก",
    descHE: "ביצוע גמרים איכותיים, התאמות אישיות ועבודות יוקרה.",
    descEN: "High-quality finishing, custom adjustments, and premium work.",
    descTH: "งานตกแต่งคุณภาพสูง พร้อมการปรับแต่งตามความต้องการ",
    icon: "🎨",
  },
  {
    key: "interior",
    titleHE: "עיצוב פנים",
    titleEN: "Interior Design",
    titleTH: "การออกแบบตกแต่งภายใน",
    descHE: "עיצוב חללים פונקציונליים וחדשניים עם השראה בינלאומית.",
    descEN: "Functional and innovative spaces with international inspiration.",
    descTH: "การออกแบบพื้นที่ที่ใช้งานได้จริงและสร้างสรรค์",
    icon: "🛋️",
  },
];
