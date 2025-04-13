import Head from 'next/head';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Layout from '../components/layouts/Layout';

const TermsOfUse = () => {
    return (
        <Layout>
            <Head>
                <title>Terms of Use || NextDev Labs</title>
            </Head>

            <Breadcrumb title="Terms of Use" current="Terms of Use"/>

            <main className="page-wrappper">
                <div className="terms-of-use-area ax-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="content">
                                    <div className="inner">
                                        <div className="section-title">
                                            <h4 className="title">
                                                These Terms of Use were published on August 26th, 2024.
                                            </h4>
                                        </div>
                                        
                                        <h3>Introduction</h3>
                                        <p className="subtitle-2 mb--40">
                                            Welcome to NextDev Labs. By accessing or using our website, you agree to be bound by these Terms of Use. If you do not agree, please do not use our services.
                                        </p>

                                        <h3>About NextDev Labs</h3>
                                        <p className="subtitle-2 mb--40">
                                            NextDev Labs is a web development agency providing digital solutions, including website and application development. For any inquiries regarding these terms, please contact us at <a href="#">info@nextdev.co.in</a>.
                                        </p>

                                        <h3>Use of Our Services</h3>
                                        <p className="subtitle-2 mb--40">
                                            You agree to use our services only for lawful purposes and in accordance with these Terms of Use. Prohibited uses include violating laws, transmitting harmful content, and interfering with website functionality.
                                        </p>

                                        <h3>Intellectual Property Rights</h3>
                                        <p className="subtitle-2 mb--40">
                                            All content on this site, including text, graphics, logos, and software, is the property of NextDev Labs and is protected by copyright and trademark laws. You may not reproduce, modify, or distribute any content without permission.
                                        </p>

                                        <h3>User Obligations</h3>
                                        <ul className="mb--40">
                                            <li>Ensure that all information you provide to us is accurate and up to date.</li>
                                            <li>Do not engage in unauthorized access or disruption of our services.</li>
                                            <li>Respect the intellectual property rights of NextDev Labs and third parties.</li>
                                        </ul>

                                        <h3>Limitation of Liability</h3>
                                        <p className="subtitle-2 mb--40">
                                            NextDev Labs is not liable for any damages resulting from the use or inability to use our services, including direct, indirect, incidental, or consequential damages.
                                        </p>

                                        <h3>Termination</h3>
                                        <p className="subtitle-2 mb--40">
                                            We reserve the right to terminate or suspend access to our services for violations of these terms or any illegal activity.
                                        </p>

                                        <h3>Changes to These Terms</h3>
                                        <p className="subtitle-2 mb--40">
                                            NextDev Labs reserves the right to update these Terms of Use at any time. Changes will be posted on this page with the latest update date.
                                        </p>

                                        <h3>Contact Information</h3>
                                        <p className="subtitle-2">
                                            If you have any questions about these Terms of Use, please contact us at info@nextdev.co.in.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default TermsOfUse;
