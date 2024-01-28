import Card from "@/components/event/Card";
import RemoveEventButton from "./RemoveEventButton.jsx";
import { db } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

const RegisteredEventsPage = async () => {
  const session = await getServerAuthSession();
  if (!session) {
    redirect("/auth/login");
  }
  const userId = session.user.id;

  const registeredEvents = await db.eventRegisteredUser.findMany({
    where: {
      userId: userId,
    },
    select: {
      event: true,
    },
  });

  return (
    <div>
      <h1 className="p-8 text-xl font-semibold">Registered Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-11/12 mx-auto gap-8 md:gap-10">
        {registeredEvents.map((data, i) => (
          <Card
            key={i}
            event={data.event}
            showRegister={false}
            buttonComponent={
              <RemoveEventButton userId={userId} eventId={data.event.id} />
            }
          />
        ))}
        {registeredEvents.length === 0 && (
          <h1 className="">No event Registered Yet !!</h1>
        )}
      </div>
    </div>
  );
};

export default RegisteredEventsPage;
