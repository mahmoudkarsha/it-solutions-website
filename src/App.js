import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './Pages/StartPage';
import NavLayout from './Layouts/NavLayout';
import WhyChoooseUsPage from './Pages/WhyChooseUsPage';
import AboutUsPage from './Pages/AboutUsPage';
import { createGlobalStyle } from 'styled-components';
import { useGlobals } from './Providers/GlobalsProvider';
import ContactUs from './Pages/ContactUsPage';

const rtlLangs = ['arabic', 'kurdi_sorani', 'kurdish_latin'];
const arabicFontLangs = ['arabic', 'kurdi_sorani'];

const GlobalStyle = createGlobalStyle`
        * {
                box-sizing: border-box;
                margin: 0px;
                user-select: none;
                padding: 0px;
                font-family: ${({ $language }) => (arabicFontLangs.includes($language) ? 'Amiri' : 'Red Hat Display')} ;
                direction: ${({ $language }) => (rtlLangs.includes($language) ? 'rtl' : 'ltr')} ;
        }
        :root{
                font-size: 10px;
        }
        @media screen and (max-width: 1280px) {
                                :root {
                                        font-size: 7px;
                                }
                        }
        @media screen and (max-width: 768px) {
                                :root {
                                        font-size: 7px;
                                }
                        }
`;
function App() {
        const { language } = useGlobals();
        return (
                <>
                        <GlobalStyle $language={language} />
                        <main style={{ maxWidth: '100vw', overflow: 'clip' }}>
                                <BrowserRouter>
                                        <NavLayout />
                                        <Routes>
                                                <Route path='/' element={<StartPage />} />
                                                <Route path='/why-choose-us' element={<WhyChoooseUsPage />} />
                                                <Route path='/about' element={<AboutUsPage />} />
                                                <Route path='/contact-us' element={<ContactUs />} />
                                        </Routes>
                                </BrowserRouter>
                        </main>
                </>
        );
}

export default App;
