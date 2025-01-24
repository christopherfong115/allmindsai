import React from "react";

const FeedbackCard = ({
  text,
  name,
  position,
  companyLink,
  companyName,
  pfp,
}: {
  text: string;
  name: string;
  position: string;
  companyLink: string;
  companyName: string;
  pfp: string;
}) => {
  return (
    <>
      <div className="rounded-2xl bg-gray-300 w-fit h-fit p-6">
        <p>"{text}"</p>
        <div className="flex gap-5 items-center mt-5">
          <img className="aspect-square rounded-full h-20" src={pfp} />
          <div>
            <h2 className="font-bold text-xl">{name}</h2>
            <div className="flex gap-1">
              <h3>{position}</h3> @{" "}
              <a className="font-bold underline" href={companyLink}>
                {companyName}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;
