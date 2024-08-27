"use client";
import React from "react";
import useConversation from "../hooks/useConversation";
import EmptyState from "../components/EmptyState";
import clsx from "clsx";

const Conversations = () => {
  const { isOpen } = useConversation();
  console.log(isOpen);
  return (
    <div
      className={clsx("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}
    >
      <EmptyState />
    </div>
  );
};

export default Conversations;
