import { RegistarForm } from "@/features/auth/components/register-forum";
import { requireUnAuth } from "@/lib/auth.utils";

const Page = async() =>{
    await requireUnAuth();
    return (<div><RegistarForm></RegistarForm></div>)

}

export default Page;