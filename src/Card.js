import React from "react";

function Card({
  city,
  country,
  superHost,
  title,
  rating,
  maxGuests,
  type,
  beds,
  photo,
}) {
  return (
    <div className="flex flex-col m-4 ">
        {/* Image div */}
      <div className="w-full">
        {" "}
        <img src={photo} className="object-cover rounded-2xl" />
      </div>

        {/* Middle div */}
      <div className="flex justify-between my-4">
        <div className="flex items-baseline">{superHost && (
          <button className="border-[1px] border-gray-600 text-sm font-semibold px-3 rounded-full mr-2 py-1">SUPER HOST</button>
        )}
        <p className="text-[#828282]">{`${type}${beds && ", " + beds + " beds"}`}</p></div>
        
        <div className="flex items-baseline">
          <img src="/star.svg" className="h-4 w-4 mr-1" />
          <span>{rating}</span>
        </div>
      </div>
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
}

export default Card;
