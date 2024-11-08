import React from 'react';
import { presentaionStyles } from '../../StartPage/src/styles';
import image from '../../../Assets/images/why_choose_us/why-us-svg.svg';
import { Button } from '../../../Components/Button';

//
const { Wrapper, PresentaionImage, PresentationSubHeader, PresentationHeader } = presentaionStyles;

export default function PresentartionSection({ button_label, button_target }) {
        return (
                <Wrapper id='web-section'>
                        <div style={{ width: '100%', maxWidth: 900 }}>
                                <PresentaionImage alt={'it-solutions-pr'} fetchPriority='hight' src={image} />

                                <a href={button_target}>
                                        <Button $big $mt='10rem'>
                                                {button_label}
                                        </Button>
                                </a>
                        </div>
                        <div>
                                <PresentationHeader style={{ marginTop: 40, fontSize: '2.4rem' }}>Expertise</PresentationHeader>
                                <PresentationSubHeader>
                                        Our team is comprised of experienced developers who are proficient in the latest technologies and
                                        industry best practices.
                                </PresentationSubHeader>
                                <PresentationHeader style={{ marginTop: 40, fontSize: '2.4rem' }}>Customization</PresentationHeader>
                                <PresentationSubHeader>
                                        We understand that every business is unique. That’s why we tailor our solutions to meet your
                                        specific needs and objectives.
                                </PresentationSubHeader>
                                <PresentationHeader style={{ marginTop: 40, fontSize: '2.4rem' }}>Reliability</PresentationHeader>
                                <PresentationSubHeader>
                                        We are committed to delivering projects on time and within budget, ensuring a smooth and hassle-free
                                        experience for our clients.
                                </PresentationSubHeader>

                                <PresentationHeader style={{ marginTop: 40, fontSize: '2.4rem' }}>Support</PresentationHeader>
                                <PresentationSubHeader>
                                        From the initial consultation to post-launch support, we provide comprehensive services to ensure
                                        the success of your project.
                                </PresentationSubHeader>
                        </div>
                </Wrapper>
        );
}
