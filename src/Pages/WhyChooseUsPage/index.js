import React from 'react';
import FeaturesSection from './src/FeaturesSection';
import PresentartionSection from './src/PresentationSection';
import FooterLAyout from '../../Layouts/FooterLAyout';

export default function WhyChoooseUsPage() {
        return (
                <div>
                        <PresentartionSection button_label='Why IT Souluction' button_target='idofnextsection' />
                        <FeaturesSection />
                        <FooterLAyout />
                </div>
        );
}
