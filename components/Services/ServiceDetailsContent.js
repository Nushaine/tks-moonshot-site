import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class ServiceDetailsContent extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <section className="services-details-area ptb-100">
                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="services-details-image">
                                <img src={require("../../images/services/single-service.jpg")} alt="image" />

                                <div className="video-box">
                                    <Link href="#play-video">
                                        <a
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn"
                                        > 
                                            <i className="pe-7s-play"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h2>Services Description</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>

                                <p>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>

                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter.</p>

                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="services-details-info">
                                <h3>Our Working Process</h3>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                                    <li>Creative Team Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</li>
                                    <li>Branding But I must explain to you how all this mistaken idea of denouncing.</li>
                                    <li>Clean Code At vero eos et accusamus et iusto odio dignissimos ducimus qui.</li>
                                    <li>UX/UI Friendly On the other hand, we denounce with righteous indignation.</li>
                                    <li>24/7 Support There are many variations of passages of Lorem Ipsum available.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDetailsContent;