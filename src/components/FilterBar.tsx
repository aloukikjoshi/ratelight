
import { Category } from "@/data/types";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Search } from "lucide-react";

interface FilterBarProps {
  categories: Category[];
  onFilterChange: (filters: {
    search: string;
    category: Category | "All";
    minRating: number;
  }) => void;
}

export function FilterBar({ categories, onFilterChange }: FilterBarProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");
  const [minRating, setMinRating] = useState(0);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onFilterChange({ search: value, category, minRating });
  };

  const handleCategoryChange = (value: Category | "All") => {
    setCategory(value);
    onFilterChange({ search, category: value, minRating });
  };

  const handleRatingChange = (value: number[]) => {
    setMinRating(value[0]);
    onFilterChange({ search, category, minRating: value[0] });
  };

  return (
    <div className="bg-card rounded-lg shadow-sm border p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search reviews or places..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <Select value={category} onValueChange={(val) => handleCategoryChange(val as Category | "All")}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <div className="flex flex-col">
          <div className="flex justify-between mb-2">
            <span className="text-sm">Min Rating</span>
            <span className="text-sm font-medium">{minRating} ★</span>
          </div>
          <Slider
            defaultValue={[minRating]}
            max={5}
            step={1}
            onValueChange={handleRatingChange}
            className="my-auto"
          />
        </div>
      </div>
    </div>
  );
}
