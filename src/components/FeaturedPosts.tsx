import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredPosts = [
  {
    title: "Building Cost-Effective Cloud Infrastructure: A Complete Guide",
    excerpt: "Learn proven strategies to optimize your cloud spending while maintaining performance and reliability. From resource right-sizing to reserved instances.",
    category: "Cost Control",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    author: "Sarah Chen",
    featured: true
  },
  {
    title: "Implementing Zero-Downtime Deployments with Kubernetes",
    excerpt: "Master the art of seamless deployments using rolling updates, blue-green strategies, and canary releases in Kubernetes environments.",
    category: "DevOps",
    readTime: "12 min read", 
    date: "Dec 12, 2024",
    author: "Mike Rodriguez"
  },
  {
    title: "Platform Engineering: Building Developer-First Infrastructure",
    excerpt: "How to create internal platforms that boost developer productivity while maintaining security and operational excellence.",
    category: "Platform Engineering",
    readTime: "10 min read",
    date: "Dec 10, 2024", 
    author: "Alex Kim"
  },
  {
    title: "Cloud-Native Microservices Architecture Patterns",
    excerpt: "Essential patterns for building resilient, scalable microservices including circuit breakers, bulkheads, and service mesh integration.",
    category: "Architecture",
    readTime: "15 min read",
    date: "Dec 8, 2024",
    author: "Jennifer Wu"
  },
  {
    title: "Monitoring and Observability in Distributed Systems",
    excerpt: "Implement comprehensive monitoring strategies using OpenTelemetry, Prometheus, and distributed tracing for cloud-native applications.",
    category: "System Engineering", 
    readTime: "11 min read",
    date: "Dec 5, 2024",
    author: "David Park"
  },
  {
    title: "Security Best Practices for Cloud Infrastructure",
    excerpt: "A comprehensive guide to securing cloud environments including IAM, network security, encryption, and compliance frameworks.",
    category: "Best Practices",
    readTime: "14 min read",
    date: "Dec 3, 2024",
    author: "Lisa Thompson"
  }
];

const FeaturedPosts = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tutorials, and best practices in cloud engineering
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden hover:shadow-card transition-all duration-300">
              <div className="aspect-video bg-hero-gradient"></div>
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="default">{featuredPosts[0].category}</Badge>
                  <span className="text-sm text-muted-foreground">Featured</span>
                </div>
                <h3 className="text-2xl font-bold hover:text-primary transition-colors cursor-pointer">
                  {featuredPosts[0].title}
                </h3>
                <p className="text-muted-foreground">
                  {featuredPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{featuredPosts[0].author}</span>
                  <span>•</span>
                  <span>{featuredPosts[0].date}</span>
                  <span>•</span>
                  <span>{featuredPosts[0].readTime}</span>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Recent Posts */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Recent Posts</h3>
            {featuredPosts.slice(1, 4).map((post, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <h4 className="font-semibold hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* More Posts Grid */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-8">More Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.slice(4).map((post, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-muted"></div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <h4 className="font-semibold hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;