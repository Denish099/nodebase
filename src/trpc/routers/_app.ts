import { createTRPCRouter, protectedProcedure } from "../init";
import { prisma } from "@/lib/db";
import { inngest } from "@/inngest/client";

export const appRouter = createTRPCRouter({
  testAi: protectedProcedure.mutation(async () => {
    await inngest.send({ name: "execute.ai" });

    return { success: true, message: "job queued" };
  }),
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    console.log({ userid: ctx.auth.user.id });
    console.log(Object.keys(prisma));

    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "densih",
      },
    });
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
