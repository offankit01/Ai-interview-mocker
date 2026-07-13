"use client";

import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { Button } from "@/components/ui/button";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import React, { useEffect, use, useState } from "react";
import Webcam from "react-webcam";
import Link from "next/link";

function Interview({ params }) {
  const { interviewid } = use(params);

  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    console.log(interviewid);
    GetInterviewDetails();
  }, []);

  /*
   * Used to get Interview Details by MockId/Interview Id
   */
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, interviewid));

    setInterviewData(result[0]);
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl">Let's Get Started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
        {/* Left Section */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col p-5 rounded-lg border gap-5">
            <h2 className="text-lg">
              <strong>Job Role/Job Position:</strong>{" "}
              {interviewData?.jobPosition}
            </h2>

            <h2 className="text-lg">
              <strong>Job Description/Tech Stack:</strong>{" "}
              {interviewData?.jobDesc}
            </h2>

            <h2 className="text-lg">
              <strong>Years of Experience:</strong>{" "}
              {interviewData?.jobExperience}
            </h2>
          </div>

          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
            <h2 className="flex gap-2 items-center font-semibold">
              <Lightbulb />
              Information
            </h2>

            <p className="mt-2">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center">
          {webCamEnabled ? (
            <Webcam
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
              style={{
                width: "100%",
                maxWidth: "450px",
                height: "300px",
              }}
            />
          ) : (
            <WebcamIcon className="h-72 w-full p-20 bg-secondary rounded-lg border" />
          )}

          {/* Buttons */}
          <div className="flex justify-between w-full mt-5">
            {!webCamEnabled ? (
              <Button onClick={() => setWebCamEnabled(true)}>
                Enable Web Cam and Microphone
              </Button>
            ) : (
              <div></div>
            )}
            <Link href={`/dashboard/interview/${interviewid}/start`}>
                <Button className="w-28">
                    Start
                </Button>
                </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interview;