"use client";
import { Toast } from "@heroui/react";
import React from "react";

const MyToast = () => {
  return (
    <div>
      <Toast.Provider placement="top"/>
    </div>
  );
};

export default MyToast;
