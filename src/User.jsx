import React from 'react';

export default function User({ item, clickRemoveButtonHandler }) {
  return (
    <>
      <div key={item.id} className="componenet-style">
        {item.age} - {item.name}
        <button
          type="button"
          onClick={() => {
            clickRemoveButtonHandler(item.id);
          }}
        >
          x
        </button>
      </div>
    </>
  );
}
