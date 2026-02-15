"use client";

import { useTRPC } from "@/trpc/client";
import {
  QueryClient,
  useMutation,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useSuspenseWorkflows = () => {
  const trpc = useTRPC();

  return useSuspenseQuery(trpc.workflows.getMany.queryOptions());
};

export const useCreateWorkflow = () => {
  const queryClient = useQueryClient();
  const trpc = useTRPC();

  return useMutation(
    trpc.workflows.create.mutationOptions({
      onSuccess: (data) => {
        toast.success(`workflow ${data.name} added`);
        queryClient.invalidateQueries(trpc.workflows.getMany.queryOptions());
      },

      onError: (err) => {
        toast.error(`failed to create workflow ${err.message}`);
      },
    }),
  );
};
