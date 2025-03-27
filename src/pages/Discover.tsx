
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight } from 'lucide-react';

interface Cause {
  id: string;
  title: string;
  description: string;
  match: number;
  tags: string[];
  imageUrl: string;
  skills: string[];
  organizations: { name: string; website: string }[];
}

const causesData: Cause[] = [
  {
    id: '1',
    title: 'Climate Justice',
    description: 'Addressing the disproportionate impacts of climate change on vulnerable communities through policy, education, and community action.',
    match: 92,
    tags: ['Environment', 'Justice', 'Policy'],
    imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
    skills: ['Research', 'Communication', 'Organization', 'Policy Analysis'],
    organizations: [
      { name: 'Climate Justice Alliance', website: '#' },
      { name: 'Earth Rights International', website: '#' },
      { name: 'Indigenous Environmental Network', website: '#' },
    ],
  },
  {
    id: '2',
    title: 'Digital Rights',
    description: 'Advocating for privacy, accessibility, and freedom in the digital world through research, education, and policy development.',
    match: 88,
    tags: ['Technology', 'Rights', 'Privacy'],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    skills: ['Programming', 'Legal Analysis', 'Research', 'Writing'],
    organizations: [
      { name: 'Electronic Frontier Foundation', website: '#' },
      { name: 'Digital Rights Watch', website: '#' },
      { name: 'Access Now', website: '#' },
    ],
  },
  {
    id: '3',
    title: 'Food Security',
    description: 'Working to ensure all people have reliable access to nutritious, affordable food through policy, community programs, and sustainable agriculture.',
    match: 85,
    tags: ['Hunger', 'Agriculture', 'Health'],
    imageUrl: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23',
    skills: ['Agriculture', 'Community Organizing', 'Logistics', 'Nutrition'],
    organizations: [
      { name: 'Food First', website: '#' },
      { name: 'World Food Programme', website: '#' },
      { name: 'Community Food Security Coalition', website: '#' },
    ],
  },
  {
    id: '4',
    title: 'Racial Equity',
    description: 'Dismantling systemic racism and promoting equal opportunities for all through education, policy reform, and community empowerment.',
    match: 79,
    tags: ['Justice', 'Equality', 'Community'],
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    skills: ['Education', 'Community Organizing', 'Policy Analysis', 'Communications'],
    organizations: [
      { name: 'Race Forward', website: '#' },
      { name: 'Equal Justice Initiative', website: '#' },
      { name: 'Color of Change', website: '#' },
    ],
  },
  {
    id: '5',
    title: 'Mental Health Advocacy',
    description: 'Promoting mental health awareness, reducing stigma, and improving access to quality care for all people.',
    match: 76,
    tags: ['Health', 'Advocacy', 'Education'],
    imageUrl: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
    skills: ['Psychology', 'Communications', 'Fundraising', 'Support'],
    organizations: [
      { name: 'Mental Health America', website: '#' },
      { name: 'National Alliance on Mental Illness', website: '#' },
      { name: 'Strong Minds', website: '#' },
    ],
  },
  {
    id: '6',
    title: 'Early Childhood Education',
    description: 'Ensuring all children have access to quality early education that supports their cognitive, social, and emotional development.',
    match: 72,
    tags: ['Education', 'Children', 'Development'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    skills: ['Teaching', 'Curriculum Development', 'Child Development', 'Administration'],
    organizations: [
      { name: 'National Association for the Education of Young Children', website: '#' },
      { name: 'Zero to Three', website: '#' },
      { name: 'Global Partnership for Education', website: '#' },
    ],
  },
];

const steps = [
  {
    id: 'interests',
    title: 'What interests you?',
    options: ['Environment', 'Education', 'Health', 'Poverty', 'Human Rights', 'Technology', 'Arts & Culture', 'Animal Welfare'],
  },
  {
    id: 'skills',
    title: 'What skills can you contribute?',
    options: ['Research', 'Writing', 'Design', 'Programming', 'Teaching', 'Public Speaking', 'Organization', 'Fundraising'],
  },
  {
    id: 'values',
    title: 'What values drive you?',
    options: ['Justice', 'Compassion', 'Innovation', 'Community', 'Sustainability', 'Equality', 'Independence', 'Cooperation'],
  },
  {
    id: 'time',
    title: 'How much time can you commit?',
    options: ['1-2 hours/week', '3-5 hours/week', '6-10 hours/week', '10+ hours/week', 'Project-based', 'Full-time'],
  },
];

const Discover = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string[]>>({
    interests: [],
    skills: [],
    values: [],
    time: [],
  });
  const [activeTab, setActiveTab] = useState('quiz');
  const [selectedCause, setSelectedCause] = useState<string | null>(null);
  
  const currentStepData = steps[currentStep];
  
  const handleSelectOption = (option: string) => {
    const currentCategory = currentStepData.id;
    const currentSelections = selectedAnswers[currentCategory] || [];
    
    if (currentSelections.includes(option)) {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentCategory]: currentSelections.filter(item => item !== option),
      });
    } else {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentCategory]: [...currentSelections, option],
      });
    }
  };
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Finished all steps - show results
      setActiveTab('results');
    }
  };
  
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const isOptionSelected = (option: string) => {
    const currentCategory = currentStepData.id;
    return selectedAnswers[currentCategory]?.includes(option) || false;
  };
  
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;
  
  const currentCause = causesData.find(cause => cause.id === selectedCause);
  
  return (
    <Layout>
      <section className="py-12 lg:py-20">
        <div className="container-content">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Discover Your Passion</h1>
            <p className="text-muted-foreground">
              Answer a few questions to find social causes that align with your interests, skills, values, and availability.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="quiz" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
                <TabsTrigger value="quiz">Discovery Quiz</TabsTrigger>
                <TabsTrigger value="results">Suggested Causes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="quiz" className="space-y-6">
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Step {currentStep + 1} of {steps.length}</span>
                    <span>{Math.round(progressPercentage)}% Complete</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>
                
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle>{currentStepData.title}</CardTitle>
                    <CardDescription>
                      Select all that apply to you. These choices will help us suggest relevant causes.
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {currentStepData.options.map((option) => (
                        <button
                          key={option}
                          className={`p-3 rounded-md border transition-all text-sm ${
                            isOptionSelected(option)
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50 hover:bg-accent'
                          }`}
                          onClick={() => handleSelectOption(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={handleBack}
                      disabled={currentStep === 0}
                    >
                      Back
                    </Button>
                    
                    <Button onClick={handleNext}>
                      {currentStep < steps.length - 1 ? 'Continue' : 'See Results'}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="results">
                {/* For detailed view of a selected cause */}
                {selectedCause ? (
                  <div className="animate-fade-in">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="mb-4"
                      onClick={() => setSelectedCause(null)}
                    >
                      ← Back to all causes
                    </Button>
                    
                    <Card>
                      <div className="md:flex">
                        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative">
                          <img 
                            src={currentCause?.imageUrl} 
                            alt={currentCause?.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4 bg-primary text-primary-foreground font-medium text-sm px-3 py-1 rounded-full">
                            {currentCause?.match}% Match
                          </div>
                        </div>
                        
                        <div className="md:w-2/3 p-6">
                          <h2 className="text-2xl font-bold mb-2">{currentCause?.title}</h2>
                          
                          <p className="text-muted-foreground mb-4">
                            {currentCause?.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {currentCause?.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="space-y-6">
                            <div>
                              <h3 className="font-medium mb-2">Relevant Skills</h3>
                              <div className="flex flex-wrap gap-2">
                                {currentCause?.skills.map((skill) => (
                                  <Badge key={skill} variant="outline">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="font-medium mb-2">Organizations to Explore</h3>
                              <ul className="space-y-2">
                                {currentCause?.organizations.map((org) => (
                                  <li key={org.name} className="text-sm">
                                    <a 
                                      href={org.website} 
                                      className="text-primary hover:underline"
                                    >
                                      {org.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="pt-4">
                              <Button className="w-full">
                                Get Involved
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ) : (
                  /* List of all causes */
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                    {causesData.map((cause) => (
                      <Card key={cause.id} className="overflow-hidden">
                        <div className="h-40 overflow-hidden relative">
                          <img 
                            src={cause.imageUrl} 
                            alt={cause.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 right-3 bg-primary text-primary-foreground font-medium text-sm px-2 py-0.5 rounded-full">
                            {cause.match}% Match
                          </div>
                        </div>
                        
                        <CardHeader className="pb-2">
                          <CardTitle>{cause.title}</CardTitle>
                          <CardDescription className="line-clamp-2">
                            {cause.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="pb-2">
                          <div className="flex flex-wrap gap-2">
                            {cause.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        
                        <CardFooter>
                          <Button 
                            className="w-full" 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedCause(cause.id)}
                          >
                            <span className="flex items-center gap-2">
                              Learn More <ArrowRight size={14} />
                            </span>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Discover;
