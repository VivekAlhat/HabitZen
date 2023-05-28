import { createContext, useReducer } from "react";
import { ToastReducer } from "../lib/reducers";
import { v4 as uuidV4 } from "uuid";

import * as ToastPrimitive from "@radix-ui/react-toast";
import ToastContainer from "../components/ui/ToastContainer";

export const ToastContext = createContext();

const initialState = {
  toasts: [],
};

const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ToastReducer, initialState);

  const addToast = (title, content, type) => {
    const id = uuidV4();
    dispatch({ type: "ADD_TOAST", payload: { id, type, title, content } });
  };

  const removeToast = (id) => {
    dispatch({ type: "DELETE_TOAST", payload: id });
  };

  const success = (title, content) => {
    addToast(title, content, "success");
  };

  const error = (title, content) => {
    addToast(title, content, "error");
  };

  const value = { success, error, removeToast };

  return (
    <ToastContext.Provider value={value}>
      <ToastPrimitive.Provider swipeDirection="right">
        <ToastContainer toasts={state.toasts} />
        {children}
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
