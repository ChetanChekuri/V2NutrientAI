"use client";

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function TermsDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('termsAccepted');
    if (!accepted) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('termsAccepted', 'true');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Terms of Service & Disclaimer</DialogTitle>
          <DialogDescription>
            Please read and accept our terms of service to continue using Nutrient AI.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[400px] overflow-y-auto text-sm">
          <h3 className="font-semibold mb-2">Terms of Service</h3>
          <p className="mb-4">
            By using Nutrient AI, you agree to these terms and conditions. This service is provided "as is" without any warranties.
          </p>
          
          <h3 className="font-semibold mb-2">Medical Disclaimer</h3>
          <p className="mb-4">
            The information provided is for general informational purposes only and should not be considered medical advice. Always consult with healthcare professionals for medical decisions.
          </p>
          
          <h3 className="font-semibold mb-2">Privacy Policy</h3>
          <p className="mb-4">
            We respect your privacy and handle your data in accordance with our privacy policy. We only collect essential information to provide our service.
          </p>
        </div>
        <DialogFooter>
          <Button onClick={handleAccept}>Accept Terms</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}