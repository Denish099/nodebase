import { prefetchWorkflows } from "@/features/workflows/server/prefetch";
import { requireAuth } from "@/lib/auth.utils";
import { HydrateClient } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import {
  WorkflowList,
  WorkflowsContainer,
} from "@/features/workflows/components/workflows";

type Props = {
  searchParams: Promise<SearchParams>,

}

import { workflowsParamsLoader } from "@/features/workflows/server/params-loader";
import { SearchParams } from "nuqs/server";

const Page = async ({searchParams}: Props) => {
  await requireAuth();

  const params = await  workflowsParamsLoader(searchParams);

  prefetchWorkflows(params);

  return (
    <WorkflowsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<p>Error?</p>}>
          <Suspense fallback={<p>Loading</p>}>
            <WorkflowList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </WorkflowsContainer>
  );
};

export default Page;
