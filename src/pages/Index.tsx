import BlogHeader from "@/components/BlogHeader";
import BlogHero from "@/components/BlogHero";
import BlogCategories from "@/components/BlogCategories";
import FeaturedPosts from "@/components/FeaturedPosts";
import BlogFooter from "@/components/BlogFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <BlogHero />
      <BlogCategories />
      <FeaturedPosts />
      <BlogFooter />
    </div>
  );
};

export default Index;
