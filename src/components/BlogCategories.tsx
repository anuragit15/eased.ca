import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "Cloud Consulting",
    description: "Strategic guidance for cloud adoption and migration",
    icon: "☁️",
    posts: 12
  },
  {
    title: "DevOps",
    description: "Automation, CI/CD, and development practices",
    icon: "🔧",
    posts: 18
  },
  {
    title: "Cloud Native Architecture",
    description: "Microservices, containers, and modern app design",
    icon: "🏗️",
    posts: 15
  },
  {
    title: "System Engineering",
    description: "Infrastructure, monitoring, and system design",
    icon: "⚙️",
    posts: 14
  },
  {
    title: "Cloud Cost Control",
    description: "Optimization strategies and cost management",
    icon: "💰",
    posts: 10
  },
  {
    title: "Platform Engineering",
    description: "Developer platforms and internal tooling",
    icon: "🚀",
    posts: 13
  },
  {
    title: "System Design",
    description: "Scalable architectures and design patterns",
    icon: "📐",
    posts: 16
  },
  {
    title: "Cloud Best Practices",
    description: "Security, governance, and operational excellence",
    icon: "✅",
    posts: 11
  }
];

const BlogCategories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Topics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dive deep into the latest trends and best practices in cloud engineering and DevOps
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <div className="text-xs text-primary font-medium">
                  {category.posts} posts
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;