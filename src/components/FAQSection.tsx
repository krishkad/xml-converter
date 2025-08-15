import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What file types can I upload?",
      answer: "We support PDF, JPG, JPEG, and PNG files. The maximum file size depends on your plan: Free (5MB), Pro (25MB), Agency (100MB). We can process both scanned documents and digital files with text."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We use end-to-end encryption for all file uploads and processing. Your documents are automatically deleted from our servers within 24 hours of conversion. We're GDPR compliant and SOC 2 certified. We never store or access your document content."
    },
    {
      question: "What does the XML output look like?",
      answer: "Our XML output is structured and human-readable, with clearly labeled fields for document metadata, parties involved, dates, case numbers, and content sections. The schema is designed to be easily parsed by legal management systems and can be customized for specific document types."
    },
    {
      question: "Can I integrate this with my legal workflow tool?",
      answer: "Yes! Pro and Agency plans include API access that allows direct integration with popular legal practice management systems like Clio, PracticePanther, and MyCase. We also provide webhooks and custom integration support for Agency customers."
    },
    {
      question: "How do I cancel or change plans?",
      answer: "You can cancel or change your plan anytime from your account dashboard. Cancellations take effect at the end of your current billing cycle, and you'll retain access to all features until then. Upgrades take effect immediately with prorated billing."
    },
    {
      question: "What happens if the conversion fails?",
      answer: "If our AI cannot process your document, you won't be charged for that conversion. We'll provide feedback on why the conversion failed and suggestions for improving the document quality. Our success rate is over 98% for standard legal documents."
    },
    {
      question: "Do you offer bulk processing discounts?",
      answer: "Agency plans include bulk processing capabilities. For enterprise customers with very high volume needs (1000+ documents per month), we offer custom pricing with additional discounts. Contact our sales team for a personalized quote."
    },
    {
      question: "Can I try the service before purchasing?",
      answer: "Yes! Our Free Trial plan gives you 10 conversions per month with full access to all features. No credit card required. You can also schedule a demo with our team to see the platform in action with your specific document types."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-[1444px] mx-auto px-6 sm:px-8 ">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our legal document conversion service
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-secondary/30 rounded-lg border border-border px-6 hover:bg-secondary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="bg-secondary/30 rounded-xl p-8 max-w-2xl mx-auto border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our legal document experts are here to help. Get in touch and we&apos;ll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="mailto:support@legalxml.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground font-semibold rounded-lg border border-border hover:bg-secondary/50 transition-colors"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;