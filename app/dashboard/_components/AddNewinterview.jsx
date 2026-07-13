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
import { chatSession } from "@/utils/GeminiAiModel";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from 'uuid';
import { useUser } from "@clerk/nextjs";
import moment from "moment/moment";
import { useRouter } from "next/navigation";

function AddNewinterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading,setLoading]=useState(false);
  const [jsonResponse,setJsonResponse]=useState([]);
  const {user}=useUser();
  const router=useRouter();

  const onSubmit =async (e) => {
    setLoading(true)
    e.preventDefault();

    console.log({
      jobPosition,
      jobDesc,
      jobExperience,
    });

    // Close dialog after submit
    setOpenDialog(false);

    const InputPrompt="Job position:"+jobPosition+", Job Description:"+jobDesc+", Year if Experience:"+jobExperience+", Depends on job Position,job Description & Years of Experience give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+"  interview question along with Answer in JSON format,Give us question and answer field on JSON"

    const result=await chatSession.sendMessage(InputPrompt);
    const MockJsonResp= (result.response.text()).replace('```json','').replace('```', '')
    console.log(JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp);
  
    if (MockJsonResp)
    {
    const resp=await db.insert(MockInterview)
    .values({
      mockId:uuidv4(),
      jsonMockResp:MockJsonResp,
      jobPosition:jobPosition,
      jobDesc:jobDesc,
      jobExperience:jobExperience,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD-MM-YYYY')

    }).returning({mockId:MockInterview.mockId});

    console.log("Inserted ID:",resp)
    if(resp)
    {
      setOpenDialog(false);
      router.push('/dashboard/interview/'+resp[0]?.mockId)
    }

  }
  else{
    console.log("ERROR");
  }
    setLoading(false);
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
                    disabled={loading}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin mr-2" />
                        Generating from AI
                      </>
                    ) : (
                      <>Start Interview</>
                    )}
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