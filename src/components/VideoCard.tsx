import React from "react";
export default function VideoCard(props: any) {
  return (
    <div>
      <img className="border border-zinc-800 rounded-xl h-52" src={props.thumbnail} alt="img" />
      <div className="grid grid-cols-12 my-2">
        <div className=" w-16 col-span-1">
          <img
            className="rounded-full h-14 w-14 object-cover"
            src={props.authorImage}
            alt="img"
          />
        </div>
        <div className="-ml-9 text-md col-span-11">
            {props.title}
          <div className="text-neutral-400 text-md col-span-11">{props.author}</div>
          <div className="text-neutral-400 text-xs col-span-11">{props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
