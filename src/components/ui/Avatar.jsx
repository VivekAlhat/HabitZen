import * as AvatarPrimitive from "@radix-ui/react-avatar";

const Avatar = ({ avatar, fallback }) => {
  return (
    <AvatarPrimitive.Root className="bg-blackA3 inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full align-middle cursor-pointer">
      <AvatarPrimitive.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={avatar}
        alt={fallback}
      />
      <AvatarPrimitive.Fallback
        className="text-violet11 bg-blackA3 leading-1 flex h-full w-full items-center justify-center text-[15px] font-medium"
        delayMs={600}
      >
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};

export default Avatar;
