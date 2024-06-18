
interface ButtonProps {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }

export const Button: React.FC<ButtonProps> = ({ text, onClick} ) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      // className="w-26 py-2 px-6 bg-sky-100 text-black rounded-xl shadow-sm"
      className="w-[100%] py-3 px-6 bg-sky-100 text-black rounded-xl shadow-sm"
    >
        {text}
    </button>
  );
};
