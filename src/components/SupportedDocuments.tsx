import {
  FileText,
  PenTool,
  FileCheck,
  FileSignature,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import documentTypesImage from "@/assets/legal-document-types.jpg";

const SupportedDocuments = () => {
  const documentTypes = [
    {
      icon: FileText,
      title: "Scanned Legal Notices",
      description: "PDF and image scans of official notices",
      features: ["Court documents", "Official notices", "Legal bulletins"],
    },
    {
      icon: PenTool,
      title: "Handwritten Affidavits",
      description: "Handwritten legal statements and declarations",
      features: [
        "Witness statements",
        "Sworn declarations",
        "Notarized documents",
      ],
    },
    {
      icon: FileCheck,
      title: "Typed Agreements",
      description: "Contracts and agreements in PDF/JPG/PNG",
      features: ["Service agreements", "Legal contracts", "Terms & conditions"],
    },
    {
      icon: FileSignature,
      title: "Signed Contracts",
      description: "Standard legal forms and documents",
      features: [
        "Employment contracts",
        "Non-disclosure agreements",
        "Partnership agreements",
      ],
    },
  ];

  return (
    <section id="supported-docs" className="py-24 bg-secondary/30">
      <div className="max-w-[1444px] mx-auto px-6 sm:px-8 ">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            We Support Common Legal Document Types
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Convert all major legal formats into structured XML effortlessly.
            Our AI is trained on thousands of legal documents for maximum
            accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {documentTypes.map((doc, index) => {
            const IconComponent = doc.icon;
            return (
              <Card
                key={index}
                className="relative group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20"
              >
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-lg font-bold text-foreground">
                      {doc.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {doc.description}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {doc.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </CardContent>
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
                    Supported
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Visual Preview */}
        <div className="relative">
          <div className="bg-background rounded-xl shadow-2xl overflow-hidden border border-border">
            <div className="relative h-64 bg-gradient-to-r from-primary/10 to-accent/10">
              <img
                src={
                  "https://images.unsplash.com/photo-1554224155-cfa08c2a758f?q=80&w=826&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="Legal document types visualization"
                className="w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Ready to Convert Your Documents?
                  </h3>
                  <p className="text-muted-foreground">
                    Upload any supported format and get structured XML in
                    seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedDocuments;
