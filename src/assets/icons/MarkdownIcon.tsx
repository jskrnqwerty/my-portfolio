import { iconHoverColor } from "../../data/Data";

const MarkdownIcon = () => {
  return (
    <svg
      className="markdown icon"
      aria-label="Markdown logo"
      // width="800px"
      // height="800px"
      viewBox="0 0 24 24"
      // fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Markdown</title>
      <path
        className="fill-accent"
        fill={iconHoverColor}
        // fill="#000000"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 8C0 5.79086 1.79086 4 4 4H20C22.2091 4 24 5.79086 24 8V16C24 18.2091 22.2091 20 20 20H4C1.79086 20 0 18.2091 0 16V8ZM4 6C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6H4ZM5.68377 8.05132C6.09211 7.9152 6.54174 8.05566 6.8 8.4L9 11.3333L11.2 8.4C11.4583 8.05566 11.9079 7.9152 12.3162 8.05132C12.7246 8.18743 13 8.56957 13 9V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V12L9.8 13.6C9.61115 13.8518 9.31476 14 9 14C8.68524 14 8.38885 13.8518 8.2 13.6L7 12V15C7 15.5523 6.55228 16 6 16C5.44772 16 5 15.5523 5 15V9C5 8.56957 5.27543 8.18743 5.68377 8.05132ZM18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9V12.5858L15.7071 12.2929C15.3166 11.9024 14.6834 11.9024 14.2929 12.2929C13.9024 12.6834 13.9024 13.3166 14.2929 13.7071L16.2929 15.7071C16.6834 16.0976 17.3166 16.0976 17.7071 15.7071L19.7071 13.7071C20.0976 13.3166 20.0976 12.6834 19.7071 12.2929C19.3166 11.9024 18.6834 11.9024 18.2929 12.2929L18 12.5858V9Z"
      />
    </svg>
  );
};

export default MarkdownIcon;