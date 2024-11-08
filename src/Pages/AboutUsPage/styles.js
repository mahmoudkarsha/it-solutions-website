import styled from 'styled-components';

export const aboutStyles = {
        wrapper: styled.div`
                padding: 100px 4rem;
                min-height: 100vh;
                background: rgb(2, 0, 36);
                background: -moz-linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%);
                background: -webkit-linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%);
                background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%);
        `,
        Header: styled.p`
                font-size: 4rem;
                font-weight: 500;
                color: #6da9ad;
                background: linear-gradient(to top right, #ff6f00, #ffa800);
                -webkit-background-clip: text;
                background-clip: none;
                -webkit-text-fill-color: transparent;
                margin-top: 6rem;
        `,
        SubHeader: styled.p`
                font-size: 2rem;
                font-weight: 500;
                margin-top: 1rem;
                color: #f3f3f3;
                line-height: 3.9rem;
        `,
        CvImageWrapper: styled.div`
                aspect-ratio: 1;
                background: linear-gradient(to top right, #ff6f00, #ffa800);
                padding: 3px;
                border-radius: 80px;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                max-height: 100%;
                max-height: 400px;
        `,
        SkillBox: styled.div`
                padding: 10px 30px;
                display: flex;
                align-items: center;
                gap: 2px;
                background-color: transparent;
                border-radius: 10px;
        `,
};
