const ToastReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TOAST": {
      return { ...state, toasts: [...state.toasts, payload] };
    }
    case "DELETE_TOAST": {
      const updatedToasts = state.toasts.filter(
        (toast) => toast.id !== payload
      );
      return {
        ...state,
        toasts: updatedToasts,
      };
    }
    default:
      throw new Error(`Unrecognized action: ${type}`);
  }
};

export { ToastReducer };
