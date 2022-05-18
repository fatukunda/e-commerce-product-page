interface IProps {
  [key: string]: string | undefined;
}
// Button themes

export const ButtonType: IProps = {
  primary: `flex w-full items-center justify-center gap-2 rounded-lg 
            bg-primary p-4 font-bold text-white shadow-lg shadow-primary/50 
            transition-all duration-300 hover:bg-primary/50`,
  outline:
    "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border",
};

export const ButtonSize: IProps = {
  sm: "py-2 px-4 text-xs",
  lg: "py-3 px-6 text-lg",
};
