import { requireAuth } from "@/lib/auth.utils";
import { caller } from "@/trpc/server";
import { Logout } from "@/lib/logout";
import { Button } from "@/components/ui/button";

const Page =  async() => {

  await requireAuth();

  
  await caller.createWorkflow();
  const data = await caller.getWorkflows();

 
  return (
    <div className="min-h-screen min-w-screen flex flex-col gap-6 items-center justify-center">{JSON.stringify({data})}
    <Logout/>
    </div>
    
  );
};

export default Page;
