import React, { useState } from 'react';
import { Divider, Drawer } from 'antd';
import styles from './ChatDrawer.module.css';
import { Input } from 'antd';
import { RiSendPlaneFill } from "react-icons/ri";

const { TextArea } = Input;
const peopleData = [
    {
        name: 'Sarah Barr',
        profile_picture: 'https://picsum.photos/200/200?random=1',
        location: 'Shanechester'
    },
    {
        name: 'Barry Meyer',
        profile_picture: 'https://picsum.photos/200/200?random=2',
        location: 'Pittmanchester'
    },
    {
        name: 'Daniel Mills',
        profile_picture: 'https://picsum.photos/200/200?random=3',
        location: 'Boonefort'
    },
    {
        name: 'Matthew Morgan',
        profile_picture: 'https://picsum.photos/200/200?random=4',
        location: 'Port Jeremy'
    },
    {
        name: 'Jennifer Stevens',
        profile_picture: 'https://picsum.photos/200/200?random=5',
        location: 'Lake Joseph'
    },
    {
        name: 'Stephanie Williams',
        profile_picture: 'https://picsum.photos/200/200?random=6',
        location: 'Katherinehaven'
    },
    {
        name: 'Rebecca Reeves',
        profile_picture: 'https://picsum.photos/200/200?random=7',
        location: 'West Yolanda'
    },
    {
        name: 'Diane Santiago',
        profile_picture: 'https://picsum.photos/200/200?random=8',
        location: 'Port David'
    },
    {
        name: 'Olivia Rogers',
        profile_picture: 'https://picsum.photos/200/200?random=9',
        location: 'West Patricia'
    },
    {
        name: 'Gina Herman',
        profile_picture: 'https://picsum.photos/200/200?random=10',
        location: 'South Amanda'
    },
    {
        name: 'Shirley Martin',
        profile_picture: 'https://picsum.photos/200/200?random=11',
        location: 'Charlesmouth'
    },
    {
        name: 'Matthew Miller',
        profile_picture: 'https://picsum.photos/200/200?random=12',
        location: 'Garciaview'
    },
    {
        name: 'Craig Diaz',
        profile_picture: 'https://picsum.photos/200/200?random=13',
        location: 'Williamsstad'
    },
    {
        name: 'Kevin Mullins',
        profile_picture: 'https://picsum.photos/200/200?random=14',
        location: 'South Kathleenberg'
    },
    {
        name: 'Andre Gray',
        profile_picture: 'https://picsum.photos/200/200?random=15',
        location: 'Lake Julie'
    },
    {
        name: 'Scott Young',
        profile_picture: 'https://picsum.photos/200/200?random=16',
        location: 'Howardport'
    },
    {
        name: 'David Warren',
        profile_picture: 'https://picsum.photos/200/200?random=17',
        location: 'South David'
    },
    {
        name: 'Sarah Campbell',
        profile_picture: 'https://picsum.photos/200/200?random=18',
        location: 'West Randymouth'
    },
    {
        name: 'Laura Maldonado',
        profile_picture: 'https://picsum.photos/200/200?random=19',
        location: 'South Kimstad'
    },
    {
        name: 'Whitney Cannon',
        profile_picture: 'https://picsum.photos/200/200?random=20',
        location: 'South Erika'
    }
];


const ChatDrawer = ({ open, setOpen }) => {
    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const [person, setPerson] = useState()

    const onClose = () => {
        setOpen(false);
    };
    const showChildrenDrawer = (el) => {
        setChildrenDrawer(true);
        console.log(el)
        setPerson(el)
    };
    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
    };
    return (
        <>
            <Drawer title="People" width={320} closable={false} onClose={onClose} open={open}>
                {
                    peopleData?.map((el, index) =>
                        <div key={index} className={styles.people}>
                            <div className={styles.person} onClick={() => showChildrenDrawer(el)}>
                                <img className={styles.personImg} src={el.profile_picture} alt='people' />
                                <p>{el.name}</p>
                            </div>
                        </div>
                    )
                }
                <Drawer
                    title="Chat"
                    width={420}
                    closable={false}
                    onClose={onChildrenDrawerClose}
                    open={childrenDrawer}
                >
                    <div className={styles.chatContainer}>
                        {
                            person ? <div className={styles.person} >
                                <img className={styles.personImg} src={person.profile_picture} alt='people' />
                                <div className={styles.personDetails}>
                                    <p>{person.name}</p>
                                    <p>{person.location}</p>
                                </div>
                            </div> : ''
                        }
                        <Divider className={styles.devider}></Divider>
                        <div className={styles.totalChat}>

                        </div>
                        <div className={styles.chatSystem}>
                            <TextArea
                                placeholder=''
                                autoSize={{
                                    minRows: 1,
                                    maxRows: 6,
                                }} />
                               <div className={styles.sendButton}>
                               <RiSendPlaneFill className={styles.sendLogo} color='white' size={17} />
                                </div> 
                        </div>
                    </div>
                </Drawer>
            </Drawer>
        </>
    );
}

export default ChatDrawer