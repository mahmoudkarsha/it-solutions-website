import styled from 'styled-components';
import { getFlex } from '../../../Assets/other/getFlex';
import { onMidiumMobile, onSmallLaptop, onTablet } from '../../../Assets/other/screenSizes';
import { motion } from 'framer-motion';

export const presentaionStyles = {
        Wrapper: styled.div`
                min-height: 100vh;
                position: relative;
                padding: 100px 4rem;
                background: rgb(2, 0, 36);
                background: -moz-linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 0.99) 35%);
                background: -webkit-linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 0.99) 35%);
                background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 0.99) 35%);

                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#090979",GradientType=1);
                ${getFlex('space-between', 'center')}
                ${onSmallLaptop} {
                        ${getFlex('flex-start', 'center', '2rem', 'column-reverse')}
                        height: auto;
                        min-height: 100vh;
                        padding: 40px 4rem;
                }
                ${onTablet} {
                        padding: 40px 2rem;
                }
        `,
        FullPageVideo: styled.video`
                width: 100%;
                height: 100vh;
                object-fit: cover;
                position: absolute;
                inset: 0;
                z-index: 0;
        `,
        FullPageImage: styled.img`
                width: 100%;
                height: 100%;
                object-fit: cover;
                position: absolute;
                inset: 0;
                z-index: -1;
                opacity: 0.5;
        `,
        FullPageImageFixed: styled.img`
                width: 100%;
                height: 100%;
                object-fit: cover;
                position: fixed;
                inset: 0;
                z-index: -2;
                opacity: 1;
                filter: blur(0px);
        `,
        PresentationTextsWrapper: styled.div`
                width: 100%;
                padding-top: 100px;
                ${onTablet} {
                        padding-top: 0px;
                }
        `,
        PresentaionImageWrapper: styled.div`
                width: 70%;
                padding: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                /*      &::before {
                        content: '';
                        position: absolute;
                        box-shadow: #ffffff88 0px 0px 2000px 150px;
                        height: 1px;

                        width: 1px;
                        z-index: 0;

                        background-color: transparent;
                } */
                ${onTablet} {
                        width: auto;
                        &::before {
                                display: none;
                        }
                }
        `,

        PresentationHeader: styled(motion.p)`
                font-size: 7rem;
                font-weight: 900;
                color: #6da9ad;
                background: linear-gradient(to top right, #ff6f00, #ffa800);
                -webkit-background-clip: text;
                background-clip: none;
                -webkit-text-fill-color: transparent;
                ${onTablet} {
                        font-size: 5rem;
                }
                ${onMidiumMobile} {
                        font-size: 4rem;
                }
        `,
        PresentationSubHeader: styled(motion.p)`
                font-size: 2.4rem;
                font-weight: 400;
                margin-top: 2rem;
                color: #ccccccff;
                line-height: 3.9rem;
                ${onTablet} {
                        font-size: 2rem;
                }
        `,
        PresentaionImage: styled(motion.img)`
                width: 100%;
                max-width: 600px;
                z-index: 2;
        `,
};

export const servicesSectionStyles = {
        Wrapper: styled.div`
                height: 100vh;
                position: relative;
                padding: 6rem;
                ${getFlex('center', 'center', '1rem', 'column')};
                background-color: #343589aa;
        `,
        SectionHeader: styled(motion.p)`
                font-size: 4.5rem;
                font-weight: 600;
                background: linear-gradient(to top right, #ff6f00, #ffa800);
                -webkit-background-clip: text;
                background-clip: none;
                -webkit-text-fill-color: transparent;
                max-width: 1100px;
        `,
        SectionSubHeader: styled(motion.p)`
                font-size: 2.4rem;
                font-weight: 400;
                text-align: center;
                color: #fff;
                line-height: 3.5rem;
                max-width: 1100px;
                padding: 40px 10px;
                border-radius: 10px;
        `,
};

export const developmentsSectionStyles = {
        Wrapper: styled.div`
                min-height: 100vh;
                position: relative;
                padding: 15rem 6rem 2rem 6rem;
                background-color: #fffffffa;
                ${onTablet} {
                        padding: 10rem 2rem;
                }
        `,
        SectionHeader: styled(motion.p)`
                font-size: 3.5rem;
                font-weight: 600;
                background: linear-gradient(to top right, #ff6f00, #ffa800);
                -webkit-background-clip: text;
                background-clip: none;
                -webkit-text-fill-color: transparent;
                max-width: 1100px;
        `,
        SectionSubHeader: styled(motion.p)`
                font-size: 2.1rem;
                font-weight: 400;
                color: #425066;
                line-height: 3.5rem;
                max-width: 1100px;
                margin-top: 2rem;
                line-break: normal;
        `,
        SectionImage: styled(motion.img)`
                width: 100%;
        `,
        FeatureCard: styled(motion.div)`
                padding: 10px 20px;
                border-radius: 35px;
                display: flex;
                align-items: center;
                gap: 2rem;
                color: #fff;
                background: #bde0fe99;
        `,
        FeatureCardHeader: styled.div`
                font-size: 1.7rem;
                font-weight: 600;
                color: #666;
                margin-top: 0rem;
                line-break: normal;
        `,
};
