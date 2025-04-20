
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { StarRating } from "@/components/StarRating";
import { Item } from "@/data/types";
import { toast } from "sonner";

interface ReviewFormProps {
  item: Item;
  onSubmit?: (reviewData: {
    rating: number;
    comment: string;
    itemId: string;
  }) => void;
}

export function ReviewForm({ item, onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    
    if (comment.trim().length < 10) {
      toast.error("Review must be at least 10 characters");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onSubmit?.({
        rating,
        comment,
        itemId: item.id
      });
      
      toast.success("Your review has been submitted!");
      setRating(0);
      setComment("");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Write a Review for {item.name}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Your Rating</label>
            <StarRating 
              rating={rating} 
              onChange={setRating} 
              size="lg" 
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="comment" className="text-sm font-medium">Your Review</label>
            <Textarea
              id="comment"
              placeholder="Share your experience with this place..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
