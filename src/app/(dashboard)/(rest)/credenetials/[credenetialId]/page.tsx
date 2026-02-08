interface pageProps {
  params: Promise<{
    credenetialId: string;
  }>;
}

const Page = async ({ params }: pageProps) => {
  const { credenetialId } = await params;

  return <div>credenetials id : {credenetialId} </div>;
};

export default Page;
