
import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import { MdOutlineArrowDropDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { empty_avatar } from '../../img/images';
import { GrCircleQuestion } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import Navigation from '../Navigation';


const Header = () => {
  return (
    <div className={styles.header}>
        <header className={styles.header_main}>
            <div className={styles.header_main_container}>
                <div className={styles.header_main_container_flexbox}>
                    <div className={styles.header_main_container_flexbox_logo}>
                        <Link href={'/'} className={styles.header_main_container_flexbox_logo_link}>
                            <Image src={'https://static.vinted.com/assets/web-logo/default/logo.svg'} width={72} height={42} alt='' className={styles.img_logo}/>
                        </Link>
                    </div>

                    <div className={styles.header_main_container_flexbox_search}>
                        <div className={styles.header_main_container_flexbox_search_catalogue}>
                            <button>
                                <div>
                                    <span>Catalogue</span>
                                    <MdOutlineArrowDropDown fontSize={28}/>
                                </div>
                            </button>
                        </div>

                        <div className={styles.header_main_container_flexbox_search_inputBar}>
                            <CiSearch fontSize={20} color='rgb(153, 153, 153)'/>
                            <input type="text" placeholder='Search for items'/>
                        </div>
                    </div>

                    <div className={styles.header_main_container_flexbox_account}>
                        <div className={styles.header_main_container_flexbox_account_icons}>
                            <IoMailOutline fontSize={24} color='rgb(153, 153, 153)' />
                            <IoMdNotificationsOutline fontSize={24} color='rgb(153, 153, 153)'/>
                            <IoHeartOutline fontSize={24} color='rgb(153, 153, 153)'/>
                            <RxHamburgerMenu fontSize={24} color='rgb(153, 153, 153)' className={styles.display_none}/>
                        </div>

                        <div className={styles.header_main_container_flexbox_account_info}>
                            <Image src={empty_avatar} alt='' width={30} height={30} className={styles.header_main_container_flexbox_account_info_avatar}/>
                            <MdOutlineArrowDropDown fontSize={14} color='rgb(153, 153, 153)' style={{cursor: 'pointer'}}/>
                            <button>Sell now</button>
                            <GrCircleQuestion fontSize={24} color='rgb(153, 153, 153)'/>
                            <div className={styles.header_main_container_flexbox_account_info_language}>
                                EN
                                <MdOutlineArrowDropDown fontSize={20} color='rgb(153, 153, 153)' style={{cursor: 'pointer', opacity: 1}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className={styles.header_navigation}>
            <div className={styles.header_navigation_container}>
                <ul>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kids</li>
                    <li>Home</li>
                    <li>Entertaiment</li>
                    <li>Pet care</li>
                    <li>About</li>
                    <li>Our platform</li>
                </ul>

                <div className={`${styles.phoneSearchBar} ${styles.display_none}`}>
                    <div className={styles.phoneSearchBar_catalogue}>
                        <button>
                            <div>
                                <span>Catalogue</span>
                                <MdOutlineArrowDropDown fontSize={28}/>
                            </div>
                        </button>
                    </div>

                    <div className={styles.phoneSearchBar_inputBar}>
                        <CiSearch fontSize={20} color='rgb(153, 153, 153)'/>
                        <input type="text" placeholder='Search for items'/>
                    </div>
                </div>
            </div>
        </div>

        <Navigation />
    </div>
  )
}

export default Header