import MaxWidthWrapper from "@/components/max-width-wrapper";

const ViewNewsPage = () => {
  return (
    <section>
      <MaxWidthWrapper className="p-y ">
        <h1>h</h1>
        {/* <Suspense
          fallback={
            <>
              <NewsSkeleton />
            </>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-y">
            <RenderNews />
          </div>
        </Suspense> */}
      </MaxWidthWrapper>
    </section>
  );
};

export default ViewNewsPage;

// async function RenderNews() {
//   const news = await getCachedNews();

//   if (!news.length) {
//     return <p>No news found.</p>;
//   }

//   return <NewsThumbnail news={news} isEditable />;
// }
