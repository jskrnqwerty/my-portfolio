import { iconHoverColor } from "../../data/Data";

const ResponsiveDesignIcon = () => {
  return (
    <svg
      className="responsive-design icon"
      aria-label="Responsive design icon"
      // fill="#000000"
      // width="800px"
      // height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Responsive Design</title>
      <path
        className="fill-accent"
        fill={iconHoverColor}
        d="M17,6 L17,4.5 C17,3.67157288 16.3284271,3 15.5,3 L4.5,3 C3.67157288,3 3,3.67157288 3,4.5 L3,6 L17,6 L17,6 Z M13.4998169,7 L3,7 L3,16.5 C3,17.3284271 3.67157288,18 4.5,18 L13,18 L13,8.5 C13,7.93719704 13.1859724,7.41783027 13.4998169,7 L13.4998169,7 Z M15.5,7 C14.6715729,7 14,7.67157288 14,8.5 L14,19.5 C14,20.3284271 14.6715729,21 15.5,21 L19.5,21 C20.3284271,21 21,20.3284271 21,19.5 L21,8.5 C21,7.67157288 20.3284271,7 19.5,7 L15.5,7 L15.5,7 Z M18,6 L19.5,6 C20.8807119,6 22,7.11928813 22,8.5 L22,19.5 C22,20.8807119 20.8807119,22 19.5,22 L15.5,22 C14.1192881,22 13,20.8807119 13,19.5 L13,19 L4.5,19 C3.11928813,19 2,17.8807119 2,16.5 L2,4.5 C2,3.11928813 3.11928813,2 4.5,2 L15.5,2 C16.8807119,2 18,3.11928813 18,4.5 L18,6 Z M4,4 L5,4 L5,5 L4,5 L4,4 Z M6,4 L7,4 L7,5 L6,5 L6,4 Z M8,4 L9,4 L9,5 L8,5 L8,4 Z M16.5,20 C16.2238576,20 16,19.7761424 16,19.5 C16,19.2238576 16.2238576,19 16.5,19 L18.5,19 C18.7761424,19 19,19.2238576 19,19.5 C19,19.7761424 18.7761424,20 18.5,20 L16.5,20 Z"
      />
    </svg>
  );
};

export default ResponsiveDesignIcon;