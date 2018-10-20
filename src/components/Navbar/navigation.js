import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap'
import cx from 'classnames'
import PrismaLogo from './images/prismaLogo'

import styles from './styles.module.css'

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      currentSection: 'top'
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleSection(id) {
    this.setState({
      currentSection: String(id)
    });
  }

  render() {
    return (
      <div>
        <Navbar
          light
          fixed="top"
          expand="md"
          className={cx(
            styles.navigationContainer,
            this.props.scrollClass > 100 ? styles.darkBackground : styles.fadedBackground
          )}
        >
          <Container>
            <NavbarBrand href="/">
              <div className={styles.logo}>
                <PrismaLogo />
                <span>Prisma</span>
              </div>
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle} />

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem onClick={() => this.handleSection('top')}>
                  <AnchorLink
                    offset='160'
                    className={cx(
                      styles.navigationLinks,
                      (this.state.currentSection === 'top') ? styles.activeLink : ''
                    )}
                    href="#top"
                  >
                    Home
                  </AnchorLink>
                </NavItem>

                <NavItem onClick={() => this.handleSection('expertise')}>
                  <AnchorLink
                    offset='160'
                    className={cx(
                      styles.navigationLinks,
                      (this.state.currentSection === 'expertise') ? styles.activeLink : ''
                    )}
                    href='#expertise'
                  >
                    Expertise
                  </AnchorLink>
                </NavItem>

                <NavItem onClick={() => this.handleSection('careers')}>
                  <AnchorLink
                    offset='160'
                    className={cx(
                      styles.navigationLinks,
                      (this.state.currentSection === 'careers') ? styles.activeLink : ''
                    )}
                    href='#careers'
                  >
                    Careers
                  </AnchorLink>
                </NavItem>

                <NavItem onClick={() => this.handleSection('aboutUs')}>
                  <AnchorLink
                    offset='160'
                    className={cx(
                      styles.navigationLinks,
                      (this.state.currentSection === 'aboutUs') ? styles.activeLink : ''
                    )}
                    href='#aboutUs'
                  >
                    About Us
                  </AnchorLink>
                </NavItem>

                <NavItem onClick={() => this.handleSection('contact')}>
                  <AnchorLink
                    offset='160'
                    className={cx(
                      styles.navigationLinks,
                      (this.state.currentSection === 'contact') ? styles.activeLink : ''
                    )}
                    href='#contact'
                  >
                    Contact
                  </AnchorLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
