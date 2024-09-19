import React from "react";
import DefaultButton from "@/components/defaultButton";
import { Link } from "react-router-dom";

export default function DefaultForm({title, redirects, children, onSubmit, isSubmitting, submitText}) {
  return (
    <div className="w-screen sm:w-full min-w-96 mx-auto rounded-none sm:rounded-2xl p-4 md:p-8 shadow-input bg-[#87bced11] backdrop-blur-xl">
      <h2 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-br from-inverted-background to-inverted-medium">
        {title}
      </h2>
      {redirects && redirects.map(redirect => (
        <p className="text-inverted-medium text-sm max-w-sm mt-2" key={redirect.href}>
          {`${redirect.text} `}<Link to={redirect.href} className="underline text-foreground hover:text-accent transition duration-300">{redirect.linkText}</Link>
        </p>
      ))}

      <form className="mt-8 flex flex-col gap-4" onSubmit={onSubmit}>
        {children}

        <DefaultButton disabled={isSubmitting} classes="h-10">
          {submitText}
        </DefaultButton>
      </form>
    </div>
  );
}
