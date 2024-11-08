import styled from 'styled-components';
import { onLargeLaptop, onSmallLaptop } from '../../../Assets/other/screenSizes';
import { getFlex } from '../../../Assets/other/getFlex';
import { redGradient } from '../../../Assets/colors/gredients';

export const featuresSectionStyles = {
        Wrapper: styled.section`
                min-height: 100vh;
                padding: 100px 20rem;
                background: ${({ $bg }) => ($bg ? $bg : 'transparent')};
                ${getFlex()};
                flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
                ${onLargeLaptop} {
                        padding: 100px 3rem;
                        flex-direction: column;
                        gap: 3rem;
                }
                ${onSmallLaptop} {
                        padding: 100px 2rem;
                }
        `,
        DescriptionWrapper: styled.div``,
        Header: styled.p`
                font-size: 3rem;
                font-weight: 500;
                color: #6da9ad;
                background: #343589;
                margin-bottom: 2rem;
                -webkit-background-clip: text;
                background-clip: none;
                -webkit-text-fill-color: transparent;
        `,
        SubHeader: styled.p`
                font-size: 2rem;
                font-weight: 400;
                margin-top: 1.2rem;
                color: #425066;
                line-height: 3rem;
                border-bottom: 1px solid #34358911;
                padding-bottom: 10px;
        `,
        ImageWrapper: styled.div`
                ${getFlex()};
                padding: 0px;
                position: relative;
                min-width: 50%;
        `,
        ColoredCard: styled.div`
                top: 30px;
                bottom: 30px;
                ${redGradient}
                position: absolute;
                transform: rotate(0deg);
                height: calc(100% - 60px);
                width: 100%;
                border-radius: 20px;
                max-width: 600px;
                width: 100%;
                aspect-ratio: 1;
        `,
        FeatureImage: styled.img`
                border-radius: 20px;
                height: 100%;
                object-fit: cover;
                max-width: 600px;
                width: 100%;
                z-index: 1;
        `,
};
