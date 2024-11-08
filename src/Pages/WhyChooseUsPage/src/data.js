import securityImage from '../../../Assets/images/why_choose_us/securty2.svg';
import responsiveImage from '../../../Assets/images/why_choose_us/responsive.svg';
import performanceImage from '../../../Assets/images/why_choose_us/performance.svg';
import dashboardImage from '../../../Assets/images/why_choose_us/dashboard.svg';
import cuttingEdgeImage from '../../../Assets/images/why_choose_us/cutting-edge.svg';

export const presentaion = {
        header: '',
};

export const features = {
        data: [
                {
                        header: 'Responsive Design',
                        sub_headers: [
                                "In today's digital age, ensuring that your website is accessible and visually appealing on all devices is crucial.",
                                "Our responsive design approach guarantees that your website will look great and function flawlessly, whether it's viewed on a smartphone, tablet, or desktop. We use advanced CSS frameworks and flexible grids to create layouts that adapt seamlessly to different screen sizes.",
                                'This not only enhances user experience but also improves SEO rankings, as search engines prioritize mobile-friendly websites.',
                                'Our design process includes rigorous testing across multiple devices and browsers to ensure consistent performance and visual appeal.',
                        ],
                        iamge: responsiveImage,
                        image_background: 'transparent',
                        section_background: 'transparent',
                        reverse: true,
                },
                {
                        header: 'High Security',
                        sub_headers: [
                                'With cyber threats becoming increasingly sophisticated, securing your website is more important than ever. We implement comprehensive security measures to protect your website from potential attacks.',
                                'Our security protocols include secure coding practices, SSL certificates, regular vulnerability assessments, and timely software updates.',
                                'We also employ advanced encryption techniques to safeguard sensitive data and ensure compliance with industry standards such as GDPR and PCI DSS.',
                                'By prioritizing security, we help you build trust with your users, protecting their data and your business reputation.',
                        ],
                        iamge: securityImage,
                        image_background: 'transparent',
                        section_background: 'transparent',
                        reverse: !true,
                },
                {
                        header: 'High Performance',
                        sub_headers: [
                                'A high-performing website is critical for retaining visitors and driving conversions.',
                                'We focus on optimizing every aspect of your website to ensure fast load times and smooth functionality.',
                                'Our performance optimization techniques include code minification, image optimization, server-side caching, and the use of Content Delivery Networks (CDNs) to reduce latency.',
                                'We also conduct thorough performance testing using tools like Google PageSpeed Insights and Lighthouse to identify and address any bottlenecks.',
                                "By delivering a fast and responsive user experience, we help you keep visitors engaged and improve your website's overall effectiveness.",
                        ],
                        iamge: performanceImage,
                        image_background: 'transparent',
                        section_background: 'transparent',
                        reverse: true,
                },
                {
                        header: 'Analytics Reports',
                        sub_headers: [
                                "Data-driven decision-making is essential for the success of your website so we integrate powerful analytics tools to provide you with detailed insights into your website's performance and user behavior.",
                                'Our analytics reports cover a wide range of metrics, including traffic sources, user demographics, engagement rates, and conversion tracking.',
                                'These insights enable you to understand how users interact with your website, identify areas for improvement, and measure the effectiveness of your marketing strategies.',
                                "With our comprehensive analytics reports, you can make informed decisions to enhance your website's performance and achieve your business objectives.",
                        ],
                        iamge: dashboardImage,
                        image_background: 'transparent',
                        section_background: 'transparent',
                        reverse: !true,
                },
                {
                        header: 'Cutting-Edge Technologies',
                        sub_headers: [
                                'We are committed to using the latest and most advanced technologies in web development to deliver superior solutions.',
                                'Our tech stack includes modern tools and frameworks such as React for front-end development, Node.js for back-end development, and MongoDB for database management.',
                                'By leveraging these cutting-edge technologies, we ensure that your website is not only robust and scalable but also future-proof and easy to maintain.',
                                'Our expertise in modern web technologies allows us to create dynamic and interactive web applications that meet the highest standards of performance and security.',
                        ],
                        iamge: cuttingEdgeImage,
                        image_background: 'transparent',
                        section_background: 'transparent',
                        reverse: true,
                },
        ],
};
