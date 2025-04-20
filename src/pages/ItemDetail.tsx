
import { Header } from "@/components/Header";
import { getItemById, getReviewsForItem, getUserById } from "@/data/mockData";
import { useParams, useNavigate } from "react-router-dom";
import { StarRating } from "@/components/StarRating";
import { ReviewCard } from "@/components/ReviewCard";
import { ReviewForm } from "@/components/ReviewForm";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState<string>("newest");
  
  if (!id) {
    navigate("/");
    return null;
  }
  
  const item = getItemById(id);
  
  if (!item) {
    navigate("/");
    toast.error("Item not found");
    return null;
  }
  
  let reviews = getReviewsForItem(id);
  
  // Sort reviews based on selection
  if (sortOption === "newest") {
    reviews = [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (sortOption === "highest") {
    reviews = [...reviews].sort((a, b) => b.rating - a.rating);
  } else if (sortOption === "lowest") {
    reviews = [...reviews].sort((a, b) => a.rating - b.rating);
  } else if (sortOption === "helpful") {
    reviews = [...reviews].sort((a, b) => b.helpful - a.helpful);
  }
  
  const handleNewReview = () => {
    // In a real app, this would be implemented to handle the new review
    toast.success("Thanks for your feedback!");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto py-8 px-4 flex-1">
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={() => navigate(-1)}
        >
          ← Back
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="w-full md:w-1/3">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-60 md:h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
                <div className="flex items-center gap-2 mb-2">
                  <StarRating rating={item.avgRating} readOnly />
                  <span className="text-lg font-semibold">{item.avgRating.toFixed(1)}</span>
                  <span className="text-muted-foreground">({item.reviewCount} reviews)</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{item.category} · {item.address}</p>
                <p className="mb-4">{item.description}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Reviews</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="highest">Highest Rated</SelectItem>
                      <SelectItem value="lowest">Lowest Rated</SelectItem>
                      <SelectItem value="helpful">Most Helpful</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                {reviews.length > 0 ? (
                  reviews.map((review) => {
                    const user = getUserById(review.userId)!;
                    return (
                      <ReviewCard 
                        key={review.id} 
                        review={review} 
                        user={user} 
                        item={item} 
                      />
                    );
                  })
                ) : (
                  <p className="py-8 text-center text-muted-foreground">
                    No reviews yet. Be the first to leave a review!
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <ReviewForm item={item} onSubmit={handleNewReview} />
          </div>
        </div>
      </main>
      <footer className="border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 RateLight. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ItemDetail;
