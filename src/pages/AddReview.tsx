
import { Header } from "@/components/Header";
import { items } from "@/data/mockData";
import { Item } from "@/data/types";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ItemCard } from "@/components/ItemCard";
import { toast } from "sonner";
import { Search } from "lucide-react";

const AddReview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto py-8 px-4 flex-1">
        <h1 className="text-3xl font-bold mb-6">Write a Review</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Find a place to review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for a restaurant, hotel, shop, etc."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-9"
              />
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => <ItemCard key={item.id} item={item} />)
          ) : (
            <div className="col-span-full py-12 text-center">
              <h3 className="text-lg font-medium mb-2">No places found</h3>
              <p className="text-muted-foreground">
                Try searching for something else
              </p>
            </div>
          )}
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

export default AddReview;
