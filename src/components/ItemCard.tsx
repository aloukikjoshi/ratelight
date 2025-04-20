
import { Item } from "@/data/types";
import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "@/components/StarRating";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/${item.id}`);
  };

  return (
    <Card 
      className="review-card cursor-pointer overflow-hidden flex flex-col"
      onClick={handleClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-foreground">
          {item.category}
        </Badge>
      </div>
      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <div className="flex items-center gap-1">
            <StarRating rating={item.avgRating} readOnly size="sm" />
            <span className="text-xs font-medium ml-1">{item.avgRating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{item.description}</p>
        <p className="text-xs text-muted-foreground mt-auto">
          {item.reviewCount} {item.reviewCount === 1 ? "review" : "reviews"} · {item.address}
        </p>
      </CardContent>
    </Card>
  );
}
