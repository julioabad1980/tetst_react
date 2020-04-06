
import withBadge from '../../hocs/withBadge'
import React from 'react';
import Nab from '../../components/navbar/NavBar'
import {
    MdClearAll,
    MdExitToApp,
    MdHelp,
    MdInsertChart,
    MdMessage,
    MdNotificationsActive,
    MdNotificationsNone,
    MdPersonPin,
    MdSettingsApplications,
} from 'react-icons/md';
import {
    Button,
    ListGroup,
    ListGroupItem,
    // NavbarToggler,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Popover,
    PopoverBody,
} from 'reactstrap';
import bn from '../../utils/Bemname';

const bem = bn.create('header');

const MdNotificationsActiveWithBadge = withBadge({
    size: 'md',
    color: 'primary',
    style: {
        top: -10,
        right: -10,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    children: <small>5</small>,
})(MdNotificationsActive);

class Header extends React.Component {
    state = {
        isOpenNotificationPopover: false,
        isNotificationConfirmed: false,
        isOpenUserCardPopover: false,
    };

    toggleNotificationPopover = () => {
        this.setState({
            isOpenNotificationPopover: !this.state.isOpenNotificationPopover,
        });

        if (!this.state.isNotificationConfirmed) {
            this.setState({isNotificationConfirmed: true});
        }
    };

    toggleUserCardPopover = () => {
        this.setState({
            isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
        });
    };

    handleSidebarControlButton = event => {
        event.preventDefault();
        event.stopPropagation();

        document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
    };

    render() {
        const {isNotificationConfirmed} = this.state;

        return (


                    <Nab marginRightItems={150} shadow={' shadow-sm mb-5'}/>


        );
    }
}

export default Header;
