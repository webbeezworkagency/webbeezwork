import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1,2,3,4,5,6].map((item) => (
          <Card key={item} className="bg-card border-border">
            <CardContent className="p-4">
              <img src="/placeholder.svg" alt={`Project ${item}`} className="w-full h-32 object-cover rounded mb-2" />
              <div className="font-semibold">Project {item}</div>
              <div className="text-sm text-muted-foreground">Short project description goes here.</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio; 
