import { Button } from "@heroui/button";
import { Link } from "react-router-dom";

type MainButtonProps = {
  linkto: string;
  text: string;
  image: React.ReactNode;
};

function MainButton({ linkto, text, image }: MainButtonProps) {
  return (
		<div className='mt-4 w-full flex justify-end'>
    <Button
      as={Link}
      to={linkto}
      type="button"
      className="rounded-xl bg-main-orange text-button-text px-5 py-6 text-2xl font-[100]"
      endContent={image}
      tabIndex={-1}
    >
      {text}
    </Button>
		</div>
  );
}

export default MainButton;
