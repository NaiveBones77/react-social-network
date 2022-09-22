import styles from './Description.module.css'
import defaultAvatar from '../../../assets/images/imgAvatarDefault.png'
import {Image} from 'antd';
import {Col, Divider, Row} from 'antd';
import {Badge, Descriptions} from 'antd';
import { Card } from 'antd';
import "antd/dist/antd.css";
import Preloader from "../../common/Preloader/Preloader";
import {useEffect} from "react";
import {Link, Navigate} from "react-router-dom";

const Description = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div>
            <div>
                <img className={styles.topImage}
                     src='https://wallpaperping.com/wp-content/uploads/2020/01/pexels-photo-466685.jpeg'/>
            </div>
            <Card className={styles.description}>
            <Row wrap={false} >
                <Col flex="none">
                    <div className={styles.avaImage}>
                        <Image src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar}
                        />
                    </div>
                </Col>
                <Col flex='auto'>
                    <Descriptions column={1} style={{padding: '0 16px'}} title="User Info" layout="horizontal"
                                  size='small'>
                        <Descriptions.Item label="Name">{props.profile.fullName}</Descriptions.Item>
                        <Descriptions.Item label="About me">{props.profile.aboutMe}</Descriptions.Item>
                        <Descriptions.Item label="Looking for a job">
                            <Badge status={props.profile.isLookingForAJob ? "success" : "error"}
                                   text={props.profile.lookingForAJobDescription}/>
                        </Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col flex='auto'>
                    <Descriptions column={1} style={{padding: '0 16px'}} title="Contacts" layout="horizontal"
                                  size='small'>
                        {Object.keys(props.profile.contacts).map(key => (
                            props.profile.contacts[key] ?
                                <Descriptions.Item label={key}>{
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={props.profile.contacts[key]}>
                                        {props.profile.contacts[key]}
                                    </a>
                            }</Descriptions.Item> : null
                        ))}
                    </Descriptions>
                </Col>
            </Row>
            </Card>

        </div>
    )
}

export default Description;