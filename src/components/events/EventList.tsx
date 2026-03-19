import React, { useEffect, useState } from 'react';
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

interface GoogleCalendarItem {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  organizer?: { self?: boolean };
  start: { date?: string; dateTime?: string };
  end: { date?: string; dateTime?: string };
}

interface GoogleCalendarResponse {
  items?: GoogleCalendarItem[];
}

const parseEventData = (data: GoogleCalendarResponse, number: number): CalendarEvent[] => {
  if (!data.items || !Array.isArray(data.items)) {
    throw new Error('Invalid calendar data');
  }

  const filteredEventData = data.items.filter((item) => item.organizer?.self).slice(0, number);

  return filteredEventData.map((item) => {
    const start = new Date(item.start.date ?? item.start.dateTime ?? '');
    const end = new Date(item.end.date ?? item.end.dateTime ?? '');
    const fullDay = Boolean(item.start.date);
    const { id, summary, description, location } = item;
    return { id, summary, start, end, description, location, fullDay };
  });
};

const dateOptions: Intl.DateTimeFormatOptions = {
  timeZone: 'Europe/Helsinki',
  weekday: 'short',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

const timeOptions: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
};

type EventListCssVars = React.CSSProperties & {
  '--event-list-padding-left'?: string;
  '--event-list-padding-top'?: string;
  '--event-list-margin'?: string;
  '--event-list-font-family'?: string;
  '--event-list-item-gap'?: string;
  '--event-list-item-margin-bottom'?: string;
  '--event-list-p-line-height'?: string;
  '--event-list-summary-font-size'?: string;
  '--event-list-summary-font-weight'?: string;
  '--event-list-summary-line-height'?: string;
  '--event-list-summary-margin-bottom'?: string;
  '--event-list-date-bg'?: string;
  '--event-list-date-color'?: string;
  '--event-list-date-font-size'?: string;
  '--event-list-date-width'?: string;
  '--event-list-date-padding'?: string;
  '--event-list-date-border-radius'?: string;
};

export interface EventListProps {
  number?: number;
  lang?: string;
  className?: string;
  listClassName?: string;
  style?: EventListCssVars;
  listStyle?: EventListCssVars;
}

const EventList: React.FC<EventListProps> = ({
  number = 5,
  lang = 'fi',
  className,
  listClassName,
  style: wrapperStyle,
  listStyle,
}) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    getEvents(number)
      .then((loadedEvents) => setEvents(loadedEvents))
      .catch((error) => {
        console.error('Failed to load events:', error);
      });
  }, [number]);

  const datetimeFor = (event: CalendarEvent) => (event.fullDay ? dateOptions : { ...dateOptions, ...timeOptions });

  const renderEvent = (event: CalendarEvent) => (
    <li key={event.id} className={style.eventListItem}>
      <div className={style.date}>
        {event.start.getDate()}.{event.start.getMonth() + 1}.
      </div>
      <div>
        <div className={style.summary}>{event.summary}</div>
        <time>{event.start.toLocaleString(lang, datetimeFor(event))}</time>
        {event.description && <p>{event.description}</p>}
      </div>
    </li>
  );

  const wrapperClassName = [style.eventListRoot, className].filter(Boolean).join(' ');
  const ulClassName = [style.event_list, listClassName].filter(Boolean).join(' ');

  return (
    <div className={wrapperClassName} style={wrapperStyle}>
      <ul className={ulClassName} style={listStyle}>
        {events.map(renderEvent)}
      </ul>
    </div>
  );
};

export default EventList;
