import { BiMailSend } from 'react-icons/bi';
import { MdMarkEmailRead, MdOutlineError } from 'react-icons/md';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';

import { BounceLoader } from './bounceLoader';
import styles from 'styles/contact.module.scss';
import { useEmail, EmailRequest } from '../hooks/useEmail';

const {
  form,
  label,
  iconInput,
  icon,
  input,
  messageInput,
  required,
  submitButton,
  sending,
  action,
  actionMessage,
  failed,
  succeed,
  fade,
} = styles;

const SendingEmail = (props: {
  data: EmailRequest | undefined;
  fadeOut: number;
}) => {
  const { data, fadeOut } = props;
  if (!data)
    return (
      <div className={sending}>
        <p className={action}> Your email is being sent </p>
        <BounceLoader />
        <p className={actionMessage}> Please wait a few seconds... </p>
      </div>
    );
  const { sended, status } = data;
  return (
    <div
      className={`${sended ? succeed : failed} ${fadeOut === 1 ? fade : ''}`}
    >
      <p className={action}>
        {sended
          ? 'Your email has been sent!'
          : 'Your email could not be sent! '}
      </p>
      {status === 200 && <MdMarkEmailRead />}
      {status === 400 && <MdOutlineError />}
    </div>
  );
};

export const EmailForm = () => {
  const { errors, handleSubmit, fade, onSubmit, register, request, sending } =
    useEmail();

  return (
    <form className={form} onSubmit={handleSubmit(onSubmit)}>
      <label className={label}> Name </label>
      {errors.name && <span className={required}> {errors.name.message} </span>}
      <div className={iconInput}>
        <span className={icon}>
          <AiOutlineUser />
        </span>
        <input
          className={input}
          type="text"
          placeholder="Your name"
          {...register('name', { required: true })}
        />
      </div>
      <label className={label}> Email </label>
      {errors.email && (
        <span className={required}> {errors.email.message} </span>
      )}
      <div className={iconInput}>
        <span className={icon}>
          <AiOutlineMail />
        </span>
        <input
          className={input}
          type="email"
          placeholder="email@example.com"
          {...register('email', { required: true })}
        />
      </div>
      <label className={label}> Message </label>
      {errors.message && (
        <span className={required}> {errors.message.message} </span>
      )}
      <textarea
        className={messageInput}
        placeholder="Leave your message here"
        {...register('message', { required: true })}
      />
      <button
        className={submitButton}
        type="submit"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.currentTarget && e.currentTarget.blur();
        }}
      >
        Send email
        <BiMailSend />
      </button>
      {sending && <SendingEmail data={request} fadeOut={fade} />}
    </form>
  );
};
