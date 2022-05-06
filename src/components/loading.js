import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "../styles/loading.css";

fontawesome.library.add(faSpinner);

export function Loading() {
  return (
    <div className="loading">
      <div className="spinner">
        <FontAwesomeIcon icon="spinner" className="spinner-icon" />
      </div>
    </div>
  );
}
