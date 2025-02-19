import React, { Component } from 'react';
import Link from 'next/link';

class OurWorks extends Component {
    render() {
        return (
            <section className="case-studies-area lg-portfolio ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src={require("../../images/works/work1.jpg")} alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="#">
                                            <a>Development</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Designing a better cinema experience</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src={require("../../images/works/work2.jpg")} alt="image" />
                                <div className="content text-center">
                                    <span>
                                        <Link href="#">
                                            <a>Web Design</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Building design process within teams</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src={require("../../images/works/work3.jpg")} alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="#">
                                            <a>eCommerce</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>How intercom brings play eCommerce</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src={require("../../images/works/work4.jpg")} alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="#">
                                            <a>Reactjs</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>How to start a project with Reactjs</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src={require("../../images/works/work5.jpg")} alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="#">
                                            <a>Angular js</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Examples of different types of sprints</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src={require("../../images/works/work6.jpg")} alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="#">
                                            <a>UI/UX Design</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Redesigning the New York times app</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src={require("../../images/works/work7.jpg")} alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="#">
                                            <a>Graphic Design</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Design the Web, Mobile, and eCommerce</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src={require("../../images/works/work8.jpg")} alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="#">
                                            <a>Bootstrap</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Redesigning the New York times app</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src={require("../../images/works/work9.jpg")} alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="#">
                                            <a>App Development</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>We provide any type of app development</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src={require("../../images/works/work10.jpg")} alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="#">
                                            <a>Marketing</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>We provide any type of marketing support</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src={require("../../images/works/work11.jpg")} alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="#">
                                            <a>Email Marketing</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>We provide any type of Email Marketing</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src={require("../../images/works/work12.jpg")} alt="image" />

                                <div className="content text-center">
                                    <span>
                                        <Link href="#">
                                            <a>Marketing & Reporting</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>We provide any type of Marketing & Reporting</a>
                                        </Link>
                                    </h3>

                                    <Link href="/portfolio-details">
                                        <a className="custom-btn">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="pagination-area">
                        <Link href="#">
                            <a className="prev page-numbers">
                                <i className="icofont-double-left"></i>
                            </a>
                        </Link>

                        <Link href="#">
                            <a className="page-numbers">1</a>
                        </Link>

                        <span className="page-numbers current">2</span>

                        <Link href="#">
                            <a className="page-numbers">3</a>
                        </Link>

                        <Link href="#">
                            <a className="page-numbers">4</a>
                        </Link>

                        <Link href="#">
                            <a className="next page-numbers">
                                <i className="icofont-double-right"></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurWorks;