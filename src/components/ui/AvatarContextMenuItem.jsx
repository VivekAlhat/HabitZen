const AvatarContextMenuItem = ({ children, text }) => {
  return (
    <div className="flex items-center gap-3">
      {children}
      <p>{text}</p>
    </div>
  );
};

export default AvatarContextMenuItem;
