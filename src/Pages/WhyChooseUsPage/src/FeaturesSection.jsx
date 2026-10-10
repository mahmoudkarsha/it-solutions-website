import React from 'react';
import { featuresSectionStyles as Section } from './styles';
import { features } from './data';

export default function FeaturesSection() {
        return (
                <div>
                        {features.data.map((feature, featureIndex) => {
                                return (
                                        <Section.Wrapper $reverse={feature.reverse} $bg={feature.section_background} key={featureIndex}>
                                                <Section.ImageWrapper>
                                                        {(feature.image_background !== 'transparent' && (
                                                                <Section.ColoredCard></Section.ColoredCard>
                                                        )) ||
                                                                null}

                                                        <Section.FeatureImage
                                                                alt={feature.header}
                                                                fetchPriority='hight'
                                                                src={feature.iamge}
                                                        />
                                                </Section.ImageWrapper>
                                                <Section.DescriptionWrapper>
                                                        <Section.Header>{feature.header}</Section.Header>
                                                        {feature.sub_headers.map((sub_header, hIndex) => {
                                                                return <Section.SubHeader key={hIndex}>{sub_header}</Section.SubHeader>;
                                                        })}
                                                </Section.DescriptionWrapper>
                                        </Section.Wrapper>
                                );
                        })}
                </div>
        );
}
