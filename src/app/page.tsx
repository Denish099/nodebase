import { getQueryClient, trpc } from "@/trpc/server";
import { Client } from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
const Page = async () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className="text-center items-center justify-center">
      <HydrationBoundary state={dehydrate(queryClient )}>
        <Client></Client>
      </HydrationBoundary>
    </div>
  );
};

export default Page;
