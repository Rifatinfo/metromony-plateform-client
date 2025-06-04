import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import img_1 from "../../assets/1.png"
import img_2 from "../../assets/2.png"
import img_3 from "../../assets/3.png"
import img_4 from "../../assets/4.png"
import img_5 from "../../assets/5.png"
import img_6 from "../../assets/6.png"
const HowWorking = () => {
    return (
        <div className="mt-14 mb-10">
            <div className="text-center space-y-2">
                <h1 className="font-semibold text-4xl text-rose-600">Moments</h1>
                <p>How It Works</p>
            </div>

            {/* procedure working  */}
            <div>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot className='text-rose-600' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div>
                                <div>
                                    <img className='' src={img_2} alt="" />
                                </div>
                                <div className="space-y-2 ml-6 md:ml-10">
                                    <p className="md:text-xl font-semibold text-rose-600">Register</p>
                                    <p className="text-[10px] md:text-[14px]">Find Your Imagine soulmate Today!</p>
                                </div>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <div>
                                <div className='flex justify-end items-end'>
                                    <img className='' src={img_3} alt="" />
                                </div>
                                <div className="space-y-2 mr-6 md:mr-10">
                                    <p className="md:text-xl font-semibold text-rose-600">Register</p>
                                    <p className="text-[10px] md:text-[14px]">Find Your Imagine soulmate Today!</p>
                                </div>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div>
                                <div>
                                    <img className='' src={img_4} alt="" />
                                </div>
                                <div className="space-y-2 ml-6 md:ml-10">
                                    <p className="md:text-xl font-semibold text-rose-600">Register</p>
                                    <p className="text-[10px] md:text-[14px]">Find Your Imagine soulmate Today!</p>
                                </div>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                           <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                             <div>
                                <div className='flex justify-end items-end'>
                                    <img className='' src={img_5} alt="" />
                                </div>
                                <div className="space-y-2 mr-6 md:mr-10">
                                    <p className="md:text-xl font-semibold text-rose-600">Register</p>
                                    <p className="text-[10px] md:text-[14px]">Find Your Imagine soulmate Today!</p>
                                </div>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div>
                                <div>
                                    <img className='' src={img_6} alt="" />
                                </div>
                                <div className="space-y-2 ml-6 md:ml-10">
                                    <p className="md:text-xl font-semibold text-rose-600">Register</p>
                                    <p className="text-[10px] md:text-[14px]">Find Your Imagine soulmate Today!</p>
                                </div>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                             <div>
                                <div className='flex justify-end items-end'>
                                    <img className='' src={img_1} alt="" />
                                </div>
                                <div className="space-y-2 mr-6 md:mr-10">
                                    <p className="md:text-xl font-semibold text-rose-600">Register</p>
                                    <p className="text-[10px] md:text-[14px]">Find Your Imagine soulmate Today!</p>
                                </div>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

            </div>
        </div>
    );
};

export default HowWorking;