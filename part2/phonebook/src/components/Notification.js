const ErrNotif = ({ errMessage }) => {
  if (errMessage === null) return null;

  return (
    <>
      <h5 className="err-message">{errMessage}</h5>
    </>
  );
};

const SuccessNotif = ({ message }) => {
  if (message === null) return null;

  return (
    <>
      <h5 className="message">{message}</h5>
    </>
  );
};

const Notification = ({ message, errMessage }) => {
  return (
    <>
      <ErrNotif errMessage={errMessage} />
      <SuccessNotif message={message} />
    </>
  );
};

export default Notification;
