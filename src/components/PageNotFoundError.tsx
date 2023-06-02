const PageNotFoundError = () => {
  return (
    <div className="page-not-found">
      <h1>Error 404</h1>
      <h3>Page not found</h3>
      <h5>
        Go back to{" "}
        <a
          className="link"
          href="https://jskrn.com/"
        >
          jskrn.com
        </a>
      </h5>
    </div>
  );
};

export default PageNotFoundError;
