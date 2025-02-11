import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h3>{error.data || error.message}</h3>
      <button onClick={() => navigate(-1)}>👈 Back</button>
    </div>
  );
};

export default Error;
