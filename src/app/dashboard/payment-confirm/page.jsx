import { getServerAuthSession } from "@/server/auth";
import { initiatePayment } from "@/lib/utils";
import { db } from "@/server/db";
import { redirect } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const page = async () => {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/auth/login");
  }

  const userId = session?.user?.id;

  const userData = await db.user.findUnique({
    where: { id: userId },
    select: {
      kfid: true,
      name: true,
      isPaymentCompleted: true,
      merchandise: true,
      isKiitStudent: true,
    },
  });

  if (userData.isPaymentCompleted) {
    return null;
  }
  const amountToPay = userData.isKiitStudent ? 450 : 700;
  return (
    // this is not a server action which, this just returns the url for my form action
    <div className="max-w-4xl mx-auto leading-7">
      <h1 className="pb-8 text-2xl font-semibold">Payment overview -:</h1>
      <p className="">Amount : ₹{amountToPay}</p>
      {/* <p className="inline-flex gap-2 items-center">
        Merchandise Selected : {userData.merchandise ? <FaCheck /> : <FaX />}
      </p> */}
      <p className="mb-4">
        Kiit Student : {userData.isKiitStudent ? "Yes" : "No"}
      </p>
      <p className="mb-4">
        Please ensure that you see ₹450 if you are from KIIT University, or ₹700
        if you are from another university. If a different amount is shown,
        please contact our tech team.
      </p>
      <p className="mb-2">
        All payments will be validated later and failure to meet the above terms
        may result in disqualification.
      </p>

      <p className="mb-2 text-yellow-400 font-medium tracking-wide">
        ⚠️ Important: As there were some issues faced with UPI recently, we recommend using a Debit card(no convenience fee) or Credit card for the payment. Make sure the online/merchant transaction is on.
      </p>
      <p className="mb-2">
        By proceeding to payment, I {userData.name} hereby adhere that my
        payment is not refundable and the above conditions are met.
      </p>
      <form method="post" action={initiatePayment(userData.kfid, amountToPay)}>
        <button
          className="text-sm lg:text-[17px] font-semibold bg-gradient-to-b from-[#174ACE] rounded-full border-white border-[2px] to-[#16B2DB] px-4 py-1 my-2 lg:px-9 lg:py-3"
          type="submit"
        >
          Proceed to gateway
        </button>
      </form>
    </div>
  );
};

export default page;
