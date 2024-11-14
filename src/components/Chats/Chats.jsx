import React, { useEffect, useRef, useState } from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import { LOCALSTORAGE } from '../../utils/constants';
import { db } from '../../Firebase';
import styles from "./Chats.module.css";
import blankImg from '../../assets/blank_profile.webp';
import { toast } from 'react-toastify';

const Chats = ({ chatId }) => {
    const [chats, setChats] = useState([]);
    const user_id = JSON.parse(localStorage.getItem(LOCALSTORAGE.FIREBASE_ID)) || {};
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (!chatId) return;
            const unsubscribe = onSnapshot(doc(db, "chats", chatId), (doc) => {
                if (doc.exists()) {
                    console.log("Current data: ", doc.data());
                    setChats(doc.data().messages || []);
                } else {
                   toast.error("No such document!");
                }
            });
        return () => unsubscribe();
    }, [chatId]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chats]);

    return (
        <div className={styles.chatsContainer}>
           {chats.length > 0 ? (
               chats.map((el) => (
                   <div key={el.id} className={el.senderId === user_id ? styles.chatPersonBox : styles.chatOtherBox}>
                      <div className={el.senderId === user_id ? styles.chatPerson : styles.chatOther}>
                          <img
                              src={blankImg}
                              alt=""
                              className={el.senderId === user_id ? styles.noImg : styles.personImg}
                          />
                          <p>{el.message}</p>
                      </div>
                   </div>
               ))
           ) : (
               <p>No messages yet.</p>
           )}
           <div ref={messagesEndRef} />
        </div>
    );
}

export default Chats;
