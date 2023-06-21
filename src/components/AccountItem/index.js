import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1687485600&x-signature=kbbfHmD6LyU7f5tGCscsIdHR37o%3D" alt="Hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hoa</span>
                    <FontAwesomeIcon className={cx('verified')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>@hoanguyen</span>
            </div>
        </div>
     );
}

export default AccountItem;