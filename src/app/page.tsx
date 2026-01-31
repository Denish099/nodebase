import { prisma } from "@/lib/db";

const Page = async() =>{
  const data = await prisma.post.findMany();
  return <div className="text-center items-center justify-center">{JSON.stringify({data})}</div>
}

export default Page;