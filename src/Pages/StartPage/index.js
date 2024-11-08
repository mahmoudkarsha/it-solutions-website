import React from 'react';
import PresentaionSection from './src/PresentaionSection';
import ServicesSection from './src/ServicesSection';
import DevelopmentsSection from './src/DevelopmentsSection';
import FooterLAyout from '../../Layouts/FooterLAyout';
import {
        webSection as webSectionData,
        mobileSection as mobileSectionData,
        desktopSection as desktopSectionData,
        automationSection as automationSectionData,
} from './src/data';

export default function StartPage() {
        return (
                <main>
                        <PresentaionSection />
                        <ServicesSection />
                        <DevelopmentsSection data={webSectionData} />
                        <DevelopmentsSection data={mobileSectionData} />
                        <DevelopmentsSection data={desktopSectionData} />
                        <DevelopmentsSection data={automationSectionData} />
                        <FooterLAyout />
                </main>
        );
}
