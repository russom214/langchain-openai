import React from "react";

const TwoColumnLayout = ({leftChildren, rightChildren}) => {
  return (
    <>
      <section className="flex md:justify-between">
        <div className="md:w-2/5 w-full">{leftChildren}</div>
        <div className="md:w-2/5 w-full">{rightChildren}</div>
      </section>
    </>
  );
};

export default TwoColumnLayout;