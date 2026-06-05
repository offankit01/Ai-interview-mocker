"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@base-ui/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function AddNewinterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    console.log({
      jobPosition,
      jobDesc,
      jobExperience,
    });

    // Close dialog after submit
    setOpenDialog(false);
  };

  return (
    <div className="w-75">
      {/* Add New Card */}
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>

      {/* Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interview
            </DialogTitle>

            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2 className="mb-4">
                    Add details about your job position, description, and years
                    of experience.
                  </h2>

                  {/* Job Position */}
                  <div className="mt-7 mb-3">
                    <label>Job Role / Job Position</label>
                    <Input
                      placeholder="Ex. Full Stack Developer"
                      required
                      value={jobPosition}
                      onChange={(e) => setJobPosition(e.target.value)}
                    />
                  </div>

                  {/* Job Description */}
                  <div className="mb-3">
                    <label>Job Description / Tech Stack</label>
                    <Textarea
                      placeholder="Ex. React, Angular, Node.js, MySQL"
                      required
                      value={jobDesc}
                      onChange={(e) => setJobDesc(e.target.value)}
                    />
                  </div>

                  {/* Experience */}
                  <div className="mb-3">
                    <label>Years of Experience</label>
                    <Input
                      placeholder="Ex. 5"
                      type="number"
                      min="0"
                      max="50"
                      required
                      value={jobExperience}
                      onChange={(e) => setJobExperience(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex gap-5 justify-end mt-5">
                  <Button
                    type="button"
                    onClick={() => setOpenDialog(false)}
                    className="px-4 py-2 rounded-lg border"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Start Interview
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewinterview;