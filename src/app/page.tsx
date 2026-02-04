import { requireAuth } from "@/lib/auth.utils";
import { caller } from "@/trpc/server";
import { Logout } from "@/lib/logout";

const Page =  async() => {

  await requireAuth();

  const data = await caller.getUsers();

 
  return (
    <div className="min-h-screen min-w-screen flex flex-col gap-6 items-center justify-center">{JSON.stringify({data})}
    <Logout/></div>
    
  );
};

export default Page;
