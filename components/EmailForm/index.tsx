import { BiMailSend } from 'react-icons/bi';
import { MdMarkEmailRead, MdOutlineError } from 'react-icons/md';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';

import { BounceLoader } from '../BounceLoader';
import { useEmail, EmailRequest } from '../../hooks/useEmail';
import {
  Form,
  Label,
  IconInput,
  Icon,
  Input,
  MessageInput,
  Required,
  SubmitButton,
  Sending,
  Action,
  ActionMessage,
  EmailSent,
} from './styles';
import React from 'react';

const SendingEmail = (props: {
  data: EmailRequest | undefined;
  fadeOut: number;
}) => {
  const { data, fadeOut } = props;
  if (!data)
    return (
      <Sending>
        <Action> Your email is being sent </Action>
        <BounceLoader />
        <ActionMessage> Please wait a few seconds... </ActionMessage>
      </Sending>
    );
  const { sended, status } = data;
  return (
    <EmailSent success={sended ? 1 : 0} fadeOut={fadeOut}>
      <Action>
        {sended
          ? 'Your email has been sent!'
          : 'Your email could not be sent! '}
      </Action>
      {status === 200 && <MdMarkEmailRead />}
      {status === 400 && <MdOutlineError />}
    </EmailSent>
  );
};

export const EmailForm = () => {
  const { errors, handleSubmit, fade, onSubmit, register, request, sending } =
    useEmail();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label> Name </Label>
      {errors.name && <Required> {errors.name.message} </Required>}
      <IconInput>
        <Icon>
          <AiOutlineUser />
        </Icon>
        <Input
          type="text"
          placeholder="Your name"
          {...register('name', { required: true })}
        />
      </IconInput>
      <Label> Email </Label>
      {errors.email && <Required> {errors.email.message} </Required>}
      <IconInput>
        <Icon>
          <AiOutlineMail />
        </Icon>
        <Input
          type="email"
          placeholder="email@example.com"
          {...register('email', { required: true })}
        />
      </IconInput>
      <Label> Message </Label>
      {errors.message && <Required> {errors.message.message} </Required>}
      <MessageInput
        placeholder="Leave your message here"
        {...register('message', { required: true })}
      />
      <SubmitButton
        type="submit"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.currentTarget && e.currentTarget.blur();
        }}
      >
        Send email
        <BiMailSend />
      </SubmitButton>
      {sending && <SendingEmail data={request} fadeOut={fade} />}
    </Form>
  );
};
