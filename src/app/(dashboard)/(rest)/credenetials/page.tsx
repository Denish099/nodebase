import { requireUnAuth } from "@/lib/auth.utils";

const Page =async () =>{
    await requireUnAuth();
    return <div>credentials</div>
}

export default Page;