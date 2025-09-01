import { Upload, Eye, Edit, TrendingUp, Users, Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const stats = [
  { name: "Total Applications", value: "23", change: "+12%", icon: FileText, color: "text-primary" },
  { name: "Match Rate", value: "78%", change: "+5%", icon: TrendingUp, color: "text-success" },
  { name: "Skill Score", value: "8.5", change: "+0.3", icon: Award, color: "text-secondary" },
  { name: "Profile Views", value: "142", change: "+18", icon: Users, color: "text-warning" },
];

const skills = {
  strengths: ["JavaScript", "React", "Python", "Problem Solving", "Communication"],
  improvements: ["Machine Learning", "DevOps", "System Design", "Data Structures"]
};

const recommendations = [
  {
    role: "Frontend Developer Intern",
    company: "TechCorp",
    match: 92,
    location: "Remote",
    skills: ["React", "JavaScript", "CSS"]
  },
  {
    role: "Software Engineering Intern",
    company: "StartupXYZ", 
    match: 87,
    location: "San Francisco, CA",
    skills: ["Python", "Django", "PostgreSQL"]
  },
  {
    role: "Data Analyst Intern",
    company: "DataFlow Inc",
    match: 74,
    location: "New York, NY",
    skills: ["Python", "SQL", "Analytics"]
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-48 rounded-xl overflow-hidden bg-gradient-primary">
        <img 
          src={heroDashboard} 
          alt="Dashboard Hero" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center px-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, John!</h1>
            <p className="text-lg text-white/90">Ready to find your next opportunity?</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name} className="bg-gradient-stat border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-300 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change} from last month</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Resume Section */}
        <Card className="lg:col-span-1 shadow-custom-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2 text-primary" />
              Resume Management
            </CardTitle>
            <CardDescription>Keep your resume updated and optimized</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm text-muted-foreground mb-4">
              Last updated: 2 days ago
            </div>
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Upload New Version
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Edit className="w-4 h-4 mr-2" />
                Update Current
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Eye className="w-4 h-4 mr-2" />
                Preview Resume
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="lg:col-span-2 shadow-custom-md border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-secondary" />
              Skills Assessment
            </CardTitle>
            <CardDescription>Track your strengths and areas for improvement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-success mb-3">Strengths</h4>
                <div className="space-y-2">
                  {skills.strengths.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                      <span className="text-sm text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-warning mb-3">Areas to Improve</h4>
                <div className="space-y-2">
                  {skills.improvements.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                      <span className="text-sm text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommended Internships */}
      <Card className="shadow-custom-md border-0">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-primary" />
            Recommended for You
          </CardTitle>
          <CardDescription>Internships matched to your profile</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendations.map((internship, index) => (
              <div key={index} className="p-4 border border-border rounded-lg hover:shadow-custom-md transition-all duration-200 animate-slide-up">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{internship.role}</h4>
                    <p className="text-sm text-muted-foreground">{internship.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{internship.match}%</div>
                    <div className="text-xs text-muted-foreground">match</div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{internship.location}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {internship.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <Button size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}