import React from 'react';
import { servicesSectionStyles } from './styles';
import { Button } from '../../../Components/Button';
import { motion } from 'framer-motion';
import { useGlobals } from '../../../Providers/GlobalsProvider';

const { Wrapper, SectionHeader, SectionSubHeader } = servicesSectionStyles;
export default function ServicesSection() {
        const { t } = useGlobals();
        return (
                <Wrapper>
                        <SectionHeader initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { delay: 0.1 } }}>
                                {t(`Our Services`)}
                        </SectionHeader>
                        <SectionSubHeader initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}>
                                {t(
                                        `we specialize in crafting tailored digital solutions to propel your business forward. Whether you need a sleek mobile app, a dynamic website, or robust desktop software, our team of experts is here to bring your vision to life`
                                )}
                        </SectionSubHeader>
                        <motion.a
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
                                href='#web-section'>
                                <Button $big>Explore Now</Button>
                        </motion.a>
                </Wrapper>
        );
}
