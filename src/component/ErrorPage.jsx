import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <div className="d-flex align-items-center justify-content-center vh-100 bg-dark">
            <div className="text-center text-white">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> {error.statusText || error.message}</p>
                <p className="lead">
                  </p>
                <a href="/" className="btn btn-primary">Go Home</a>
            </div>
        </div>
    </div>
  );
}