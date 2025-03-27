
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { ArrowRight } from 'lucide-react';

interface Cause {
  id: string;
  title: string;
  description: string;
  match: number;
  tags: string[];
  imageUrl: string;
}

const causesData: Cause[] = [
  {
    id: '1',
    title: 'Climate Justice',
    description: 'Addressing the disproportionate impacts of climate change on vulnerable communities.',
    match: 92,
    tags: ['Environment', 'Justice', 'Policy'],
    imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
  },
  {
    id: '2',
    title: 'Digital Rights',
    description: 'Advocating for privacy, accessibility, and freedom in the digital world.',
    match: 88,
    tags: ['Technology', 'Rights', 'Privacy'],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  },
  {
    id: '3',
    title: 'Food Security',
    description: 'Working to ensure all people have reliable access to nutritious, affordable food.',
    match: 85,
    tags: ['Hunger', 'Agriculture', 'Health'],
    imageUrl: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23',
  },
  {
    id: '4',
    title: 'Racial Equity',
    description: 'Dismantling systemic racism and promoting equal opportunities for all.',
    match: 79,
    tags: ['Justice', 'Equality', 'Community'],
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
  },
];

const DiscoveryTool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string[]>>({
    interests: [],
    skills: [],
    values: [],
  });
  
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
  ];
  
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
      // Finished all steps - would trigger results calculation in a real app
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
  
  return (
    <section className="py-20">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Your Passion</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover which social causes align with your interests, skills, and values.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="quiz" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8">
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
              
              <Card>
                <CardHeader>
                  <CardTitle>{currentStepData.title}</CardTitle>
                  <CardDescription>
                    Select all that apply to you. These choices help us suggest relevant causes.
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {causesData.map((cause) => (
                  <Card key={cause.id} className="overflow-hidden">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={cause.imageUrl} 
                        alt={cause.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>{cause.title}</CardTitle>
                        <div className="text-sm font-medium text-primary">
                          {cause.match}% Match
                        </div>
                      </div>
                      <CardDescription>{cause.description}</CardDescription>
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
                      <Button className="w-full" variant="outline" size="sm">
                        <span className="flex items-center gap-2">
                          Learn More <ArrowRight size={14} />
                        </span>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button asChild>
                  <a href="/discover">Explore All Causes</a>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryTool;
