const Error404 = () => {
  return (
    <div className="error404 wrapper special-page-message">
      <h1>Error 404</h1>
      {/* <h3>Page not found</h3> */}
      <h4>
        Go back to{" "}
        <a
          className="link"
          href="https://jskrn.com/"
        >
          jskrn.com
        </a>
      </h4>
    </div>
  );
};

export default Error404;
