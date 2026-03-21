"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function AuthorList({ authors }: { authors: string[] }) {
  const { profile } = useLanguage();
  const myName = profile.name;

  return (
    <span className="text-slate-600">
      {authors.map((author, index) => {
        const isMe = author === myName;
        return (
          <React.Fragment key={index}>
            {isMe ? (
              <span className="font-semibold text-slate-900">{author}</span>
            ) : (
              <span>{author}</span>
            )}
            {index < authors.length - 1 && ", "}
          </React.Fragment>
        );
      })}
    </span>
  );
}
