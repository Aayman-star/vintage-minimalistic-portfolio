import { platypi } from "@/lib/fonts";
const Footer = () => {
  return (
    <div className="w-full bg-neutral-900 h-10">
      <div className="w-full md:max-w-5xl md:mx-auto h-full border-t-[1px] border-neutral-800">
        <p
          className={`py-2 text-center text-sm text-neutral-400 font-light ${platypi.className}`}>
          Copyright @ Aayman Khalid
        </p>
      </div>
    </div>
  );
};

export default Footer;
