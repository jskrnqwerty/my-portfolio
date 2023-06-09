import { iconHoverColor } from "../../data/Data";

const DomIcon = () => {
  return (
    <svg
      className="dom icon"
      aria-label="Document Object Model icon"
      // fill="#000000"
      // width="800px"
      // height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Document Object Model</title>
      <path
        className="fill-accent"
        fill={iconHoverColor}
        // fill="pink"
        d="M22,19a3,3,0,1,1-3.965-2.827A.915.915,0,0,1,18,16V14.5a.5.5,0,0,0-.5-.5H6.5a.5.5,0,0,0-.5.5V16a.915.915,0,0,1-.035.173,3,3,0,1,1-1.93,0A.915.915,0,0,1,4,16V13a1,1,0,0,1,1-1h6V9.859a4,4,0,1,1,2,0V12h6a1,1,0,0,1,1,1v3a.915.915,0,0,1-.035.173A2.989,2.989,0,0,1,22,19Z"
      />
    </svg>
  );
};

export default DomIcon;
