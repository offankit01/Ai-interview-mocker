import { Lightbulb, Volume2 } from 'lucide-react';
import React from 'react'

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
 
    const textToSpeach=(text)=>{
        if('speechSynthesis' in window){
            const speech=new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech)
        }
        else{
            alert('Sorry your browser does not support text to speech')
        }
    }
    return mockInterviewQuestion&&(
    <div className="p-5 border rounded-lg my-10" >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {mockInterviewQuestion?.map((question, index) => {
          return (
            <h2
              key={index}
              className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer ${
                activeQuestionIndex === index
                  ? "bg-black text-white"
                  : "bg-secondary"
              }`}
            >
              Question #{index + 1}
            </h2>
          );
        })}
        
      </div>
      <h2 className='my-5 text-md md-text-lg mt-5'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
        <Volume2 className='cursor-pointer' onClick={()=>textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)}/>

      <div className='border rounded-lg p-5 bg-amber-100 mt-20'>
        <h2 className='flex gap-2 items-center text-black'>
            <Lightbulb/>
            <strong>Note:</strong>
        </h2>
        <h2 className='text-sm my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
      </div>
    </div>
  )
}

export default QuestionsSection