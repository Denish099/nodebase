import { caller } from "@/trpc/server";
const Page = async() =>{
  const data = await caller.getUsers();
  return <div className="text-center items-center justify-center">{JSON.stringify({data})}</div>
}

export default Page;