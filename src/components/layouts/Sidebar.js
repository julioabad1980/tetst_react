import React, {useState} from 'react'
import {FaGithub} from 'react-icons/fa'
import {
    MdAccountCircle,
    MdArrowDropDownCircle,
    MdBorderAll,
    MdBrush,
    MdChromeReaderMode,
    MdDashboard,
    MdExtension,
    MdGroupWork,
    MdInsertChart,
    MdKeyboardArrowDown,
    MdNotificationsActive,
    MdPages,
    MdRadioButtonChecked,
    MdSend,
    MdStar,
    MdTextFields,
    MdViewCarousel,
    MdViewDay,
    MdViewList,
    MdWeb,
    MdWidgets,
} from 'react-icons/md';
import {NavLink} from 'react-router-dom';
import {
    // UncontrolledTooltip,
    Collapse,
    Nav,
    Navbar,
    NavItem,
    NavLink as BSNavLink,
} from 'reactstrap'

import logo200Image from '../../assets/img/logo/logo_200.png';
import sidebarBgImage from '../../assets/img/sidebar/sidebar-4.jpg';
import SourceLink from "../SourceLink";
import bn from '../../utils/Bemname'

const bem = bn.create('sidebar');
const sidebarBackground = {
    backgroundImage: `url("${sidebarBgImage}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
const navItems = [
    {to: '/', name: 'dashboard', exact: true, Icon: MdDashboard},
    {to: '/cards', name: 'cards', exact: false, Icon: MdWeb},
    {to: '/charts', name: 'charts', exact: false, Icon: MdInsertChart},
    {to: '/widgets', name: 'widgets', exact: false, Icon: MdWidgets},
]

const navComponents = [
    {to: '/buttons', name: 'buttons', exact: false, Icon: MdRadioButtonChecked},
    {
        to: '/button-groups',
        name: 'button groups',
        exact: false,
        Icon: MdGroupWork,
    },
    {to: '/forms', name: 'forms', exact: false, Icon: MdChromeReaderMode},
    {to: '/input-groups', name: 'input groups', exact: false, Icon: MdViewList},
    {
        to: '/dropdowns',
        name: 'dropdowns',
        exact: false,
        Icon: MdArrowDropDownCircle,
    },
    {to: '/badges', name: 'badges', exact: false, Icon: MdStar},
    {to: '/alerts', name: 'alerts', exact: false, Icon: MdNotificationsActive},
    {to: '/progress', name: 'progress', exact: false, Icon: MdBrush},
    {to: '/modals', name: 'modals', exact: false, Icon: MdViewDay},
];

const navContents = [
    {to: '/typography', name: 'typography', exact: false, Icon: MdTextFields},
    {to: '/tables', name: 'tables', exact: false, Icon: MdBorderAll},
];

const pageContents = [
    {to: '/login', name: 'login / signup', exact: false, Icon: MdAccountCircle},
    {
        to: '/login-modal',
        name: 'login modal',
        exact: false,
        Icon: MdViewCarousel,
    },
];


function SideBar() {

    const [isOpenComponents, setIsOpenComponents] = useState(true);
    const [isOpenContents, setIsOpenContents] = useState(true);
    const [isOpenPages, setIsOpenPages] = useState(true);


    const handleClick = () => {
    }

    return (
        <aside className={bem.b()} data-image={sidebarBgImage}>
            <div className={bem.e('background')} style={sidebarBackground}/>
            <div className={bem.e('content')}>
                <Navbar>
                    <SourceLink className="navbar-brand d-flex">
                        <img
                            src={logo200Image}
                            width="40"
                            height="30"
                            className="pr-2"
                            alt=""
                        />
                        <span className="text-white">
                Reduction <FaGithub/>
              </span>
                    </SourceLink>
                </Navbar>
                <Nav vertical>
                    {navItems.map(({to, name, exact, Icon}, index) => (
                        <NavItem key={index} className={bem.e('nav-item')}>
                            <BSNavLink
                                id={`navItem-${name}-${index}`}
                                className="text-uppercase"
                                tag={NavLink}
                                to={to}
                                activeClassName="active"
                                exact={exact}
                            >
                                <Icon className={bem.e('nav-item-icon')}/>
                                <span className="">{name}</span>
                            </BSNavLink>
                        </NavItem>
                    ))}

                    <NavItem
                        className={bem.e('nav-item')}
                        onClick={handleClick('Components')}
                    >
                        <BSNavLink className={bem.e('nav-item-collapse')}>
                            <div className="d-flex">
                                <MdExtension className={bem.e('nav-item-icon')}/>
                                <span className=" align-self-start">Components</span>
                            </div>
                            <MdKeyboardArrowDown
                                className={bem.e('nav-item-icon')}
                                style={{
                                    padding: 0,
                                    transform: isOpenComponents
                                        ? 'rotate(0deg)'
                                        : 'rotate(-90deg)',
                                    transitionDuration: '0.3s',
                                    transitionProperty: 'transform',
                                }}
                            />
                        </BSNavLink>
                    </NavItem>
                    <Collapse isOpen={isOpenComponents}>
                        {navComponents.map(({to, name, exact, Icon}, index) => (
                            <NavItem key={index} className={bem.e('nav-item')}>
                                <BSNavLink
                                    id={`navItem-${name}-${index}`}
                                    className="text-uppercase"
                                    tag={NavLink}
                                    to={to}
                                    activeClassName="active"
                                    exact={exact}
                                >
                                    <Icon className={bem.e('nav-item-icon')}/>
                                    <span className="">{name}</span>
                                </BSNavLink>
                            </NavItem>
                        ))}
                    </Collapse>

                    <NavItem
                        className={bem.e('nav-item')}
                        onClick={handleClick('Contents')}
                    >
                        <BSNavLink className={bem.e('nav-item-collapse')}>
                            <div className="d-flex">
                                <MdSend className={bem.e('nav-item-icon')}/>
                                <span className="">Contents</span>
                            </div>
                            <MdKeyboardArrowDown
                                className={bem.e('nav-item-icon')}
                                style={{
                                    padding: 0,
                                    transform: isOpenContents
                                        ? 'rotate(0deg)'
                                        : 'rotate(-90deg)',
                                    transitionDuration: '0.3s',
                                    transitionProperty: 'transform',
                                }}
                            />
                        </BSNavLink>
                    </NavItem>
                    <Collapse isOpen={isOpenContents}>
                        {navContents.map(({to, name, exact, Icon}, index) => (
                            <NavItem key={index} className={bem.e('nav-item')}>
                                <BSNavLink
                                    id={`navItem-${name}-${index}`}
                                    className="text-uppercase"
                                    tag={NavLink}
                                    to={to}
                                    activeClassName="active"
                                    exact={exact}
                                >
                                    <Icon className={bem.e('nav-item-icon')}/>
                                    <span className="">{name}</span>
                                </BSNavLink>
                            </NavItem>
                        ))}
                    </Collapse>

                    <NavItem
                        className={bem.e('nav-item')}
                        onClick={handleClick('Pages')}
                    >
                        <BSNavLink className={bem.e('nav-item-collapse')}>
                            <div className="d-flex">
                                <MdPages className={bem.e('nav-item-icon')}/>
                                <span className="">Pages</span>
                            </div>
                            <MdKeyboardArrowDown
                                className={bem.e('nav-item-icon')}
                                style={{
                                    padding: 0,
                                    transform: isOpenPages
                                        ? 'rotate(0deg)'
                                        : 'rotate(-90deg)',
                                    transitionDuration: '0.3s',
                                    transitionProperty: 'transform',
                                }}
                            />
                        </BSNavLink>
                    </NavItem>
                    <Collapse isOpen={isOpenPages}>
                        {pageContents.map(({to, name, exact, Icon}, index) => (
                            <NavItem key={index} className={bem.e('nav-item')}>
                                <BSNavLink
                                    id={`navItem-${name}-${index}`}
                                    className="text-uppercase"
                                    tag={NavLink}
                                    to={to}
                                    activeClassName="active"
                                    exact={exact}
                                >
                                    <Icon className={bem.e('nav-item-icon')}/>
                                    <span className="">{name}</span>
                                </BSNavLink>
                            </NavItem>
                        ))}
                    </Collapse>
                </Nav>
            </div>
        </aside>
    )

}

export default SideBar
