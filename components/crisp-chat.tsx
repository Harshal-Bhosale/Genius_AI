"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4e845290-03b0-487a-83e9-bd6c5ffddd46");
  }, []);

  return null;
};
