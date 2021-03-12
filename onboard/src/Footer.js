import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>

            <Container>
                <Row>
                    <Column>
                        <a href="https://kyh.se/" /* class="w-24 mb-4" */>
                            <svg viewBox="0 0 424.37 154.16" class="logotype">
                                <g>
                                    <path className="logotype__arrow" d="M3 104.18c9.24-9.47 18.66-18.77 28.06-28.09L4.38 49.37c-9.58-9.59 5.27-24.44 14.85-14.85C30.67 46 60.82 76.09 60.82 76.09S29.61 107 17.88 119c-9.47 9.75-24.3-5.12-14.88-14.82"></path>
                                    <path className="logotype__text" d="M86.43 66.65V11.24A10.43 10.43 0 0 0 85 5.87C80.42-2.07 65.38-.3 65.38 11.16L65.4 112a9.54 9.54 0 0 0 4.88 8.73c6.2 3.52 16.16.62 16.16-8.71v-24.5-19.91-.91"></path>
                                    <path className="logotype__text" d="M149.77 104.18c-9.24-9.47-18.66-18.77-28.06-28.09l26.71-26.72c9.58-9.59-5.27-24.44-14.85-14.85C122.13 46 92 76.09 92 76.09s31.21 30.91 42.94 43c9.47 9.71 24.3-5.16 14.85-14.86"></path>
                                    <path className="logotype__arrow" d="M366.57 104.18c9.24-9.47 18.67-18.77 28.06-28.09l-26.71-26.72c-9.58-9.59 5.27-24.44 14.85-14.85 11.44 11.45 41.6 41.57 41.6 41.57S393.16 107 381.42 119c-9.47 9.71-24.3-5.16-14.85-14.86"></path>
                                </g>
                                <g>
                                    <path className="logotype__text" d="M249.9 119.48c0-.31 0-.61-.05-.9V99.52 45.2a11.08 11.08 0 0 0-.25-2.29v-.79c0-13.54-21-13.54-21 0v47.94c0 .83-.76 2.54-2.3 4.4a19.54 19.54 0 0 1-11.52 6.85h-.28a25.47 25.47 0 0 1-5 .52h-.3a29.39 29.39 0 0 1-5.37-.54h-.14l-.63-.15c-9.09-2.07-13.21-8.28-13.19-11.1V42.12c0-13.54-21-13.54-21 0v45.45a35.44 35.44 0 0 0 2.6 13.38c5 11.12 15.72 18 27.56 20.48a7.34 7.34 0 0 0 1.24.35 49.48 49.48 0 0 0 8.54.75h.89a49.37 49.37 0 0 0 8.53-.75 7.2 7.2 0 0 0 1.25-.35 46.75 46.75 0 0 0 9.36-3V144a9.54 9.54 0 0 0 4.88 8.74c6.2 3.52 16.16.62 16.16-8.71zM272.91 34.68v19.91a9.08 9.08 0 0 0 0 .91V109a11.93 11.93 0 0 0 .24 2.3v.7c0 13.54 21 13.54 21 0V64.11c0-.83.76-2.54 2.3-4.41A19.54 19.54 0 0 1 308 52.85h.29a25.29 25.29 0 0 1 5-.52h.31a27.81 27.81 0 0 1 5.37.54h.13l.63.16c9.09 2.07 13.21 8.28 13.19 11.1V112c0 13.54 21 13.54 21 0V66.59a35.36 35.36 0 0 0-2.6-13.37c-5-11.13-15.72-18-27.55-20.49a8.87 8.87 0 0 0-1.25-.34 49.37 49.37 0 0 0-8.53-.76h-.9a49.37 49.37 0 0 0-8.53.76 8.87 8.87 0 0 0-1.25.34 47.17 47.17 0 0 0-9.36 3V10.18a9.52 9.52 0 0 0-4.88-8.73c-6.2-3.52-16.16-.62-16.16 8.71z"></path>
                                </g>
                            </svg>
                        </a>
                        <a /* class="text-white no-underline font-serif mb-2 text-lg" */ href="tel:076-885 21 20">
                            076-885 21 20
        </a>
                        <a /* class="text-white no-underline font-serif text-lg" */ href="mailto:%20antagningen@kyh.se">
                            antagningen@kyh.se
        </a>

                        <a href="https://www.facebook.com/KYHsverige/">
                            <span className="fa-stack">
                                <i className="fas fa-circle fa-stack-2x text-near-white"></i>
                                <i className="fab fa-facebook-f fa-stack-1x text-black"></i>
                                FB
                             </span>
                        </a>
                        <a href="https://www.linkedin.com/school/kyh/?originalSubdomain=se">
                            <span className="fa-stack">
                                <i className="fas fa-circle fa-stack-2x text-near-white"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x text-black"></i>
                                LK
                             </span>
                        </a>


                    </Column>
                    <Column>
                        <Heading>
                            <a href="https://kyh.se/utbildningar/" /* class="text-lg font-serif text-white no-underline mb-3" */>
                                Våra utbildningar
                </a>
                        </Heading>
                        <a href="https://kyh.se/utbildningar/?&amp;bransch=4" /* class="font-light text-white no-underline mb-3"  */>
                            Samhällsbyggnad
                </a>
                        <a href="https://kyh.se/utbildningar/?&amp;bransch=2" /* class="font-light text-white no-underline mb-3" */ >
                            IT
                </a>
                        <a href="https://kyh.se/utbildningar/?stad=null&amp;bransch=18" /* class="font-light text-white no-underline mb-3" */ >
                            Ekonomi
                </a>

                    </Column>
                    <Column>
                        <Heading>
                            <a href="https://kyh.se/inspiration/" /* class="text-lg font-serif text-white no-underline mb-3" */ >
                                Information
                </a>
                        </Heading>
                        <a href="https://kyh.se/inspiration/kyhs-digitala-branschdag-2021/" /* class="font-light text-white no-underline mb-3" */ >
                            KYHs DIGITALA BRANSCHDAG 2021
                </a>
                        <a href="https://kyh.se/inspiration/?sida=1&amp;kategori=26" /* class="font-light text-white no-underline mb-3" */ >
                            Intervjuer med studenter &amp; undervisande
                </a>
                        <a href="https://kyh.se/ansokan/" /* class="font-light text-white no-underline mb-3" */ >
                            Vad undrar du om antagningen?
                </a>
                    </Column>
                    <Column>
                        <Heading>
                            <a href="https://kyh.se/kontakta-oss/" /* class="text-lg font-serif text-white no-underline mb-3" */ >
                                Kontakt
                </a>
                        </Heading>
                        <a href="https://kyh.se/integritetspolicy/" /* class="font-light text-white no-underline mb-3" */ >
                            Integritetspolicy
                </a>
                    </Column>
                </Row>
            </Container>
        </Box>
    )
}
export default Footer;