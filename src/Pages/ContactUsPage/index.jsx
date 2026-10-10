import React from 'react';
import { contactUsStyles } from './src/styles';
import styled from 'styled-components';
import { steps } from './src/data';

export default function ContactUs() {
        return (
                <contactUsStyles.Wrapper style={{ paddingTop: 100 }}>
                        {steps.map((step) => {
                                return (
                                        <StepWrapper $reverse={step.reverse}>
                                                <StepContent
                                                        style={{
                                                                display: 'flex',
                                                                justifyContent: !step.reverse ? 'flex-end' : 'flex-start',
                                                        }}>
                                                        <div style={{ maxWidth: 500 }}>
                                                                <contactUsStyles.Header
                                                                        style={{
                                                                                textAlign: !step.reverse ? 'center' : 'center',
                                                                                fontSize: 'clamp(1rem, 1.7vw, 3.7rem)',
                                                                                marginBottom: 30,
                                                                        }}>
                                                                        {step.step_number}
                                                                </contactUsStyles.Header>
                                                                <contactUsStyles.Header>{step.header}</contactUsStyles.Header>
                                                                <contactUsStyles.SubHeader>{step.sub_header}</contactUsStyles.SubHeader>
                                                        </div>
                                                </StepContent>
                                                <StepLine />
                                                <StepContent
                                                        style={{
                                                                display: 'flex',
                                                                justifyContent: step.reverse ? 'flex-end' : 'flex-start',
                                                        }}>
                                                        <contactUsStyles.StepImage
                                                                alt={step.header}
                                                                fetchPriority='hight'
                                                                src={step.image}
                                                        />
                                                </StepContent>
                                        </StepWrapper>
                                );
                        })}
                </contactUsStyles.Wrapper>
        );
}

const StepWrapper = styled.div`
        display: flex;
        width: 100%;
        flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
`;

const StepContent = styled.div`
        min-width: calc(50% - 25px);
        max-width: calc(50% - 25px);
        color: #333;
        font-size: 1.6rem;
        padding: 1px;
        padding-bottom: 60px;
`;

function StepLine() {
        return (
                <div
                        style={{
                                width: '50px',
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                        }}>
                        <div
                                style={{
                                        position: 'absolute',
                                        top: 10,
                                        height: 'clamp( 20px, 3vw, 40px )',
                                        width: 'clamp( 20px, 3vw, 40px )',
                                        borderRadius: '50%',
                                        background: '#ff6f00',
                                }}></div>
                        <div
                                style={{
                                        width: 'clamp( 3px, 1vw, 8px )',
                                        height: '100%',
                                        background: '#ff6f00',
                                }}
                        />
                </div>
        );
}
