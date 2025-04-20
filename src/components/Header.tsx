
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="border-b sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto py-3 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            className="font-bold text-lg p-2" 
            onClick={() => navigate("/")}
          >
            <span className="gradient-text">RateLight</span>
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => navigate("/")}>
            Explore
          </Button>
          <Button size="sm" onClick={() => navigate("/add-review")}>
            Write a Review
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
