import * as AvatarPrimitive from "@radix-ui/react-avatar";

const Avatar = ({ avatar }) => {
  return (
    <AvatarPrimitive.Root className="bg-blackA3 inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full align-middle cursor-pointer dark:bg-white/90">
      <AvatarPrimitive.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={avatar}
        alt="User Avatar"
      />
      <AvatarPrimitive.Fallback
        className="text-violet11 bg-blackA3 leading-1 flex h-full w-full items-center justify-center text-[15px] font-medium"
        delayMs={600}
      >
        <img src="/assets/default.png" alt="Default Avatar" />
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};

export default Avatar;
