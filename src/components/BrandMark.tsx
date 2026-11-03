import Image from "next/image";

type Props = {
  variant?: "default" | "header";
};

export default function BrandMark({ variant = "default" }: Props) {
  const isHeader = variant === "header";

  return (
    <span
      className={`tw:inline-flex tw:shrink-0 tw:items-center tw:gap-2 ${isHeader ? "tw:sm:gap-3" : ""}`}
    >
      <Image
        src="/Photos/A&S-removebg.png"
        alt=""
        width={500}
        height={500}
        sizes={isHeader ? "(min-width: 640px) 80px, 56px" : "(min-width: 640px) 64px, 56px"}
        className={`tw:block tw:size-14 tw:object-contain ${isHeader ? "tw:sm:size-20" : "tw:sm:size-16"}`}
      />
      <span
        className={`tw:relative tw:block tw:overflow-hidden ${isHeader ? "tw:h-12 tw:w-36 tw:sm:h-14 tw:sm:w-44" : "tw:h-12 tw:w-32"}`}
      >
        <Image
          src="/Photos/UZAN-removebg.png"
          alt=""
          width={500}
          height={500}
          sizes={isHeader ? "(min-width: 640px) 338px, 276px" : "250px"}
          className={`tw:absolute tw:top-1/2 tw:left-1/2 tw:max-w-none tw:-translate-x-1/2 tw:-translate-y-1/2 ${isHeader ? "tw:size-[276px] tw:sm:size-[338px]" : "tw:size-[250px]"}`}
        />
      </span>
    </span>
  );
}
