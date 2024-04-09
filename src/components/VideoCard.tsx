import React from "react";
export default function VideoCard() {
  return (
    <div>
      <img className="rounded-md" src="images.jpg" alt="img" />
      <div className="grid grid-cols-12 ">
        <div className="col-span-2">
          <img className="rounded-full h-14 w-14 object-cover" src="images.jpg" alt="img" />
        </div>
        <div className="col-span-10">BixiOp: Rank Push in Conqueror</div>
      </div>
    </div>
  );
}
