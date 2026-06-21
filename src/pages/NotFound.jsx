import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center min-vh-100">
      <div
        className="position-relative w-100 d-flex align-items-center justify-content-center"
        style={{ maxWidth: "1140px", height: "400px" }}
      >
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="text-secondary mb-4">Page not found</p>
          <Link to="/" className="text-primary btn">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
