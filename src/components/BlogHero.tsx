import { Button } from "@/components/ui/button";
import heroImage from "@/assets/cloud-hero.jpg";

const BlogHero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20 lg:py-32">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Cloud Engineering 
                <span className="bg-cloud-gradient bg-clip-text text-transparent"> Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Expert insights on cloud consulting, DevOps, architecture, and platform engineering. 
                Learn best practices for building scalable, cost-effective cloud solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Read Latest Posts
              </Button>
              <Button variant="outline" size="lg">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-hero">
              <img 
                src={heroImage} 
                alt="Cloud infrastructure and technology" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cloud-gradient rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;