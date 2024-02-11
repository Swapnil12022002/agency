import { Button } from "@/components/ui/button";

const Call: React.FC = () => {
  return (
    <Button className="bg-[#141414] shadow-buttonShadow rounded-l-[50px] rounded-r-[50px] flex items-center gap-[24px] px-[32px] py-[24px]">
      <p className="font-bold text-[20px] bg-[#5E5E5E] rounded-[32px] px-2 py-1">
        C
      </p>
      <p>Book a Call</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <rect width="28" height="28" rx="14" fill="white" />
        <path
          d="M18.3472 10.569L18.3744 18.3744L10.569 18.3472M17.8304 17.8304L9.88909 9.8891"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Button>
  );
};

export default Call;
