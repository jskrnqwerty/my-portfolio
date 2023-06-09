import { bgColor, iconHoverColor } from "../../data/Data";

const GoogleMerchantIcon = () => {
  return (
    <svg
      // height="2500"
      // width="2500"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0.2 0.2 409.8 409.601"
      className="google-merchant icon"
      aria-label="Google Merchant"
    >
      <title>Google Merchant Center</title>
      <defs>
        {/* <linearGradient
          id="a"
          x1="100%"
          x2="0%"
          y1="100%"
          y2="0%"
        >
          <stop
            offset="0"
            stop-color="#4385f5"
          />
          <stop
            offset="1"
            stop-color="#3569d3"
          />
        </linearGradient> */}
        <path
          id="c"
          d="M137.5 201c-8.56 0-15.5-6.94-15.5-15.5s6.94-15.5 15.5-15.5 15.5 6.94 15.5 15.5-6.94 15.5-15.5 15.5zm165.364 47.632l-93.6-93.6C205.52 151.288 200.32 149 194.6 149h-72.8a20.728 20.728 0 0 0-20.8 20.8v72.8c0 5.72 2.288 10.92 6.136 14.664l93.496 93.6C204.48 354.608 209.68 357 215.4 357s10.92-2.392 14.664-6.136l72.8-72.8C306.712 274.32 309 269.12 309 263.4c0-5.824-2.392-11.024-6.136-14.768z"
        />
        {/* <filter
          id="b"
          height="120.7%"
          width="120.7%"
          x="-8.4%"
          y="-8.4%"
        >
          <feOffset
            dx="4"
            dy="4"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="6.5"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
          />
        </filter> */}
      </defs>
      <g
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M.2 98.333h409.6V375.67c0 18.85-15.278 34.13-34.13 34.13H34.33C15.48 409.8.2 394.514.2 375.67z"
          // fill="#518ff5"
          className="fill-accent"
          fill={iconHoverColor}
        />
        {/* <path
          d="M144.713 294.215l106.371-97.264L410 355.63l-.074 20.037c-.07 18.851-15.405 34.134-34.26 34.134H260.808z"
          fill="url(#a)"
        /> */}
        <path
          d="M.2 34.333C.2 15.482 15.478.2 34.33.2h341.34c18.85 0 34.13 15.28 34.13 34.133v64H.2z"
          // fill="#4758b8"
          className="fill-accent"
          fill={iconHoverColor}
        />
        <path
          d="M187.933 47.133h-40.539c-8.245 0-14.927 6.686-14.927 14.934 0 8.249 6.683 14.933 14.927 14.933h115.212c8.245 0 14.927-6.686 14.927-14.933 0-8.25-6.683-14.934-14.927-14.934h-40.54v-4.266c0-9.43-7.64-17.067-17.066-17.067-9.428 0-17.067 7.641-17.067 17.067z"
          // fill="#fff"
          fill={bgColor}
        />
        <g fillRule="nonzero">
          <use
            // fill="#000"
            className="fill-accent"
            fill={iconHoverColor}
            // filter="url(#b)"
            href="#c"
          />
          <use
            // fill="#fff"
            fill={bgColor}
            fillRule="evenodd"
            href="#c"
          />
        </g>
      </g>
    </svg>
  );
};

export default GoogleMerchantIcon;
