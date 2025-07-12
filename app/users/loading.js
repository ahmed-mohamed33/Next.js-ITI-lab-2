import React from "react";
import Loader from "../_components/Loader";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <Loader size="large" />
    </div>
  );
}
