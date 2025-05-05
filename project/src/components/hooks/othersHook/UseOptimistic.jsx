import { useOptimistic, useState, useTransition, useRef } from 'react';

const Comments = () => {
  const [messages, setMessages] = useState([{ text: 'Hello there!', sending: false, key: 1 }]);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef();

  const formAction = (formData) => {
    addOptimisticMessage(formData.get('message'));
    formRef.current.reset();
    startTransition(async () => {
      await sendMessageAction(formData);
    });
  };

  // useOptimistic is a hook that allows you to optimistically update the state of a component
  // It takes two arguments: the current state and a function that returns the new state
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      {
        text: newMessage,
        sending: true,
      },
      ...state,
    ],
  );

  const deliverMessage = async (message) => {
    await new Promise((res) => setTimeout(res, 1000));
    return message;
  };

  const sendMessageAction = async (formData) => {
    const sentMessage = await deliverMessage(formData.get('message'));
    startTransition(() => {
      setMessages((messages) => [{ text: sentMessage }, ...messages]);
    });
  };

  return (
    <>
      <form action={formAction} ref={formRef}>
        <input type='text' name='message' placeholder='Hello!' />
        <button type='submit'>Send</button>
      </form>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
    </>
  );
};

export default Comments;
