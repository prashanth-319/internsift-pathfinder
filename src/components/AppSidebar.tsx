import { LayoutDashboard, Search, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Search Internships", href: "/search", icon: Search },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function AppSidebar() {
  return (
    <div className="flex h-full w-64 flex-col bg-gradient-card border-r border-border shadow-custom-md">
      {/* Header */}
      <div className="flex h-16 items-center px-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Search className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-lg font-bold text-foreground">InternSift</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              end
              className={({ isActive }) =>
                cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                  "hover:bg-accent hover:text-accent-foreground",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-custom-glow"
                    : "text-muted-foreground"
                )
              }
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center px-4 py-2">
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-secondary-foreground">JS</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-foreground">John Student</p>
            <p className="text-xs text-muted-foreground">Computer Science</p>
          </div>
        </div>
      </div>
    </div>
  );
}