
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      { ref: titleRef, delay: 0 },
      { ref: subtitleRef, delay: 100 },
      { ref: actionsRef, delay: 200 }
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('opacity-100', 'translate-y-0');
          ref.current?.classList.remove('opacity-0', 'translate-y-4');
        }, delay);
      }
    });
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 hero-bg"></div>
      
      {/* Content */}
      <div className="container-content relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="header-text opacity-0 translate-y-4 transition-all duration-700 ease-out"
          >
            Empowering Change Through <span className="text-primary">Knowledge</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="mt-6 text-lg md:text-xl text-muted-foreground opacity-0 translate-y-4 transition-all duration-700 ease-out delay-100"
          >
            Discover, learn, and connect with social causes around the world. 
            Our open-source platform provides the tools and resources to help you 
            make a meaningful impact in your community and beyond.
          </p>
          
          <div 
            ref={actionsRef}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 translate-y-4 transition-all duration-700 ease-out delay-200"
          >
            <Button size="lg" className="rounded-full px-8">
              Explore Causes
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 gap-2"
              asChild
            >
              <Link to="/discover">
                Find Your Passion <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Floating cards - provide visual interest */}
        <div className="mt-20 relative h-[300px] md:h-[400px]">
          <div className="absolute glass rounded-2xl p-6 w-[260px] top-0 left-[10%] animate-[float_6s_ease-in-out_infinite] shadow-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <h3 className="text-lg font-medium mb-2">Climate Action</h3>
            <p className="text-sm text-muted-foreground">Initiatives and resources for addressing climate change at local and global levels.</p>
          </div>
          
          <div className="absolute glass rounded-2xl p-6 w-[280px] top-[30%] right-[15%] animate-[float_8s_ease-in-out_infinite] shadow-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <h3 className="text-lg font-medium mb-2">Education Equity</h3>
            <p className="text-sm text-muted-foreground">Promoting equal access to quality education for underserved communities worldwide.</p>
          </div>
          
          <div className="absolute glass rounded-2xl p-6 w-[240px] bottom-0 left-[25%] animate-[float_7s_ease-in-out_infinite] shadow-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <h3 className="text-lg font-medium mb-2">Public Health</h3>
            <p className="text-sm text-muted-foreground">Initiatives focusing on healthcare accessibility and disease prevention.</p>
          </div>
        </div>
      </div>
      
      {/* Soft gradient overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
