type Props = {
  value: string;
  desc: string;
  index: number;
};

export function StatItem({ value, desc, index }: Props) {
  return (
    <div
    className={`border-b-2 bg-amber-800 pb-4`}
    //   className={`${
    //     index > 0 ? "md:border-l md:border-foreground/10" : ""
    //   } md:px-8 first:md:pl-0 last:md:pr-0`}
    >
      <p className="font-heading text-4xl md:text-4xl lg:text-7xl text-foreground ">
        {value}
      </p>

      <div className="w-full h-px bg-foreground/10 mb-4" />

      <p className="font-body text-foreground/50 leading-relaxed  text-base ">
        {desc}
      </p>
    </div>
  );
}