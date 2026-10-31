import type { Project } from "@/data/projects";

type Props = {
  mediaType?: Project["mediaType"];
  label: string;
  tone?: "light" | "dark";
};

export default function ProjectMediaLabel({ mediaType, label, tone = "light" }: Props) {
  if (mediaType !== "visualization") return null;

  return (
    <span className={`tw:mt-2 tw:block tw:text-xs tw:leading-5 tw:font-normal ${tone === "dark" ? "tw:text-[#c9c5bc]" : "tw:text-[#625c51]"}`}>
      {label}
    </span>
  );
}
