import Image from "next/image";

export default function BrandMark() {
  return (
    <span className="tw:inline-flex tw:shrink-0 tw:items-center tw:gap-2">
      <Image
        src="/Photos/A&S-removebg.png"
        alt=""
        width={500}
        height={500}
        className="tw:block tw:size-14 tw:object-contain tw:sm:size-16"
      />
      <span className="tw:relative tw:block tw:h-12 tw:w-32 tw:overflow-hidden">
        <Image
          src="/Photos/UZAN-removebg.png"
          alt=""
          width={500}
          height={500}
          className="tw:absolute tw:top-1/2 tw:left-1/2 tw:h-[250px] tw:w-[250px] tw:max-w-none tw:-translate-x-1/2 tw:-translate-y-1/2"
        />
      </span>
    </span>
  );
}
