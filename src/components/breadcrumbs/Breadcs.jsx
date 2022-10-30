import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import MuiLink from "@material-ui/core/Link";

const Breadcs = ({ title }) => {
  const location = useLocation();
  const homeMatches = useRouteMatch("/");
  const surveyMatches = useRouteMatch("/survey");
  // const postsMatches = useRouteMatch("/posts");
  // const newPostMatches = useRouteMatch("/post/new");
  // const postMatches = useRouteMatch("/post/:jobid/edit");

  const handleClick = () => {};
  return (
    <div role="presentation" onClick={handleClick}>
      {/* <Breadcrumbs aria-label="breadcrumb"> */}
      {location.pathname === "/" ? (
        <div
          style={{
            width: "100%",
            height: "30px",
            borderBottom: "1px solid gray",
          }}
        >
          <h2 style={{ color: "gray" }}>Dashboard</h2>
        </div>
      ) : location.pathname === "/survey" ? (
        <div
          style={{
            width: "100%",
            height: "30px",
            borderBottom: "1px solid gray",
          }}
        >
          <h2 style={{ color: "gray" }}>Survey</h2>
        </div>
      ) : (
        ""
      )}

      {/* </Breadcrumbs> */}
    </div>
  );
};

export default Breadcs;
