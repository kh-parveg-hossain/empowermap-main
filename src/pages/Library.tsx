
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Search, Filter, List, Grid } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  imageUrl: string;
  readTime: string;
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
    readTime: '8 min read',
  },
  {
    id: '2',
    title: 'Digital Literacy Programs',
    description: 'How digital literacy initiatives are closing the educational gap in rural communities.',
    category: 'Education',
    tags: ['Digital', 'Education', 'Rural'],
    date: '2023-06-22',
    imageUrl: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a',
    readTime: '5 min read',
  },
  {
    id: '3',
    title: 'Clean Water Access Report',
    description: 'Latest research on global clean water accessibility and innovative solutions.',
    category: 'Health',
    tags: ['Water', 'Health', 'Research'],
    date: '2023-04-10',
    imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    readTime: '12 min read',
  },
  {
    id: '4',
    title: 'Community Organizing Toolkit',
    description: 'Practical strategies and tools for effective community organization and mobilization.',
    category: 'Community',
    tags: ['Organizing', 'Community', 'Toolkit'],
    date: '2023-07-05',
    imageUrl: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23',
    readTime: '10 min read',
  },
  {
    id: '5',
    title: 'Sustainable Urban Development',
    description: 'Case studies on transforming urban spaces for sustainability and community well-being.',
    category: 'Urban',
    tags: ['Urban', 'Sustainability', 'Development'],
    date: '2023-08-12',
    imageUrl: 'https://images.unsplash.com/photo-1527576539890-dfa815648363',
    readTime: '7 min read',
  },
  {
    id: '6',
    title: 'Indigenous Rights Framework',
    description: 'Understanding indigenous rights and their importance in conservation efforts.',
    category: 'Rights',
    tags: ['Indigenous', 'Rights', 'Conservation'],
    date: '2023-03-30',
    imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    readTime: '9 min read',
  },
  {
    id: '7',
    title: 'Ocean Conservation Strategies',
    description: 'Current approaches to preserving marine ecosystems and reducing plastic pollution.',
    category: 'Climate',
    tags: ['Ocean', 'Conservation', 'Plastic'],
    date: '2023-09-05',
    imageUrl: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
    readTime: '6 min read',
  },
  {
    id: '8',
    title: 'Gender Equality in Education',
    description: 'Research on creating inclusive learning environments and closing gender gaps.',
    category: 'Education',
    tags: ['Gender', 'Equality', 'Inclusion'],
    date: '2023-07-18',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    readTime: '11 min read',
  },
  {
    id: '9',
    title: 'Mental Health Advocacy',
    description: 'Resources for supporting mental health initiatives and reducing stigma.',
    category: 'Health',
    tags: ['Mental Health', 'Advocacy', 'Wellbeing'],
    date: '2023-08-22',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    readTime: '8 min read',
  },
];

const Library = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
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
    <Layout>
      <section className="py-12 lg:py-20">
        <div className="container-content">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Content Library</h1>
            <p className="text-muted-foreground">
              Explore our curated collection of resources, articles, and tools to deepen your understanding of various social causes.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 self-end">
              <Button variant="outline" size="icon" className="text-muted-foreground">
                <Filter size={18} />
              </Button>
              
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'text-primary-foreground' : 'text-muted-foreground'}
              >
                <Grid size={18} />
              </Button>
              
              <Button 
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'text-primary-foreground' : 'text-muted-foreground'}
              >
                <List size={18} />
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full mb-10">
            <TabsList className="grid grid-cols-4 lg:grid-cols-7 gap-2">
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
          
          {viewMode === 'grid' ? (
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
                    <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                      <span>
                        {new Date(resource.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span>{resource.readTime}</span>
                    </div>
                    
                    <Button variant="ghost" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="transition-all duration-300 hover:shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 h-48 md:h-auto overflow-hidden">
                      <img 
                        src={resource.imageUrl} 
                        alt={resource.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    <div className="md:w-3/4 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{resource.title}</h3>
                        <Badge variant="outline" className="capitalize">
                          {resource.category}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {resource.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>
                            {new Date(resource.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                          <span>{resource.readTime}</span>
                        </div>
                        
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
          
          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Library;
