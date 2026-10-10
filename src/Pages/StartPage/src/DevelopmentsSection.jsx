import React from 'react';
import { developmentsSectionStyles } from './styles';
import { Button } from '../../../Components/Button';
import { Grid, GridSection } from '../../../Layouts/Gridlayout';
import { motion } from 'framer-motion';
import { useGlobals } from '../../../Providers/GlobalsProvider';
import getFadeInProps from '../../../Assets/other/getFadeInProps';
const { Wrapper, SectionHeader, SectionSubHeader, SectionImage, FeatureCard, FeatureCardHeader } = developmentsSectionStyles;

export default function DevelopmentsSection({ data = {} }) {
        const { presentaion, features } = data;
        const { t } = useGlobals();
        return (
                <>
                        <Wrapper id='web-section'>
                                <Grid $gap='7rem'>
                                        <GridSection $col='6'>
                                                <div style={{ display: 'flex' }}>
                                                        <motion.div
                                                                style={{ width: '100%', maxWidth: 900 }}
                                                                {...getFadeInProps('view', 'left', 0.2, 0.3)}>
                                                                <SectionHeader>{t(presentaion.header)}</SectionHeader>
                                                                {presentaion.sub_headers.map((sub_header, i) => (
                                                                        <SectionSubHeader key={i}>{t(sub_header)}</SectionSubHeader>
                                                                ))}

                                                                <motion.div
                                                                        {...getFadeInProps('view', 'left', 0.4, 0.3)}
                                                                        style={{
                                                                                display: 'flex',
                                                                                gap: '2rem',
                                                                                flexWrap: 'wrap',
                                                                                marginTop: 60,
                                                                        }}>
                                                                        {features.data.map((f) => {
                                                                                return (
                                                                                        <FeatureCard key={f.header}>
                                                                                                <FeatureCardHeader>
                                                                                                        {t(f.header)}
                                                                                                </FeatureCardHeader>
                                                                                        </FeatureCard>
                                                                                );
                                                                        })}
                                                                </motion.div>
                                                                <motion.a href={'#'} {...getFadeInProps('view', 'left', 0.6, 0.3)}>
                                                                        <Button $big $mt='6rem'>
                                                                                {t(`Read more`)}
                                                                        </Button>
                                                                </motion.a>
                                                        </motion.div>
                                                </div>
                                        </GridSection>
                                        <GridSection $col='6'>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <SectionImage
                                                                alt={'it-solutions-4'}
                                                                fetchPriority='hight'
                                                                {...getFadeInProps('view', 'right', 1, 0.3)}
                                                                src={presentaion.image}
                                                        />
                                                </div>
                                        </GridSection>
                                </Grid>
                        </Wrapper>
                        <div style={{ minHeight: '100vh' }}>
                                <Grid style={{ minHeight: '100vh' }}>
                                        <GridSection
                                                $col='6'
                                                style={{
                                                        backgroundColor: features.hide_overlay ? '#fff' : '#343589dd',
                                                        padding: '100px 20px',
                                                }}>
                                                <motion.img
                                                        {...getFadeInProps('view', 'left', 0.4, 0.3)}
                                                        alt={'it-solutions-5'}
                                                        fetchPriority='hight'
                                                        style={{
                                                                width: '100%',
                                                                objectFit: 'cover',
                                                                borderRadius: 20,
                                                        }}
                                                        src={features.image}
                                                />
                                        </GridSection>
                                        <GridSection
                                                $col='6'
                                                style={{
                                                        backgroundColor: features.hide_overlay ? '#fff' : '#343589dd',
                                                        padding: '100px 20px',
                                                }}>
                                                {features.data.map((f, i) => {
                                                        return (
                                                                <>
                                                                        <SectionHeader
                                                                                {...getFadeInProps('view', 'left', 0.2 * i, 0.3)}
                                                                                key={f.header}>
                                                                                {t(f.header)}
                                                                        </SectionHeader>
                                                                        <SectionSubHeader
                                                                                {...getFadeInProps('view', 'left', 0.2 * i, 0.3)}
                                                                                key={f.sub_header}
                                                                                style={{
                                                                                        color: features.hide_overlay ? '#444' : '#fff',
                                                                                        marginTop: 0,
                                                                                        marginBottom: 40,
                                                                                }}>
                                                                                {t(f.sub_header)}
                                                                        </SectionSubHeader>
                                                                </>
                                                        );
                                                })}
                                        </GridSection>
                                </Grid>
                        </div>
                </>
        );
}
