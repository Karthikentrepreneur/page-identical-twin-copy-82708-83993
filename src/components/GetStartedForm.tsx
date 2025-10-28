import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface GetStartedFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLookingFor?: string;
  defaultSolution?: string;
}

const GetStartedForm: React.FC<GetStartedFormProps> = ({ 
  isOpen, 
  onClose, 
  defaultLookingFor = '',
  defaultSolution = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    lookingFor: '',
    specificSolution: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const solutionOptions = [
    "Enterprise Computing Solutions",
    "Network Infrastructure Solutions", 
    "Information Security",
    "Access Control Systems",
    "Industrial Networking Solutions",
    "Industrial Surveillance & Safety Management",
    "IT Consulting Services",
    "Enterprise Servers & Storage Solutions",
    "Data Center Solutions",
    "Cloud Solutions",
    "AV & Broadcast Solutions",
    "Others"
  ];

  const servicesOptions = [
    "Managed IT Services",
    "Remote Management",
    "Data Backup/DR Solutions",
    "Design & Implementation",
    "Maintenance Services",
    "Others"
  ];

  const supportOptions = [
    "Comprehensive Tech Support/Maintenance",
    "Flexible Service Models",
    "Supported Technologies",
    "Others"
  ];

  useEffect(() => {
    if (defaultLookingFor) {
      setFormData(prev => ({ 
        ...prev, 
        lookingFor: defaultLookingFor,
        specificSolution: defaultSolution 
      }));
    }
  }, [defaultLookingFor, defaultSolution]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      if (field === 'lookingFor') {
        newData.specificSolution = '';
      }
      return newData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobile || !formData.email || !formData.lookingFor) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formSubmitData = new FormData();
      formSubmitData.append('name', formData.name);
      formSubmitData.append('mobile', formData.mobile);
      formSubmitData.append('email', formData.email);
      formSubmitData.append('lookingFor', formData.lookingFor);
      formSubmitData.append('specificSolution', formData.specificSolution || 'Not specified');
      formSubmitData.append('query', formData.query || 'Not provided');
      formSubmitData.append('_next', window.location.origin + '?success=true');
      formSubmitData.append('_subject', 'New Get Started Form Submission');
      formSubmitData.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/sales@indsystech.com', {
        method: 'POST',
        body: formSubmitData
      });

      if (response.ok) {
        toast({
          title: "Form Submitted Successfully!",
          description: "We'll get back to you soon.",
        });

        setFormData({
          name: '',
          mobile: '',
          email: '',
          lookingFor: '',
          specificSolution: '',
          query: ''
        });

        onClose();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-md"
      >
        <Card className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#0e256e]">
              Get Started
            </CardTitle>
            <p className="text-sm text-gray-600">
              Tell us about your requirements and we'll get back to you.
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <Label htmlFor="lookingFor">What are you looking for? *</Label>
                <Select 
                  value={formData.lookingFor}
                  onValueChange={(value) => handleInputChange('lookingFor', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solutions">Solutions</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="support">Support / Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Show corresponding options */}
              {formData.lookingFor === 'solutions' && (
                <div>
                  <Label htmlFor="specificSolution">Which Solution?</Label>
                  <Select 
                    value={formData.specificSolution}
                    onValueChange={(value) => handleInputChange('specificSolution', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a specific solution" />
                    </SelectTrigger>
                    <SelectContent>
                      {solutionOptions.map((solution) => (
                        <SelectItem key={solution} value={solution}>
                          {solution}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {formData.lookingFor === 'services' && (
                <div>
                  <Label htmlFor="specificSolution">Which Service?</Label>
                  <Select 
                    value={formData.specificSolution}
                    onValueChange={(value) => handleInputChange('specificSolution', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a specific service" />
                    </SelectTrigger>
                    <SelectContent>
                      {servicesOptions.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {formData.lookingFor === 'support' && (
                <div>
                  <Label htmlFor="specificSolution">Which Support Option?</Label>
                  <Select 
                    value={formData.specificSolution}
                    onValueChange={(value) => handleInputChange('specificSolution', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a support option" />
                    </SelectTrigger>
                    <SelectContent>
                      {supportOptions.map((support) => (
                        <SelectItem key={support} value={support}>
                          {support}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <Label htmlFor="query">Your Query (Optional)</Label>
                <Textarea
                  id="query"
                  value={formData.query}
                  onChange={(e) => handleInputChange('query', e.target.value)}
                  placeholder="Tell us more about your requirements..."
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#007CF0] to-[#00DFD8] hover:opacity-90 transition-opacity"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default GetStartedForm;
