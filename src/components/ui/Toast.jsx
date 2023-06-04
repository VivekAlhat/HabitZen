import * as ToastPrimitive from "@radix-ui/react-toast";
import useToast from "../../hooks/useToast";

import { AiFillCloseCircle } from "react-icons/ai";

const Toast = ({ title, content, type, id }) => {
  const toast = useToast();

  const handleToastDismiss = () => {
    toast.removeToast(id);
  };

  return (
    <>
      <ToastPrimitive.Root
        onOpenChange={handleToastDismiss}
        className={`${
          type === "error" ? "bg-red-500 text-white" : "bg-white"
        } rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut`}
      >
        <ToastPrimitive.Title className="[grid-area:_title] mb-[5px] font-medium text-[15px]">
          {title}
        </ToastPrimitive.Title>
        <ToastPrimitive.Description className="text-sm">
          {content}
        </ToastPrimitive.Description>
        <ToastPrimitive.Action
          className="[grid-area:_action]"
          asChild
          altText="Close toast notification"
          onClick={handleToastDismiss}
        >
          <AiFillCloseCircle className="cursor-pointer h-6 w-6" />
        </ToastPrimitive.Action>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className="[--viewport-padding:_25px] w-full fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] sm:w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </>
  );
};

export default Toast;
