import { Droplet, Flag } from "lucide-react";

const items = [
  {
    icon: null,
    title: "Payment Options",
    copy: "Pay with Apple Pay, Crypto or any Amex, Mastercard or Visa card.",
  },
  {
    icon: Droplet,
    title: "Purity",
    copy: "Formulated with high-quality ingredients and strict standards for research-grade integrity.",
  },
  {
    icon: Flag,
    title: "US Lab",
    copy: "No outsourcing, we have our own local US based lab facilities for testing.",
  },
];

export function TrustStrip() {
  return (
    <section className="flex min-h-[263px] items-center bg-[#0B1222] py-10 text-white">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center justify-center gap-8 px-6 md:flex-row md:gap-5 lg:gap-10">
        {items.map(({ icon: Icon, title, copy }) => (
          <article
            key={title}
            className="flex h-[157px] w-full max-w-[320px] flex-none flex-col items-center gap-4 p-0 text-center md:w-[28vw] lg:w-[320px]"
          >
            {title === "Payment Options" ? (
              <WalletFilledIcon />
            ) : title === "Purity" ? (
              <DropletFilledIcon />
            ) : title === "US Lab" ? (
              <FlagFilledIcon />
            ) : (
              Icon && <Icon size={60} strokeWidth={3.7} className="h-[60px] w-[60px] flex-none text-white" />
            )}
            <div className="flex h-[81px] w-full flex-col items-center gap-2 p-0">
              <h2 className="h-[31px] w-full text-center font-[family-name:var(--font-plus-jakarta-sans)] text-[20.7599px] font-semibold leading-[150%] text-[#F4F8FB]">
                {title}
              </h2>
              <p className="h-[42px] w-full text-center font-[family-name:var(--font-plus-jakarta-sans)] text-[13.8399px] font-medium leading-[150%] text-[rgba(226,232,240,0.8)]">
                {copy}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WalletFilledIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[60px] w-[60px] flex-none"
      aria-hidden="true"
    >
      <path
        d="M9 15C9 11.6862 11.6862 9 15 9H39C40.6569 9 42 10.3431 42 12V21"
        stroke="white"
        strokeWidth="6.04785"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 21H15C11.6862 21 9 18.3138 9 15V39C9 43.9707 13.0293 48 18 48H48C49.6569 48 51 46.6569 51 45V24C51 22.3431 49.6569 21 48 21H42Z"
        stroke="white"
        strokeWidth="6.04785"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 21H15C11.6862 21 9 18.3138 9 15V39C9 43.9707 13.0293 48 18 48H48C49.6569 48 51 46.6569 51 45V24C51 22.3431 49.6569 21 48 21ZM41.25 38.25C39.1788 38.25 37.5 36.5712 37.5 34.5C37.5 32.4288 39.1788 30.75 41.25 30.75C43.3212 30.75 45 32.4288 45 34.5C45 36.5712 43.3212 38.25 41.25 38.25Z"
        fill="white"
      />
    </svg>
  );
}

function DropletFilledIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[60px] w-[60px] flex-none"
      aria-hidden="true"
    >
      <path
        d="M30 51C38.7996 51 45.9309 43.8456 45.9309 35.0196C45.9309 22.8801 37.0008 17.6895 30 9C22.9989 17.6898 14.0691 22.8804 14.0691 35.0196C14.0691 43.8453 21.2004 51 30 51Z"
        stroke="white"
        strokeWidth="5.93333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.0001 44.2496C24.9376 44.2496 20.8186 40.1084 20.8186 35.0195C20.8186 33.7772 21.8263 32.7695 23.0686 32.7695C24.3109 32.7695 25.3186 33.7772 25.3186 35.0195C25.3186 37.6268 27.4192 39.7496 30.0001 39.7496C31.2424 39.7496 32.2501 40.7573 32.2501 41.9996C32.2501 43.2419 31.2424 44.2496 30.0001 44.2496Z"
        fill="white"
      />
    </svg>
  );
}

function FlagFilledIcon() {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[62px] w-[62px] flex-none"
      aria-hidden="true"
    >
      <path
        d="M15.5 12.4004H40.3C43.7218 12.4004 46.5 15.1786 46.5 18.6004V27.9004C46.5 31.3222 43.7218 34.1004 40.3 34.1004H15.5V12.4004Z"
        fill="white"
        stroke="white"
        strokeWidth="6.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 9.2998V52.6998"
        stroke="white"
        strokeWidth="6.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
