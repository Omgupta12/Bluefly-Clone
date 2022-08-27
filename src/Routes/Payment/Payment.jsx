import './Payment.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'


export const Payment = () => {

    const navigate = useNavigate();

    const isRendered = useRef();

    useEffect(() => {
        if(isRendered.current) return;
        isRendered.current = true;
        setTimeout(() => {
            navigate('/');
        }, 3000)
    }, []);

    return(
        <>
            <div className="container" >
                <div className="done">
                    <img src="https://quicksavaari.com/successgif.gif" alt="" width="120%"/>
                </div>
                <h3 className="payment">Payment Successful. Thanks for purchasing...</h3>
            </div>
        </>
    )
}