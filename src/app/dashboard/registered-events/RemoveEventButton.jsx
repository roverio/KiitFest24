"use client";

import { removeUserFromEvent } from "./actions";
import { toast } from "sonner";

const RemoveEventButton = ({ userId, eventId }) => {
  return (
    <button
      className="text-[9.5px] mt-3 md:text-sm font-semibold border-2 border-red-900 bg-gradient-to-b from-red-500 to-red-400 text-white rounded-xl px-6 py-2"
      onClick={async () => {
        const res = await removeUserFromEvent(userId, eventId);
        if (res.success === true) toast.success(res.message);
        else toast.error(res.message);
      }}
    >
      Remove
    </button>
  );
};

export default RemoveEventButton;
