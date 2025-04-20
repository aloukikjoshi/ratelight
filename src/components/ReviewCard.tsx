
import { Review, User, Item } from "@/data/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { StarRating } from "@/components/StarRating";
import { formatDistanceToNow } from "date-fns";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ReviewCardProps {
  review: Review;
  user: User;
  item: Item;
  showItemDetails?: boolean;
}

export function ReviewCard({ review, user, item, showItemDetails = false }: ReviewCardProps) {
  const [isHelpful, setIsHelpful] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);

  const toggleHelpful = () => {
    if (isHelpful) {
      setHelpfulCount(prev => prev - 1);
    } else {
      setHelpfulCount(prev => prev + 1);
    }
    setIsHelpful(!isHelpful);
  };

  return (
    <Card className="review-card w-full">
      <CardContent className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
            />
            <div>
              <h3 className="font-medium">{user.name}</h3>
              <p className="text-xs text-muted-foreground">
                {user.reviewCount} reviews
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <StarRating rating={review.rating} readOnly size="sm" />
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(review.date), { addSuffix: true })}
            </span>
          </div>
        </div>

        {showItemDetails && (
          <div className="mb-4 pb-4 border-b">
            <div className="flex items-center gap-3">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-16 h-16 rounded-md object-cover"
              />
              <div>
                <h3 className="font-medium text-base">{item.name}</h3>
                <p className="text-xs text-muted-foreground">{item.category}</p>
              </div>
            </div>
          </div>
        )}

        <p className="text-sm leading-relaxed">{review.comment}</p>
      </CardContent>
      <CardFooter className="px-6 py-4 flex justify-between border-t">
        <span className="text-xs text-muted-foreground">
          {review.images ? `${review.images.length} photos` : "No photos"}
        </span>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={toggleHelpful}
          className="flex items-center gap-1 text-xs"
        >
          <Heart className={`w-4 h-4 ${isHelpful ? "fill-red-500 text-red-500" : ""}`} />
          <span>{helpfulCount} {helpfulCount === 1 ? "person" : "people"} found this helpful</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
