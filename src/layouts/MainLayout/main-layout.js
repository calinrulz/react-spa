import React, { Component } from 'react'

import Navigation from '../../components/Navbar/navigation'
import Header from '../Header/header'
import Expertise from '../Expertise/expertise'
import SectionDevider from '../../components/SectionDevider/section-devider';
import Careers from '../Careers/careers'
import AboutUs from '../AboutUs/about-us';
import Contact from '../Contact/contact';
import Footer from '../Footer/footer';

import expertiseDevider from '../../assets/images/expertise-devider.jpg'
import careerDevider from '../../assets/images/career-devider.jpg'

import styles from './styles.module.css'

export default class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastScrollPosition: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    this.setState({
      lastScrollPosition: event.target.scrollingElement.scrollTop
    });
  }

  render() {
    return (
      <div className={styles.siteContainer}>
        <Navigation scrollClass={this.state.lastScrollPosition} />
        <Header id='top' />
        <Expertise data={this.props} id='expertise' />
        <SectionDevider image={expertiseDevider} />
        <Careers data={this.props} id='careers' />
        <SectionDevider image={careerDevider} />
        <AboutUs data={this.props} id='aboutUs' />
        <Contact data={this.props} id='contact' />
        <Footer />
      </div>
    );
  }
}
