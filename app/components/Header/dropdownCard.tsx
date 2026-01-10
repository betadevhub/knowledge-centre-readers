import { FaRegCopy } from 'react-icons/fa';
import { socialMediaLinks } from './constants';
import classes from './Header.module.css';
import { useCopy } from '@/app/stateManagement/useCopy';

export default function DropdownCard() {
    const { handleCopyToClipboard } = useCopy() || {};

    const handleLinkClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={classes.dropdownContainer}>
            {/* <div className={classes.dropdownArrowPointer}></div> */}
            <div className={classes.fContainer}>
                <h3>Follow Us</h3>
                <p> Stay connected with us on the platform: <span onClick={() => { handleCopyToClipboard('ticketlush') }} style={{ fontWeight: 'bold', cursor: 'pointer' }}>@ticketlush <FaRegCopy /></span></p>
            </div>
            <div className={classes.dropdownContent}>
                {socialMediaLinks.map((link, index) => (
                    <div
                        key={index}
                        className={classes.dropdownItem}
                        onClick={() => handleLinkClick(link.url)}
                    >
                        <p className={classes.dropdownText}>{link.name}</p>
                        <div className={classes.dropdownIcon}>
                            {link.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}