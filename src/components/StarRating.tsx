
import { Star } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating?: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  onChange?: (rating: number) => void;
  readOnly?: boolean;
}

export function StarRating({
  rating = 0,
  maxRating = 5,
  size = "md",
  onChange,
  readOnly = false,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [selectedRating, setSelectedRating] = useState<number>(rating);

  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const handleMouseEnter = (index: number) => {
    if (readOnly) return;
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverRating(0);
  };

  const handleClick = (index: number) => {
    if (readOnly) return;
    setSelectedRating(index);
    onChange?.(index);
  };

  return (
    <div className="flex gap-1 items-center">
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        const filled = hoverRating ? starValue <= hoverRating : starValue <= (readOnly ? rating : selectedRating);
        
        return (
          <Star
            key={index}
            className={cn(
              sizeClasses[size],
              "transition-all duration-100",
              filled ? "fill-yellow-400 text-yellow-400" : "text-gray-300 dark:text-gray-600",
              !readOnly && "cursor-pointer hover:scale-110"
            )}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          />
        );
      })}
    </div>
  );
}
