import React, { useState, useEffect } from 'react';
import * as style from './EventList.module.scss';

const getStartDate = () => new Date().toISOString();

const getEndDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date.toISOString();
};

const getEvents = async (number: number) => {
  const startDate = getStartDate();
  const endDate = getEndDate();

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/as.tiedottaja@gmail.com/events?key=AIzaSyCJrtmGOeEFAq912lwijvCmKR33SAtC_qo&singleEvents=true&orderBy=starttime&timeMin=${startDate}&timeMax=${endDate}`
  );
  const data = await res.json();

  return parseEventData(data, number);
};

interface CalendarEvent {
  id: string;
  summary: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
  fullDay: boolean;
}

const parseEventData = (data: json, number: number) => {
  if (!data.items || !Array.isArray(data.items)) {
    throw new Error('Invalid calendar data');
  }

  const filteredEventData = data.items.filter((item) => item.organizer.self).slice(0, number);
  const events: CalendarEvent[] = filteredEventData.map((item) => {
    const start = new Date(item.start.date ?? item.start.dateTime);
    const end = new Date(item.end.date ?? item.end.dateTime);
    const fullDay = !!item.start.date;
    const { id, summary, description, location } = item;
    return { id, summary, start, end, description, location, fullDay };
  });

  return events;
};

const dateOptions: Intl.DateTimeFormatOptions = {
  timeZone: 'Europe/Helsinki',
  weekday: 'short',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};
const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };

const EventList: React.FC<{ number: number; lang: string }> = ({ number = 5, lang = 'fi' }) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    getEvents(number)
      .then((events) => {
        setEvents(events);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderEvent = (event: CalendarEvent) => {
    const datetimeOptions = event.fullDay ? dateOptions : { ...dateOptions, ...timeOptions };
    return (
      <li key={event.summary} className={style.eventListItem}>
        <div className={style.date}>
          {event.start.getDate()}.{event.start.getMonth() + 1}.
        </div>
        <div>
          <div className={style.summary}>{event.summary}</div>
          <time>{event.start.toLocaleString(lang, datetimeOptions)}</time>
          <p>{event.description}</p>
        </div>
      </li>
    );
  };

  return <ul className={style.event_list}>{events.map(renderEvent)}</ul>;
};

export default EventList;
