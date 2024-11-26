import React, { useEffect, useState } from 'react';
import { Divider, Drawer } from 'antd';
import styles from './ChatDrawer.module.css';
import { Input } from 'antd';
import { RiSendPlaneFill } from "react-icons/ri";
import blankImg from '../../assets/blank_profile.webp';
import { doc, updateDoc, arrayUnion, Timestamp } from "firebase/firestore";
import { db } from '../../services/Firebase';
import { LOCALSTORAGE } from '../../utils/constants';
import Chats from '../Chats/Chats';
import { toast } from 'react-toastify';
import { fetchAllDocuments, generateUniqueId, showChildrenDrawerHelper } from '../../utils/helper';
const { TextArea } = Input;

const ChatDrawer = ({ open, setOpen }) => {
    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const [person, setPerson] = useState()
    const [currentUser, setCurrentUser] = useState()
    const user_id = JSON.parse(localStorage.getItem(LOCALSTORAGE.FIREBASE_ID)) || {};
    const [peopleData, setPeopleData] = useState();
    const [allUsers, setAllUsers] = useState();
    const [message, setMessage] = useState({
        message: ""
    })
    const [chatId, setChatId] = useState()


    const fetchDocuments = async (user_id) => {
        try {
            const { documents, currUser } = await fetchAllDocuments(user_id);
            setPeopleData(documents);
            setAllUsers(documents);
            setCurrentUser(currUser[0])
        } catch (error) {
            toast.error('Error in fetching users.')
        }
    };
    useEffect(() => {
        fetchDocuments(user_id);
    }, [user_id])

    const handleSearch = async (e) => {
        let fileterdata = []
        setTimeout(() => {
            let val = e.target.value;
            fileterdata = allUsers.filter((el) =>
                el.firstname.toLowerCase().includes(val.toLowerCase())
            );
            setPeopleData(fileterdata);
            if (fileterdata.length == 0 || val == null) {
                fetchAllDocuments();
                setPeopleData(allUsers);
            }
        }, [1000])
    }

    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
    };

    const onClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMessage({ ...message, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const uniqueId = generateUniqueId();
        await updateDoc(doc(db, "chats", chatId), {
            messages: arrayUnion({
                id: uniqueId,
                message: message.message,
                senderId: user_id,
                date: Timestamp.now()
            })
        })
        setMessage({ message: "" });
    }

    return (
        <>
            <Drawer title="People" width={320} closable={false} onClose={onClose} open={open}>
                <div>
                    <Input placeholder="Search People..." onChange={handleSearch} />
                </div>
                {
                    peopleData?.map((el, index) =>
                        <div key={el.id} className={styles.people}>
                            <div className={styles.person} onClick={() => showChildrenDrawerHelper(el, currentUser, setChatId, setChildrenDrawer, setPerson, user_id)}>
                                <img className={styles.personImg} src={blankImg} alt='people' />
                                <p>{el.firstname + ` ` + el.lastname}</p>
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
                                <img className={styles.personImg} src={blankImg} alt='people' />
                                <div className={styles.personDetails}>
                                    <p>{person.firstname + ` ` + person.lastname}</p>
                                    <p>{person.location}</p>
                                </div>
                            </div> : ''
                        }
                        <Divider className={styles.devider}></Divider>
                        <div className={styles.totalChat}>
                            <Chats chatId={chatId} />
                        </div>
                        <div className={styles.chatSystem}>
                            <TextArea
                                placeholder=''
                                autoSize={{
                                    minRows: 1,
                                    maxRows: 6,
                                }}
                                name='message'
                                value={message.message}
                                onChange={handleChange}
                            />
                            <div className={styles.sendButton} onClick={handleSubmit}>
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