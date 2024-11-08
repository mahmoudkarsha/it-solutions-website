import styled from 'styled-components';
import { onSmallLaptop } from '../../../Assets/other/screenSizes';
import { motion } from 'framer-motion';

export const contactUsStyles = {
        Wrapper: styled.div`
                min-height: 100vh;
                position: relative;
                padding: 100px 4rem;
                ${onSmallLaptop} {
                        height: auto;
                        min-height: 100vh;
                        padding: 40px 1.6rem;
                }
        `,
        Header: styled.p`
                font-size: clamp(1rem, 3vw, 4rem);
                font-weight: 500;
                color: #6da9ad;
                background: linear-gradient(to top right, #ff6f00, #ffa800);
                -webkit-background-clip: text;
                background-clip: none;
                -webkit-text-fill-color: transparent;
                margin-top: 0px;
        `,
        SubHeader: styled.p`
                font-size: clamp(1rem, 2vw, 2rem);
                font-weight: 500;
                margin-top: 3rem;
                color: #343434;
                line-height: clamp(1.4rem, 5vw, 4rem);
        `,
        StepImage: styled(motion.img)`
                width: 100%;
                max-width: 400px;
        `,
};
