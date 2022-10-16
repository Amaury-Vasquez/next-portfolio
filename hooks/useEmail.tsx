import Joi from "joi";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  name: string;
  email: string;
  message: string;
}
export interface EmailRequest {
  sended: boolean;
  status: number;
}

const emailDataSchema = Joi.object({
  name: Joi.string().min(2).max(40).required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  message: Joi.string().min(10).max(400),
});

export const useEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: joiResolver(emailDataSchema) });
  const [fade, setFade] = useState(0);
  const [request, setRequest] = useState<EmailRequest | undefined>();
  const [sending, setSending] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    setSending(true);

    (async () => {
      const { name, email, message } = data;
      const templateParams = {
        name,
        email,
        message,
      };
      const fadeContent = () => {
        setTimeout(() => {
          setFade(1);
          setTimeout(() => {
            setSending(false);
            setFade(0);
          }, 1000);
        }, 3000);
      };

      try {
        // env variables
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";
        const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID || "";

        await emailjs
          .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
          .then((result) => {
            const { status } = result;
            const req: EmailRequest = { status, sended: true };
            setRequest(req);
            fadeContent();
          });
      } catch (e) {
        const status = 400;
        const req: EmailRequest = { status, sended: false };
        setRequest(req);
        fadeContent();
      }
    })();
  };

  return { errors, handleSubmit, fade, onSubmit, register, request, sending };
};
