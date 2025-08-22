import { Button } from "@/components/ui/button";

const BlogHeader = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <div className="w-8 h-8 bg-cloud-gradient rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
              </svg>
            </div>
            <span className="font-bold text-xl">Eased</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <a className="text-sm font-medium transition-colors hover:text-primary" href="#devops">
              DevOps
            </a>
            <a className="text-sm font-medium transition-colors hover:text-primary" href="#architecture">
              Architecture
            </a>
            <a className="text-sm font-medium transition-colors hover:text-primary" href="#cost-control">
              Cost Control
            </a>
            <a className="text-sm font-medium transition-colors hover:text-primary" href="#platform">
              Platform Engineering
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;