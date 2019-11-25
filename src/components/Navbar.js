import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

class Header extends React.Component {
    state = {
        isOpen: false,
        modal: false
    };
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/not-home">Not Home</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                      </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                        </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                        </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                        </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Button color="danger" onClick={this.toggleModaltoggle}>Ashiap</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggleModaltoggle}>
        <ModalHeader toggle={this.toggleModaltoggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleModaltoggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.toggleModaltoggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
            </div>
        );
    }
}




export default Header;