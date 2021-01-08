import React from 'react';
import './HistoryContent.css';

const HistoryContent = (props) => {

    const convertDateFormat = (date) => {
        date = new Date(date);
        let month = date.getMonth() + 1;
        let day = date.getDate();
        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;
        return `${date.getFullYear()}-${month}-${day}`;
    };

    return (
        <div className="event">

            <div className="title">{props.details.title}</div>
            <div className="details">{props.details.details}</div>

            <div className="miscellaneous-info">
                <div className="event-date">{convertDateFormat(props.details.event_date_utc)}</div>
                <div className="social-links">
                    {props.details.links.reddit &&
                        <a href={props.details.links.reddit} target='_blank' rel='noopener noreferrer'>
                            <img 
                                src="https://www.flaticon.com/svg/static/icons/svg/1409/1409938.svg" 
                                alt='reddit' 
                            />
                        </a>
                    }
                    {props.details.links.article &&
                        <a href={props.details.links.article} target='_blank' rel='noopener noreferrer'>
                            <img 
                                src="https://www.flaticon.com/svg/static/icons/svg/2680/2680919.svg" 
                                alt='article' 
                            />
                        </a>
                    }
                    {props.details.links.wikipedia &&
                        <a href={props.details.links.wikipedia} target='_blank' rel='noopener noreferrer'>
                            <img 
                                src="https://www.flaticon.com/svg/static/icons/svg/992/992574.svg" 
                                alt='wikipedia' 
                            />
                        </a>
                    }
                </div>
                {props.details.flight_number &&
                    <div className="flight-number">{props.details.flight_number}</div>
                }
            </div>
        </div>
    );
};

export default HistoryContent;
