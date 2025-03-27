
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const InteractiveMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Simulated region data
  const regions = [
    { id: 'north-america', name: 'North America', issues: ['Climate Change', 'Healthcare Access', 'Housing Inequality'] },
    { id: 'south-america', name: 'South America', issues: ['Deforestation', 'Indigenous Rights', 'Economic Inequality'] },
    { id: 'europe', name: 'Europe', issues: ['Migration', 'Climate Action', 'Digital Rights'] },
    { id: 'africa', name: 'Africa', issues: ['Water Access', 'Education', 'Healthcare'] },
    { id: 'asia', name: 'Asia', issues: ['Climate Resilience', 'Labor Rights', 'Gender Equality'] },
    { id: 'oceania', name: 'Oceania', issues: ['Rising Sea Levels', 'Indigenous Rights', 'Conservation'] },
  ];
  
  // Get the current region
  const currentRegion = regions.find(region => region.id === selectedRegion);
  
  // In a real implementation, this would use a mapping library like Mapbox or Leaflet
  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleRegionClick = (regionId: string) => {
    setSelectedRegion(regionId);
  };
  
  return (
    <section className="py-20 bg-accent/30">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Global Causes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Navigate our interactive map to discover social causes and initiatives around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div 
              ref={mapContainerRef}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-border bg-card"
            >
              {!mapLoaded ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse text-muted-foreground">Loading map...</div>
                </div>
              ) : (
                <>
                  {/* This is a placeholder for the actual map implementation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-primary/10"></div>
                  
                  {/* Placeholder regions */}
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      className={`absolute rounded-full transition-all duration-300 ${
                        selectedRegion === region.id 
                          ? 'bg-primary scale-110' 
                          : 'bg-primary/50 hover:bg-primary/70'
                      }`}
                      style={{
                        ...getRegionPosition(region.id),
                        width: selectedRegion === region.id ? '30px' : '24px',
                        height: selectedRegion === region.id ? '30px' : '24px',
                      }}
                      onClick={() => handleRegionClick(region.id)}
                      aria-label={`Select ${region.name}`}
                    />
                  ))}
                  
                  <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
                    Interactive map visualization - click on a region to explore
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div>
            <Card className="h-full">
              <CardContent className="p-6">
                {selectedRegion ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold">{currentRegion?.name}</h3>
                      <p className="text-muted-foreground mt-2">
                        Explore the key social issues and initiatives in this region.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Key Issues:</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentRegion?.issues.map((issue) => (
                          <Badge key={issue} variant="outline">
                            {issue}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-border">
                      <h4 className="font-medium mb-2">Active Initiatives</h4>
                      <ul className="space-y-2">
                        <li className="text-sm text-muted-foreground">
                          • Community-led conservation projects
                        </li>
                        <li className="text-sm text-muted-foreground">
                          • Educational outreach programs
                        </li>
                        <li className="text-sm text-muted-foreground">
                          • Policy advocacy campaigns
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full" size="sm">
                        View Detailed Report
                      </Button>
                    </div>
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
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <a href="/map">Explore Full Map</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Helper function to position region markers
function getRegionPosition(regionId: string): React.CSSProperties {
  switch (regionId) {
    case 'north-america':
      return { top: '30%', left: '20%' };
    case 'south-america':
      return { top: '60%', left: '30%' };
    case 'europe':
      return { top: '25%', left: '48%' };
    case 'africa':
      return { top: '48%', left: '50%' };
    case 'asia':
      return { top: '35%', left: '70%' };
    case 'oceania':
      return { top: '65%', left: '80%' };
    default:
      return { top: '50%', left: '50%' };
  }
}

export default InteractiveMap;
