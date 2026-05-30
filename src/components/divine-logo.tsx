type DivineLogoProps = {
  color?: "dark" | "light";
  size?: "nav" | "footer";
};

const logoSizes = {
  nav: {
    root: "h-[31px] w-[107px] gap-[5px]",
    mark: "h-[18px] w-[24px]",
    word: "text-[28px]",
    sub: "ml-[42px] mt-[-3px] text-[10px]",
  },
  footer: {
    root: "h-[52px] w-[179px] gap-[9px]",
    mark: "h-[30px] w-[40px]",
    word: "text-[47px]",
    sub: "ml-[72px] mt-[-6px] text-[13px]",
  },
};

export function DivineLogo({ color = "dark", size = "nav" }: DivineLogoProps) {
  const tone = color === "light" ? "text-white" : "text-[#0B1222]";
  const classes = logoSizes[size];

  return (
    <span className={`inline-flex items-center ${classes.root} ${tone}`}>
      <svg
        aria-hidden="true"
        className={`${classes.mark} shrink-0`}
        fill="none"
        viewBox="0 0 107 102"
      >
        <path
          clipRule="evenodd"
          d="M0 13.532C0 28.035 0.777001 31.397 5.589 37.705C13.378 47.917 30.805 48.237 40.197 38.342C45.086 33.19 46 29.361 46 14.032V0H23H0V13.532ZM54.01 13.75C54.019 26.068 54.264 28.025 56.367 32.541C59.854 40.029 67.884 46 74.468 46C76.743 46 77 46.394 77 49.886C77 53.715 76.934 53.783 72.583 54.435C64.462 55.653 57.115 62.685 54.941 71.321C53.826 75.749 53.579 76 50.35 76C48.473 76 46.778 75.438 46.583 74.75C46.388 74.063 45.715 71.608 45.088 69.295C43.544 63.606 39.597 59.187 33.541 56.367C21.365 50.697 7.42 55.603 1.9 67.5C0.352 70.836 0.0399994 74.03 0.0219994 86.75L0 102H31.29C65.883 102 69.362 101.556 80.419 95.736C103.79 83.434 113.596 52.797 101.963 28.423C94.139 12.029 75.868 0 58.79 0H54L54.01 13.75Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`${classes.word} font-extrabold tracking-[-0.07em]`}>divine</span>
        <span className={`${classes.sub} font-medium tracking-[-0.02em]`}>aminos</span>
      </span>
    </span>
  );
}
