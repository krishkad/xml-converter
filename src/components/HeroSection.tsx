"use client";

import { useState } from "react";
import { Upload, FileText, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
// import heroImage from "@/assets/hero-legal-conversion.jpg";

const HeroSection = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={
            "https://images.unsplash.com/photo-1515847049296-a281d6401047?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Legal document conversion background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[1444px] mx-auto px-6 sm:px-8  relative z-10 py-20">
        <div className="w-full grid grid-cols-1  space-y-8 lg:space-y-12 items-start">
          {/* Left Column - Content */}
          <div className="w-full space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground max-w-3xl text-center">
                Convert Scanned Legal Documents to{" "}
                <span className="text-accent">XML Instantly</span>
              </h1>
              <p className="text-xl text-muted-foreground text-center mx-auto max-w-lg">
                Upload your legal files and get clean, structured XML output
                within seconds. Trusted by legal professionals worldwide.
              </p>
            </div>

            <div className="w-full flex flex-col items-center justify-center sm:flex-row gap-4 mx-auto ">
              <Link href={"/dashboard"}>
                <Button variant="hero" className="w-full sm:w-auto">
                  Try it Free
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>GDPR compliant</span>
              </div>
            </div>
          </div>

          {/* Right Column - Upload Interface */}
          <div className="max-w-4xl space-y-6">
            <Card className="w-full p-6 shadow-xl border-2 border-dashed border-border hover:border-accent transition-colors">
              <CardContent className="space-y-6 p-0">
                {/* Upload Box */}
                <div
                  className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 cursor-pointer ${
                    isDragOver
                      ? "border-accent bg-accent/10"
                      : "border-border hover:border-accent/50"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() =>
                    document.getElementById("file-upload")?.click()
                  }
                >
                  <input
                    id="file-upload"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  <div className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <Upload className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">
                        Drop your legal document here
                      </p>
                      <p className="text-sm text-muted-foreground">
                        or click to browse files
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Supports PDF, JPG, PNG (Max 10MB)
                    </p>
                  </div>
                </div>

                {/* File Preview */}
                {uploadedFile && (
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-8 w-8 text-accent" />
                        <div>
                          <p className="font-medium text-foreground">
                            {uploadedFile.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button variant="cta">Convert Now</Button>
                    </div>
                  </div>
                )}

                {/* XML Preview */}
                <div className="bg-secondary/30 rounded-lg p-4 border border-border">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Download className="h-4 w-4 mr-2 text-accent" />
                    Preview Output (XML)
                  </h4>
                  <pre className="text-xs text-muted-foreground bg-background/50 p-3 rounded overflow-x-auto">
                    {`<?xml version="1.0" encoding="UTF-8"?>
<legal_document>
  <header>
    <document_type>Notice</document_type>
    <date>2024-01-15</date>
    <jurisdiction>State of California</jurisdiction>
  </header>
  <content>
    <party name="Plaintiff">John Doe</party>
    <party name="Defendant">ABC Corp</party>
    <case_number>CV-2024-001</case_number>
  </content>
</legal_document>`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
