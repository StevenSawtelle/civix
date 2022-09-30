import React, { useState } from 'react';

import billsJson from '../data/bills.json'
import { ReactComponent as ThumbsDown } from '../images/thumbs-down.svg';
import { ReactComponent as ThumbsUp } from '../images/thumbs-up.svg';
import { ReactComponent as ThumbsDownBig } from '../images/thumbs-down-big.svg';
import { ReactComponent as ThumbsUpBig } from '../images/thumbs-up-big.svg';
import './Bills.styles.scss';

const Button = ({text, icon, color, handleClick}) => {
    return <div className={`button ${color}`} onClick={handleClick}>
        {icon}
        {text}
    </div>
}

const HasVoted = ({aye}) => {
    return aye ? (<div className={'vote'}>
        <p>You <span className={'green-text'}>Support</span> this bill</p>
        <ThumbsUpBig />
    </div>) : <div className={'vote'}>
        <p>You do <span className={'red-text'}>Not Support</span> this bill</p>
        <ThumbsDownBig />
    </div>;
}

const NeedsVote = ({setAye, setNay}) => {
    return <div className={'vote'}>
        <p>Do you support this bill?</p>
        <div className={'options'}>
            <Button text={'Yes'} icon={<ThumbsUp />} color={'green'} handleClick={() => setAye(true)} />
            <Button text={'No'} icon={<ThumbsDown />} color={'red'} handleClick={() => setNay(true)} />
        </div>
    </div>
}

const Vote = () => {
    const [aye, setAye] = useState(false);
    const [nay, setNay] = useState(false);

    return (!aye && !nay) ? <NeedsVote setAye={setAye} setNay={setNay} /> : <HasVoted aye={aye} />
}

const BillInfo = ({bill}) => {
    const billDate = new Date(bill.latestAction?.actionDate).toDateString();
    return <div className={'bill-info'}>
        <p>{bill.type} {bill.number}</p>
        <h3>{bill.title}</h3>
        <p><strong>Last Update</strong> - {bill.latestAction?.text}</p>
        <i>({billDate.slice(billDate.indexOf(' ') + 1)})</i>
    </div>
}

const Bill = ({bill}) => {
    return <div className={'bill'}>
        <BillInfo bill={bill} />
        <Vote />
    </div>
}

const Bills = () => {
    return (<div className={'bills'}>
        {billsJson.bills.map(bill => <Bill key={bill.title} bill={bill} />)}
    </div>);
}

export default Bills;