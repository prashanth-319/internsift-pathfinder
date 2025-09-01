import { useState } from "react";
import { Search, MapPin, Filter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const internships = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    remote: true,
    skills: ["React", "JavaScript", "CSS", "HTML"],
    description: "Join our frontend team to build modern web applications using React and TypeScript.",
    posted: "2 days ago",
    applicants: 45
  },
  {
    id: 2,
    role: "Backend Engineer Intern",
    company: "DataFlow Solutions",
    location: "New York, NY",
    remote: false,
    skills: ["Python", "Django", "PostgreSQL", "AWS"],
    description: "Work with our backend team to develop scalable APIs and database solutions.",
    posted: "1 week ago", 
    applicants: 32
  },
  {
    id: 3,
    role: "Full Stack Developer Intern",
    company: "StartupXYZ",
    location: "Austin, TX",
    remote: true,
    skills: ["Node.js", "React", "MongoDB", "Express"],
    description: "Build end-to-end features in our fast-paced startup environment.",
    posted: "3 days ago",
    applicants: 67
  },
  {
    id: 4,
    role: "Data Science Intern",
    company: "Analytics Pro",
    location: "Seattle, WA",
    remote: true,
    skills: ["Python", "Machine Learning", "Pandas", "Jupyter"],
    description: "Analyze large datasets and build predictive models for business insights.",
    posted: "5 days ago",
    applicants: 28
  },
  {
    id: 5,
    role: "Mobile Developer Intern",
    company: "AppWorks Studio",
    location: "Los Angeles, CA",
    remote: false,
    skills: ["React Native", "iOS", "Android", "Firebase"],
    description: "Develop cross-platform mobile applications for iOS and Android.",
    posted: "1 day ago",
    applicants: 19
  },
  {
    id: 6,
    role: "DevOps Intern",
    company: "CloudTech Systems",
    location: "Denver, CO", 
    remote: true,
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    description: "Help maintain and scale our cloud infrastructure and deployment pipelines.",
    posted: "4 days ago",
    applicants: 23
  }
];

const locations = ["All Locations", "San Francisco, CA", "New York, NY", "Austin, TX", "Seattle, WA", "Los Angeles, CA", "Denver, CO"];

export default function SearchInternships() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const { toast } = useToast();

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         internship.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLocation = selectedLocation === "All Locations" || internship.location === selectedLocation;
    
    const matchesRemote = !remoteOnly || internship.remote;
    
    return matchesSearch && matchesLocation && matchesRemote;
  });

  const handleApply = (internshipId: number, role: string, company: string) => {
    toast({
      title: "Applied Successfully! 🎉",
      description: `Your application for ${role} at ${company} has been submitted.`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Search Internships</h1>
        <p className="text-muted-foreground">Find the perfect internship opportunity for your career</p>
      </div>

      {/* Filters */}
      <Card className="shadow-custom-md border-0">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="w-5 h-5 mr-2 text-primary" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search roles, companies, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <MapPin className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Remote Filter */}
            <div className="flex items-center space-x-2">
              <Switch
                id="remote-only"
                checked={remoteOnly}
                onCheckedChange={setRemoteOnly}
              />
              <label htmlFor="remote-only" className="text-sm font-medium">
                Remote Only
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing {filteredInternships.length} of {internships.length} internships
        </p>
      </div>

      {/* Internship Listings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredInternships.map((internship) => (
          <Card key={internship.id} className="shadow-custom-md border-0 hover:shadow-custom-lg transition-all duration-300 animate-fade-in">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{internship.role}</CardTitle>
                  <CardDescription className="text-base font-medium text-foreground mt-1">
                    {internship.company}
                  </CardDescription>
                </div>
                {internship.remote && (
                  <Badge variant="secondary" className="ml-2">
                    Remote
                  </Badge>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Location */}
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{internship.location}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {internship.description}
              </p>

              {/* Skills */}
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Required Skills:</p>
                <div className="flex flex-wrap gap-1">
                  {internship.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Meta Information */}
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                <span>Posted {internship.posted}</span>
                <span>{internship.applicants} applicants</span>
              </div>

              {/* Actions */}
              <div className="flex space-x-2 pt-2">
                <Button 
                  className="flex-1"
                  onClick={() => handleApply(internship.id, internship.role, internship.company)}
                >
                  Apply Now
                </Button>
                <Button variant="outline" size="icon">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredInternships.length === 0 && (
        <Card className="text-center p-12">
          <CardContent>
            <Search className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No internships found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}