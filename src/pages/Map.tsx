
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import MapVisualization from '@/components/map/MapVisualization';
import RegionCard from '@/components/map/RegionCard';
import regions from '@/data/RegionsData';

const Map = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Simulated map loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Get the current region
  const currentRegion = regions.find(region => region.id === selectedRegion);
  
  return (
    <Layout>
      <section className="py-12 lg:py-20">
        <div className="container-content">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Interactive Global Map</h1>
            <p className="text-muted-foreground">
              Explore social causes and initiatives around the world. Select a region to discover local challenges and ongoing projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <MapVisualization 
              regions={regions}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              mapLoaded={mapLoaded}
            />
            
            <div>
              <RegionCard 
                currentRegion={currentRegion}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Map;
