import React from "react";
import Popup from "reactjs-popup";
export const CharacterPopup = (props) => {
  return (
    <div>
      <Popup
        open={props.open}
        onClose={() => props.onCloseFunction()}
        modal
        className="character-popup"
      >
        {(close) => (
          <div>
            <div className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};
