import { Button } from "@heroui/button";
import { Link } from "react-router-dom";

type CommonButtonProps = {
  text: string;
  image?: React.ReactNode;
  disabled?: boolean;
};

type LinkButtonProps = CommonButtonProps & {
  linkto: string;
  type?: never;
  onClick?: never;
};

type ActionButtonProps = CommonButtonProps & {
  linkto?: never;
  type: 'submit' | 'button' | 'reset';
  onClick?: () => void;
};

type MainButtonProps = LinkButtonProps | ActionButtonProps;


function MainButton(props: MainButtonProps) {
  const { text, image, disabled } = props;

  const commonClasses = "rounded-xl bg-main-orange text-button-text px-5 py-6 text-2xl font-[100]";

  return (
    <div className='mt-4 w-full flex justify-end'>
      
      {props.linkto ? (
        <Button
          as={Link}
          to={props.linkto}
          className={commonClasses}
          endContent={image}
          tabIndex={-1} 
          
        >
          {text}
        </Button>
      ) : (
       
        <Button
          type={props.type}
          onClick={props.onClick}
          disabled={disabled}
          className={commonClasses}
          endContent={image}
        >
          {text}
        </Button>
      )}
    </div>
  );
}

export default MainButton;