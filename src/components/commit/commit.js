import React from 'react';
import { formatDistance, subDays, format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { ReactComponent as IconCal } from '../../assets/images/icon-calendar.svg';
import { ReactComponent as IconClock } from '../../assets/images/icon-stopwatch.svg';
import { ReactComponent as IconUser } from '../../assets/images/icon-user.svg';
import { ReactComponent as IconCommit } from '../../assets/images/icon-commit.svg';
import { ReactComponent as IconFail } from '../../assets/images/icon-fail.svg';
import { ReactComponent as IconDone } from '../../assets/images/icon-done.svg';
import { ReactComponent as IconPending } from '../../assets/images/icon-pending.svg';
import './commit.scss';

export const Commit = props => {
  const { commit } = props;

  let IconStatus = null;
  switch (commit.status) {
    case 'done':
      IconStatus = IconDone;
      break;
    case 'fail':
      IconStatus = IconFail;
      break;
    case 'pending':
      IconStatus = IconPending;
      break;

    default:
      break;
  }

  const getTimeDistance = timestamp =>
    formatDistance(subDays(new Date(timestamp), 3), new Date(), { addSuffix: true, locale: ru });

  const getFormattedDate = timestamp =>
    format(new Date(timestamp), 'dd MMM, HH:mm', { locale: ru });

  return (
    <li className="commits__item commit">
      <div className="commit__body">
        <div className="commit__row commit__row_first commit__row_left commit__row_message">
          <div className="commit__status">
            <IconStatus className="commit__status-icon" />
            <span className={`commit__hash commit__hash_${commit.status}`}>
              {commit.number}
            </span>
          </div>
          <span className="commit__message">
            {commit.message}
          </span>
        </div>
        <div className="commit__row commit__row_left commit__row_branch">
          <div className="commit__branch text">
            <IconCommit className="commit__branch-icon commit-icon" />
            <span className="commit__branch-name">
              {commit.branch}
            </span>
          </div>
          <span className="commit__commit text text_secondary">
            {commit.commit}
          </span>
          <div className="commit__author">
            <IconUser className="commit__author-icon commit-icon" />
            <span className="commit__author-name text">
              {commit.author}
            </span>
          </div>
        </div>
      </div>

      <div className="commit__datetime">
        <div className="commit__row commit__row_first">
          <IconCal className="commit__date-icon commit-icon" />
          <span className="commit__date text text_secondary">{getFormattedDate(commit.date)}</span>
        </div>

        <div className="commit__row commit__row_timestamp">
          <IconClock className="commit__timestamp-icon commit-icon" />
          <span className="commit__timestamp text text_secondary">{getTimeDistance(commit.date)}</span>
        </div>
      </div>
    </li>
  );
}