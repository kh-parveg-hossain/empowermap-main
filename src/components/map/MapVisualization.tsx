
import { Button } from '@/components/ui/button';
import RegionTooltip from './RegionTooltip';

interface Region {
  id: string;
  name: string;
  description: string;
  issues: string[];
  initiatives: string[];
  coordinates: { top: string; left: string };
}

interface MapVisualizationProps {
  regions: Region[];
  selectedRegion: string | null;
  setSelectedRegion: (id: string) => void;
  mapLoaded: boolean;
}

const MapVisualization = ({ regions, selectedRegion, setSelectedRegion, mapLoaded }: MapVisualizationProps) => {
  return (
    <div className="lg:col-span-2">
      <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden border border-border bg-card">
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
              <RegionTooltip key={region.id} regionName={region.name} issueCount={region.issues.length}>
                <button
                  className={`absolute rounded-full transition-all duration-300 ${
                    selectedRegion === region.id 
                      ? 'bg-primary scale-110 shadow-md shadow-primary/20' 
                      : 'bg-primary/50 hover:bg-primary/70'
                  }`}
                  style={{
                    top: region.coordinates.top,
                    left: region.coordinates.left,
                    width: selectedRegion === region.id ? '30px' : '24px',
                    height: selectedRegion === region.id ? '30px' : '24px',
                  }}
                  onClick={() => setSelectedRegion(region.id)}
                  aria-label={`Select ${region.name}`}
                />
              </RegionTooltip>
            ))}
            
            <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
              Interactive map visualization - click on a region to explore
            </div>
          </>
        )}
      </div>
      
      {/* Region selection buttons for smaller screens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 lg:hidden">
        {regions.map((region) => (
          <Button
            key={region.id}
            variant={selectedRegion === region.id ? 'default' : 'outline'}
            size="sm"
            className="text-xs h-auto py-1.5"
            onClick={() => setSelectedRegion(region.id)}
          >
            {region.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MapVisualization;
