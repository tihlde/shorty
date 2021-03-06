import { IFetch } from 'fetch/fetch';
import { Event, JobPost, News, Page, ShortLink } from 'types/Types';

export default {
  getEvent: (eventId: number) => IFetch<Event>(`events/${String(eventId)}/`),
  getJobPost: (id: number) => IFetch<JobPost>(`jobpost/${String(id)}/`),
  getNewsItem: (id: number) => IFetch<News>(`news/${String(id)}/`),
  getPage: (path: string) => IFetch<Page>(`page/${path}`),
  getShortLink: (slug: string) => IFetch<ShortLink>(`short-link/${slug}/`),
};
