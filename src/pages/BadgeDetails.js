import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";

import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);
  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}

function BadgeDetails(props) {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useIncreaseCount(4);
  const badge = props.badge;

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero">
              {/* <h1>Richard Kaufman</h1> */}
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
              email={badge.email}
            />
          </div>
          <div className="col"></div>
          <h2>Actions</h2>
          <div>
            <div>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
                className="btn btn-warning mb-4"
              >
                Increase Count: {count}
              </button>
            </div>

            <div>
              <Link
                className="btn btn-primary mb-4"
                to={`/badges/${badge.id}/edit`}
              >
                Edit
              </Link>
            </div>

            <div>
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Delete
              </button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
              {/* {ReactDOM.createPortal(qué, dónde)} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
