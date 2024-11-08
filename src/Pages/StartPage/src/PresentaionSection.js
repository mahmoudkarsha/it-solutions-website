import React from 'react';
import { presentaionStyles } from './styles';
import presentationImage2 from '../../../Assets/images/start_page/asd.svg';
import fixedImage from '../../../Assets/images/start_page/fixed-bg.jpg';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Button } from '../../../Components/Button';
import { FaFacebook } from 'react-icons/fa';
import { useGlobals } from '../../../Providers/GlobalsProvider';
const {
        Wrapper,
        PresentationHeader,
        PresentationSubHeader,
        FullPageImageFixed,
        PresentationTextsWrapper,
        PresentaionImageWrapper,
        PresentaionImage,
} = presentaionStyles;

export default function PresentaionSection() {
        const { t } = useGlobals();
        return (
                <Wrapper>
                        <FullPageImageFixed alt={'it-solutions-2'} fetchPriority='hight' src={fixedImage} />
                        <PresentationTextsWrapper>
                                <PresentationHeader
                                        initial={{ x: -199, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}>
                                        {t(`Wellcome to IT Solutions`)}
                                </PresentationHeader>
                                <PresentationSubHeader
                                        style={{ maxWidth: 900 }}
                                        initial={{ x: 199, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1, transition: { delay: 0.5 } }}>
                                        {t(
                                                `Our team can develop custom applications to solve your most difficult data challenges or create insight into key business workflows to optimize productivity.`
                                        )}
                                </PresentationSubHeader>
                                <Button $big $mt='50px'>
                                        {t(`Start Now`)}
                                </Button>
                                <div style={{ display: 'flex', gap: 20, marginTop: 80 }}>
                                        <FaWhatsapp size={40} color='#aaa' />
                                        <MdEmail size={40} color='#aaa' />
                                        <FaFacebook size={40} color='#aaa' />
                                </div>
                        </PresentationTextsWrapper>
                        <PresentaionImageWrapper>
                                <PresentaionImage
                                        initial={{ scale: 3, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1, transition: { delay: 1 } }}
                                        src={presentationImage2}
                                        alt={'it-solutions-3'}
                                        fetchPriority='hight'
                                />
                        </PresentaionImageWrapper>
                </Wrapper>
        );
}
