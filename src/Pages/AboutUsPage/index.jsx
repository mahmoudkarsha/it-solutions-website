import React from 'react';
import { aboutStyles } from './styles';

import { Grid, GridSection } from '../../Layouts/Gridlayout';
import mahmoudImage from '../../Assets/images/about_us/mahmoud.png';
import { FaReact } from 'react-icons/fa';
import { IoLogoElectron } from 'react-icons/io5';
import { IoLogoJavascript } from 'react-icons/io5';
import { IoLogoNodejs } from 'react-icons/io5';
import { SiMongodb } from 'react-icons/si';
import { IoLogoWindows } from 'react-icons/io5';
import { SiProxmox } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiArduino } from 'react-icons/si';
import { CgDatabase } from 'react-icons/cg';
import { GrVirtualMachine } from 'react-icons/gr';
import Slider from 'react-infinite-logo-slider';
import { motion } from 'framer-motion';

const skillsData = [
        {
                icon: <IoLogoJavascript color='#ff6f00' />,
                header: 'JavaScript',
        },
        {
                icon: <IoLogoNodejs color='#ff6f00' />,
                header: 'NodeJS',
        },

        {
                icon: <FaReact color='#ff6f00' />,
                header: 'React',
        },
        {
                icon: <IoLogoElectron color='#ff6f00' />,
                header: 'ElectronJS',
        },
        {
                icon: <FaReact color='#ff6f00' />,
                header: 'React-Native',
        },
        {
                icon: <SiMongodb color='#ff6f00' />,
                header: 'MongoDb',
        },
        {
                icon: <BiLogoPostgresql color='#ff6f00' />,
                header: 'PostgreSQL',
        },
        {
                icon: <CgDatabase color='#ff6f00' />,
                header: 'Data-center',
        },
        {
                icon: <IoLogoWindows color='#ff6f00' />,
                header: 'Windows-Server',
        },
        {
                icon: <GrVirtualMachine color='#ff6f00' />,
                header: 'Hyper-V',
        },
        {
                icon: <SiProxmox color='#ff6f00' />,
                header: 'Proxmox',
        },
        {
                icon: <SiArduino color='#ff6f00' />,
                header: 'Arduino',
        },
];
export default function AboutUsPage() {
        return (
                <aboutStyles.wrapper>
                        <Grid $gap='3rem'>
                                <GridSection $col='6'>
                                        <aboutStyles.Header>Hi I'm Mahmoud Karsha</aboutStyles.Header>
                                        <aboutStyles.SubHeader>
                                                Passionate and dedicated software developer with over 3 years of experience in JavaScript
                                                and its frameworks. Proficient in Node.js, Express, MongoDB, PostgreSQL, React, and React
                                                Native. Skilled in home automation using Arduino and Raspberry Pi. Proven ability to develop
                                                robust, scalable, and high-performance applications for web and mobile platforms. Excellent
                                                problem-solving skills and a commitment to continuous learning and professional development.
                                        </aboutStyles.SubHeader>
                                        <aboutStyles.Header>Education</aboutStyles.Header>
                                        <aboutStyles.SubHeader>
                                                Computer systems engineering at Cordoba Private University.
                                        </aboutStyles.SubHeader>
                                </GridSection>
                                <GridSection $col='3'></GridSection>

                                <GridSection $col='3'>
                                        <aboutStyles.CvImageWrapper>
                                                <motion.img
                                                        initial={{ scale: 0, opacity: 0, y: -20, transformOrigin: '100% 0px' }}
                                                        animate={{
                                                                scale: 1,
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: {
                                                                        delay: 0.2,
                                                                        duration: 0.3,
                                                                },
                                                        }}
                                                        alt={'sdas'}
                                                        fetchPriority='hight'
                                                        src={mahmoudImage}
                                                        style={{ width: '100%', objectFit: 'cover', borderRadius: 77 }}
                                                />
                                        </aboutStyles.CvImageWrapper>
                                </GridSection>

                                <GridSection $col='12'>
                                        <aboutStyles.Header>Skills</aboutStyles.Header>

                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 30 }}>
                                                <Slider>
                                                        {skillsData.map((s) => {
                                                                return (
                                                                        <Slider.Slide key={s.header} style={{ width: 900 }}>
                                                                                <aboutStyles.Header style={{ textAlign: 'center' }}>
                                                                                        {s.icon}
                                                                                </aboutStyles.Header>
                                                                                <aboutStyles.SubHeader
                                                                                        style={{ color: '#f3f3f3', textAlign: 'center' }}>
                                                                                        {s.header}
                                                                                </aboutStyles.SubHeader>
                                                                        </Slider.Slide>
                                                                );
                                                        })}
                                                </Slider>
                                        </div>
                                </GridSection>
                        </Grid>
                </aboutStyles.wrapper>
        );
}
