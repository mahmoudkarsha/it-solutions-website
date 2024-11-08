import stepConversationSvg from '../../../Assets/images/steps/step-conversation.svg';
import stepAnalyzeSvg from '../../../Assets/images/steps/step-analyze.svg';
import stepBuildStructureSvg from '../../../Assets/images/steps/step-build-structure.svg';
import stepDesignSvg from '../../../Assets/images/steps/step-design.svg';
import stepDevelopmentSvg from '../../../Assets/images/steps/step-development.svg';
import stepTestSvg from '../../../Assets/images/steps/step-test.svg';
import stepDeploySvg from '../../../Assets/images/steps/step-deploy.svg';
import stepLunchSvg from '../../../Assets/images/steps/step-lunch.svg';

export const steps = [
        {
                step_number: 'STEP -1',
                header: 'Conversation with Client',
                sub_header: 'Our process begins with a detailed conversation with the client to understand their vision, goals, and requirements. We prioritize clear communication to ensure we grasp the full scope of the project. During this phase, we discuss ideas, gather initial information, and establish a strong foundation for our collaboration.',
                image: stepConversationSvg,
                reverse: true,
        },
        {
                step_number: 'STEP -2',
                header: 'Analyze',
                sub_header: "In the analysis phase, we delve deeper into the client's needs and the project's requirements. This involves conducting thorough research, understanding the target audience, and analyzing competitors. Our goal is to identify key features and functionalities that will drive the project's success. We create a comprehensive project plan and outline the necessary steps to achieve the desired outcomes.",
                image: stepAnalyzeSvg,
                reverse: false,
        },
        {
                step_number: 'STEP -3',
                header: 'Build Structure',
                sub_header: 'Building the structure involves creating a solid framework for the project. We develop a detailed site map and wireframes to visualize the layout and user flow. This phase ensures that all elements are logically organized, enhancing the user experience. Our team collaborates closely with the client to refine the structure and make sure it aligns with their vision.',
                image: stepBuildStructureSvg,
                reverse: true,
        },
        {
                step_number: 'STEP -4',
                header: 'Design',
                sub_header: "During the design phase, our creative team brings the project to life with stunning visuals and intuitive interfaces. We focus on creating a cohesive design that reflects the client's brand identity while ensuring usability and accessibility. Our designers use the latest tools and trends to craft a visually appealing and functional design that engages users and enhances the overall experience.",
                image: stepDesignSvg,
                reverse: false,
        },
        {
                step_number: 'STEP -5',
                header: 'Development',
                sub_header: 'With the design approved, our development team takes over to transform the design into a fully functional website. We use cutting-edge technologies and best practices to build a robust and scalable solution. Our developers ensure that the website is responsive, fast, and secure. We maintain constant communication with the client to provide updates and address any questions or concerns.',
                image: stepDevelopmentSvg,
                reverse: true,
        },
        {
                step_number: 'STEP -6',
                header: 'Testing',
                sub_header: 'Testing is a critical phase where we rigorously test the website to identify and fix any issues. We perform extensive quality assurance checks, including functionality testing, performance testing, and cross-browser compatibility testing. Our goal is to ensure that the website functions flawlessly and meets the highest standards of quality before it goes live.',
                image: stepTestSvg,
                reverse: false,
        },
        {
                step_number: 'STEP -7',
                header: 'Deploy to Server',
                sub_header: 'Once the website passes all tests, we proceed to deploy it to the server. We handle the entire deployment process, ensuring a smooth transition from development to the live environment. Our team configures the server, sets up the necessary databases, and ensures that all components are properly integrated and functioning as intended.',
                image: stepDeploySvg,
                reverse: true,
        },
        {
                step_number: 'STEP -8',
                header: 'Launch Project',
                sub_header: 'The final step is the official launch of the website. We conduct a final review to ensure everything is perfect before making it live. Our team monitors the website closely during the initial launch period to address any potential issues promptly. We also provide support and guidance to the client to help them manage and maintain their new website effectively.',
                image: stepLunchSvg,
                reverse: false,
        },
];
