import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss'
import images from '../../../../assets/images';


const cx= classNames.bind(styles);

function Header () {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='tiktok' />      
            </div>
            <div className={cx('search')}>
                <input placeholder="Search acoounts and videos" spellCheck={false} />
                <button className={cx('clear')}>
                    <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={cx('actions')}>
                <i className="fas fa-h3">Action</i>
            </div>
        </div>
    </header>
}

export default Header ;