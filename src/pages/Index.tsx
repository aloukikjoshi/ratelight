
import { Header } from "@/components/Header";
import { FilterBar } from "@/components/FilterBar";
import { ItemCard } from "@/components/ItemCard";
import { ReviewCard } from "@/components/ReviewCard";
import { items, reviews, users, getAllCategories, getUserById, getItemById } from "@/data/mockData";
import { useEffect, useState } from "react";
import { Category, Item, Review } from "@/data/types";

const Index = () => {
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);
  const [recentReviews, setRecentReviews] = useState<Review[]>([]);
  const categories = getAllCategories();

  useEffect(() => {
    // Get recent reviews
    const sortedReviews = [...reviews].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setRecentReviews(sortedReviews.slice(0, 3));
  }, []);

  const handleFilterChange = ({
    search,
    category,
    minRating,
  }: {
    search: string;
    category: Category | "All";
    minRating: number;
  }) => {
    let filtered = [...items];

    // Filter by category
    if (category !== "All") {
      filtered = filtered.filter((item) => item.category === category);
    }

    // Filter by minimum rating
    filtered = filtered.filter((item) => item.avgRating >= minRating);

    // Filter by search term
    if (search.trim() !== "") {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower)
      );
    }

    setFilteredItems(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto py-8 px-4 flex-1">
        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-2 text-center">
            Discover and Share Experiences
          </h1>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Find the best places, read honest reviews, and share your own experiences with the community.
          </p>

          <FilterBar
            categories={categories}
            onFilterChange={handleFilterChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
            {filteredItems.length === 0 && (
              <div className="col-span-full py-12 text-center">
                <h3 className="text-lg font-medium mb-2">No results found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search term
                </p>
              </div>
            )}
          </div>
        </section>

        {recentReviews.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Recent Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentReviews.map((review) => {
                const user = getUserById(review.userId)!;
                const item = getItemById(review.itemId)!;
                return (
                  <ReviewCard
                    key={review.id}
                    review={review}
                    user={user}
                    item={item}
                    showItemDetails={true}
                  />
                );
              })}
            </div>
          </section>
        )}
      </main>
      <footer className="border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 RateLight. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
