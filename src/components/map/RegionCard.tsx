
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

interface Region {
  id: string;
  name: string;
  description: string;
  issues: string[];
  initiatives: string[];
  coordinates: { top: string; left: string };
}

interface RegionCardProps {
  currentRegion: Region | undefined;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const RegionCard = ({ 
  currentRegion, 
  searchQuery, 
  setSearchQuery, 
  activeTab, 
  setActiveTab 
}: RegionCardProps) => {
  // Filter initiatives by search query
  const filteredInitiatives = currentRegion?.initiatives.filter(
    initiative => initiative.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <Card className="h-full">
      <CardContent className="p-6">
        {currentRegion ? (
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold">{currentRegion.name}</h2>
              <p className="text-muted-foreground mt-2">
                {currentRegion.description}
              </p>
            </div>
            
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="pt-4 space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Key Issues</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentRegion.issues.map((issue) => (
                      <Badge key={issue} variant="outline">
                        {issue}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Regional Statistics</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Population affected: 120M+</li>
                    <li>• Organizations active: 500+</li>
                    <li>• Funding allocated: $1.2B</li>
                    <li>• Projects in progress: 230</li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full" size="sm">
                    Download Region Report
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="initiatives" className="pt-4 space-y-4">
                <div className="relative mb-4">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={16} className="text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search initiatives..."
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  {filteredInitiatives.length > 0 ? (
                    filteredInitiatives.map((initiative) => (
                      <div 
                        key={initiative} 
                        className="p-3 border border-border rounded-md hover:border-primary/50 hover:bg-accent/50 transition-colors cursor-pointer"
                      >
                        <p className="font-medium text-sm">{initiative}</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      No initiatives found matching your search.
                    </div>
                  )}
                </div>
                
                <div className="pt-4 space-y-2">
                  <Button className="w-full" size="sm" variant="outline">
                    Submit New Initiative
                  </Button>
                  <Button className="w-full" size="sm">
                    Connect with Others in This Region
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-3 py-12">
            <div className="text-muted-foreground text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-medium">Select a Region</h3>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
              Click on a highlighted area of the map to explore social causes specific to that region.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RegionCard;
