"use client";


import { useState } from "react";
import { Mail, MessageSquare, Send, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      content: "support@legalxml.com",
      description: "We typically respond within 2-4 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      content: "+1 (555) 123-4567",
      description: "Monday - Friday, 9AM - 6PM EST"
    },
    {
      icon: MapPin,
      title: "Office Location",
      content: "San Francisco, CA",
      description: "Available for enterprise consultations"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "< 24 hours",
      description: "Guaranteed response for all inquiries"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="max-w-[1444px] mx-auto px-6 sm:px-8 ">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Need Help or Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team of legal document experts is here to help you succeed. 
            Reach out and we'll get back to you quickly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="shadow-xl border-2 hover:border-accent/20 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <MessageSquare className="h-6 w-6 mr-3 text-accent" />
                Send us a message
              </CardTitle>
              <p className="text-muted-foreground">
                Tell us about your document conversion needs and we'll help you find the best solution.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company/Law Firm</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your organization name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us about your document conversion needs, volume, or any specific requirements..."
                  />
                </div>
                
                <Button type="submit" variant="cta" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20 p-0">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <IconComponent className="h-6 w-6 text-accent" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-foreground">
                            {info.title}
                          </h3>
                          <p className="text-lg font-medium text-foreground">
                            {info.content}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Live Chat Widget Placeholder */}
            <Card className="bg-accent/10 border-2 border-accent/20 p-0">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <MessageSquare className="h-8 w-8 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">
                    Need Immediate Help?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Chat with our support team for instant assistance with your document conversion questions.
                  </p>
                </div>
                <Button variant="cta" className="w-full">
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;