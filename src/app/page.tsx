import ArticleItem from "./components/ArticleItem";

export default function HomePage() {
  return (
    <main>
      <div className="top bg-orange-400">top</div>
      <div className="mr-2 bg-red-600">search</div>
      <div className="flex justify-between">
        {[0, 1, 2].map((item) => {
          return <ArticleItem key={item} />;
        })}
      </div>
    </main>
  );
}
