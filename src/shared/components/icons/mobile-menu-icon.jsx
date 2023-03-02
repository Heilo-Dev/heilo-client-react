import React from "react";

export const MobileMenuIcon = (props) => {
    return (
        <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <line
                x1="1.5"
                y1="1.5"
                stroke-width
                x2="19.5"
                y2="1.5"
                stroke="#5F5F5F"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <line
                x1="1.5"
                y1="9.5"
                x2="19.5"
                y2="9.5"
                stroke="#5F5F5F"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <line
                x1="1.5"
                y1="17.5"
                x2="19.5"
                y2="17.5"
                stroke="#5F5F5F"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
    );
};
