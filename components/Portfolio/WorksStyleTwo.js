import React, { Component } from 'react';
import Link from 'next/link';

class WorksStyleTwo extends Component {
    render() {
        return (
            <section className="case-studies-area ptb-100 bg-fcfbfb">
                <div className="container">
                    <div className="section-title">
                        <h2>Our All Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="work-card">
                                <img src={require("../../images/works/work1.jpg")} alt="image" />

                                <div className="content">
                                    <span>
                                        <Link href="#">
                                            <a>SEO Optimization</a>
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
                                <div className="content">
                                    <span>
                                        <Link href="#">
                                            <a>Digital Marketing</a>
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

                                <div className="content">
                                    <span>
                                        <Link href="#">
                                            <a>Keyword Targeting</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>How intercom brings play into their design process</a>
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

                                <div className="content">
                                    <span>
                                        <Link href="#">
                                            <a>Email Marketing</a>
                                        </Link>
                                    </span>

                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Stuck with to-do list, I created a new app for myself</a>
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

                                <div className="content">
                                    <span>
                                        <Link href="#">
                                            <a>Marketing & Reporting</a>
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

                                <div className="content">
                                    <span>
                                        <Link href="#">
                                            <a>Development</a>
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
                    </div>

                    <div className="view-more-work">
                        <Link href="/portfolio">
                            <a className="btn btn-primary">
                                <i className="icofont-tasks"></i> View More
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default WorksStyleTwo;