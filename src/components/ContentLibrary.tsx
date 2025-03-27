
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  imageUrl: string;
}

const RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'Understanding Climate Justice',
    description: 'A comprehensive guide to climate justice principles and global initiatives.',
    category: 'Climate',
    tags: ['Climate', 'Justice', 'Guide'],
    date: '2023-05-15',
    imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
  },
  {
    id: '2',
    title: 'Digital Literacy Programs',
    description: 'How digital literacy initiatives are closing the educational gap in rural communities.',
    category: 'Education',
    tags: ['Digital', 'Education', 'Rural'],
    date: '2023-06-22',
    imageUrl: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a',
  },
  {
    id: '3',
    title: 'Clean Water Access Report',
    description: 'Latest research on global clean water accessibility and innovative solutions.',
    category: 'Health',
    tags: ['Water', 'Health', 'Research'],
    date: '2023-04-10',
    imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
  },
  {
    id: '4',
    title: 'Community Organizing Toolkit',
    description: 'Practical strategies and tools for effective community organization and mobilization.',
    category: 'Community',
    tags: ['Organizing', 'Community', 'Toolkit'],
    date: '2023-07-05',
    imageUrl: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23',
  },
  {
    id: '5',
    title: 'Sustainable Urban Development',
    description: 'Case studies on transforming urban spaces for sustainability and community well-being.',
    category: 'Urban',
    tags: ['Urban', 'Sustainability', 'Development'],
    date: '2023-08-12',
    imageUrl: 'https://images.unsplash.com/photo-1527576539890-dfa815648363',
  },
  {
    id: '6',
    title: 'Indigenous Rights Framework',
    description: 'Understanding indigenous rights and their importance in conservation efforts.',
    category: 'Rights',
    tags: ['Indigenous', 'Rights', 'Conservation'],
    date: '2023-03-30',
    imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
  },
];

const ContentLibrary = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['all', 'climate', 'education', 'health', 'community', 'rights', 'urban'];
  
  const filteredResources = RESOURCES.filter((resource) => {
    const matchesCategory = activeTab === 'all' || resource.category.toLowerCase() === activeTab;
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <section className="py-20">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Content Library</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of resources, articles, and tools to deepen your understanding of various social causes.
          </p>
        </div>
        
        <div className="relative mb-8 max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full pl-10 pr-4 py-2 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full mb-10">
          <TabsList className="grid grid-cols-3 md:grid-cols-7 gap-2">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={resource.imageUrl} 
                  alt={resource.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <Badge variant="outline" className="capitalize">
                    {resource.category}
                  </Badge>
                </div>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">
                  {new Date(resource.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                
                <Button variant="ghost" size="sm" asChild>
                  <Link to={`/library/${resource.id}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/library">View Full Library</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentLibrary;
