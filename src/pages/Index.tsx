
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ContentLibrary from '@/components/ContentLibrary';
import InteractiveMap from '@/components/InteractiveMap';
import DiscoveryTool from '@/components/DiscoveryTool';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <Layout className="bg-background">
      <Hero />
      
      <ContentLibrary />
      
      <InteractiveMap />
      
      <DiscoveryTool />
      
      <section className="py-20 bg-primary/5">
        <div className="container-content text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with like-minded individuals, share resources, and collaborate on projects that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Get Involved <ArrowRight size={16} />
            </Button>
            <Button variant="outline" size="lg">
              Contribute
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
