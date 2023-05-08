import { IconType } from "../../types/types";

const SeoIcon = ({ fillColor }: IconType) => {
  return (
    <svg
      className="seo"
      aria-label="SEO icon"
      // fill="#000000"
      // width="800px"
      // height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-accent"
        fill={fillColor}
        d="M21,4V7H3V4A1,1,0,0,1,4,3H20A1,1,0,0,1,21,4ZM3,9H21V20a1,1,0,0,1-1,1H4a.974.974,0,0,1-.46-.126l3.587-3.587,2.318,1.545a1,1,0,0,0,1.262-.125l2-2a1,1,0,0,0-1.414-1.414l-1.42,1.42L7.555,15.168a1,1,0,0,0-1.262.125L3,18.586Zm11.293,4.707a1,1,0,0,0,1.414,0l1-1a1,1,0,0,0-1.414-1.414l-1,1A1,1,0,0,0,14.293,13.707Z"
      />
    </svg>
  );
};

export default SeoIcon;
