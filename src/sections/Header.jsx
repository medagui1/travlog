import React from "react";

const Header = () => {
  return (
    <header className="py-wide flex justify-between circular">
      <div className="logo flex gap-4 items-center">
        <img src="icons/logo.svg" alt="" height={40} width={40} />
        <p className="font-bold text-[24px] ">Travlog</p>
      </div>
      <button className="menu-btn">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.38 0H11.62C4.34 0 0 4.34 0 11.62V28.36C0 35.66 4.34 40 11.62 40H28.36C35.64 40 39.98 35.66 39.98 28.38V11.62C40 4.34 35.66 0 28.38 0ZM30 30.5H10C9.18 30.5 8.5 29.82 8.5 29C8.5 28.18 9.18 27.5 10 27.5H30C30.82 27.5 31.5 28.18 31.5 29C31.5 29.82 30.82 30.5 30 30.5ZM30 21.5H10C9.18 21.5 8.5 20.82 8.5 20C8.5 19.18 9.18 18.5 10 18.5H30C30.82 18.5 31.5 19.18 31.5 20C31.5 20.82 30.82 21.5 30 21.5ZM30 12.5H10C9.18 12.5 8.5 11.82 8.5 11C8.5 10.18 9.18 9.5 10 9.5H30C30.82 9.5 31.5 10.18 31.5 11C31.5 11.82 30.82 12.5 30 12.5Z"
            fill="#E8E8E8"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
