const BlogFooter = () => {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cloud-gradient rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                </svg>
              </div>
              <span className="font-bold text-lg">Eased</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted source for cloud engineering insights, DevOps best practices, and platform engineering expertise.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Topics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Consulting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">DevOps</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Architecture</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cost Control</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">System Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Platform Engineering</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Best Practices</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Newsletter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">RSS Feed</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Eased. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;