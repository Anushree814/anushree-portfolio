"use server";

import PortfolioEmailForm from "@/email/portfolio-email-form";
import { myMailId } from "@/lib/constants";
import { getErrorMessage, validateInput } from "@/utils/helpers";
import React from "react";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");

  const message = formData.get("message");

  if (!validateInput(senderEmail)) {
    return {
      error: "Invalid sender",
    };
  }
  if (!validateInput(message)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateInput(myMailId)) {
    return {
      error: "Failed to send email due to receiver not found",
    };
  }
  let response, error;
  try {
    response = await resend.emails.send({
      from: "Portfolio contact form <onboarding@resend.dev>",
      to: "delivered@resend.dev",
      replyTo: senderEmail as string,
      subject: "New message from portfolio website",
      react: React.createElement(PortfolioEmailForm, {
        text: message as string,
        senderEmail: senderEmail as string,
      }),
    });
    console.log("email res", response);
    if(response?.error && !!response.error){
        error = getErrorMessage(response?.error);
    }
  } catch (error: unknown) {
    console.log('getErrorMessage', getErrorMessage(error));
    return {
      error: getErrorMessage(error),
    };
  }
  //console.log({...response});
  
  return { ...response.data, error };
};
