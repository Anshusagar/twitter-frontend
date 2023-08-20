import React, { useRef, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './Tweet.css'
import axios from 'axios';
function Tweets() {
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');

    const refs = useRef();
    const BASE_URL = 'https://tiny-teal-reindeer-cuff.cyclic.cloud';
    const notifyToken = () => toast("OOPS NO TOKEN FOUND PLEASE RE-LOGIN");
    const notifyTweetSuccess = () => toast("Successfully Tweeted");

    const handleClick = async () => {
        console.log(refs.current.value)
        let token = localStorage.getItem('token');
        setToken(token);

        let userId = localStorage.getItem('userId');
        setUserId(userId);
        
        if (token == undefined || token == '') {
            return notifyToken();
        }
        else {
            let res = await axios.post(`${BASE_URL}/api/v1/tweet`,
                { tweet: refs.current.value, userId },
                { headers: { Authorization: 'Bearer ' + token } });
            if (res) {
                return notifyTweetSuccess();
            }
        }
    }
    return (
        <>
            <ToastContainer></ToastContainer>
            <div >
                <div className="form-control">
                    <input ref={refs} className="input input-alt" placeholder="Type something intelligent" required="" type="text" />
                    <span className="input-border input-border-alt"></span>

                </div>
                <br />
                <button onClick={handleClick}>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Send</span>
                </button>
            </div>
        </>
    )
}

export default Tweets