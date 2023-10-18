import React from "react";
import "./NoticeList.css";



const textWithLinks = [
    { text: "Announcement of PEEF Undergraduate Scholarship (Fall-2023 Intake)", type: "text" },
    { text: "PM'S NATIONAL YOUTH LAPTOP SCHEME 2023 <br> <a href='#'> Click Here to Download </a> ", type: "text" },
    {
        text: "National Idea Bank (NIB) is the initiative of Honorable President of Pakistan, Dr Arif Alvi, and was inaugurated by him in February 2021 at his presidency. NIB is a platform to recognize and support innovative ideas in Pakistan. The outstanding ideas are not only getting recognition but also chances for further implementation as industrial integration or investor’s attraction. Winners of NIB 2021and 2022 were given recognition and awards by the President of Pakistan, on 27th January 2022 and 20th March 2023. A complete overview of NIB program can be found at https://nibpk.org/. After a great success of NIB I and II we have now opened the 3rd call for Ideas for NIB 2023. COMSATS University Islamabad invites you use your brain in solving Pakistan's top problem. Calling all Students and Faculty! National Idea Bank III is ready to accept new ideas, and this time, they are on a mission to tackle one of our nation's most pressing challenges: The negative balance of trade.We import a lot and export very little, but together, we can find the opportunities to change that narrative. Exciting Prize: This year, NIB has even more enticing prize – Unlock a Trip to Silicon Valley, USA: Join NIB III for a Chance of a Lifetime! Are you eager to explore Silicon Valley, learn from successful entrepreneurs, and connect with potential investors to back your brilliant ideas? The National Idea Bank, Pakistan's premier platform for groundbreaking ideas, initiated by the President of Pakistan in 2021, is calling you to make a difference. COMSATS University Islamabad along with 100 + other NIB partners are proud to join forces in the quest to inspire, innovate, and influence the trade landscape. National Idea Bank is our platform to make a difference and potentially launch your ideas onto the world stage.Click here to register:  It is to inform that deadline to apply online for the Scotland Scholarship has been extended up to 30th September 2023. For details, for any further information refer previous announcement or visit Student Affairs.<a href='#'> https://nibpk.org/ </a> .",
        type: "link", url: "https://www.google.com"
    },
    { text: " and this is a ", type: "text" },
    { text: "link to Facebook", type: "link", url: "https://www.facebook.com" },
    { text: "loehdbjsbd", type: "text" },
    { text: "This is a ", type: "text" },
    { text: "link to Google", type: "link", url: "https://www.google.com" },
    { text: " and this is a ", type: "text" },
    { text: "link to Facebook", type: "link", url: "https://www.facebook.com" },
    { text: "loehdbjsbd", type: "text" },
];

const 
NoticeList = () => {
    return (
        <ul className="all-list">
            <h1>NOTICEBOARD</h1>
            <hr className="notice-board-hr" />
            {textWithLinks.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <li className="list-item" dangerouslySetInnerHTML={{ __html: item.text }} />
                        <hr />
                    </React.Fragment>
                );

            })}
        </ul>
    );
};

export default NoticeList;