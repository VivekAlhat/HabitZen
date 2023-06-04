import Toast from "./ui/Toast";

const ToastContainer = ({ toasts }) => {
  return (
    <>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </>
  );
};

export default ToastContainer;
