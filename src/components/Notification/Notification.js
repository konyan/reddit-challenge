/* eslint-disable react/prop-types */
import classNames from 'classnames'
import React, { useRef, useState } from 'react'
import Button from '../Button/Button'
import Accordion from '../Accordion/Accordion'
import {SUB_REDDIT} from '../../utils/setting'

// eslint-disable-next-line react/prop-types
const Notification = ({ pageInfo }) => {
  const [seeMore, setSeeMore] = useState(false)
  if (!pageInfo) {
    return null
  }

  const contentElement = useRef(null)

  const buttonList = [
    'Twitter',
    'discord',
    'offical dota blog',
    `${SUB_REDDIT} wiki`,
    `${SUB_REDDIT} bug character`,
    'recommend game vods',
    'patch thread archieve',
  ]
  const Rules = [
    {
      title: '1.Fake Patch Submission',
      desc: 'Users posting deceiving fake patch / update threads will have their posts removed and be subject to a 2 week ban.',
    },
    {
      title: '2.Aggressive or Offensive Material',
      desc: "Any racist, homophobic, sexist or otherwise hateful speech or material is strictly prohibited No excessive trolling! Keep your comments related to the submission you're commenting on. Don't post comments directly insulting another commenter. A bad attitude is not a ban-worthy reason, but continuously insulting others without contributing to the topic is.",
    },
    {
      title: '3.Repost / Duplicate',
      desc: 'This post is a duplicate of something that has been posted within the past 2 weeks.',
    },
  ]

  const fitler = [
    'Other | Esports',
    'Fluff',
    'Clips',
    'News',
    'Discussion',
    ' Complaint News',
    'EsportsArtwork',
    'Other | Esports',
    'Fluff',
    'Clips',
    'News',
    'Discussion',
    ' Complaint News',
    'EsportsArtwork',
    'Other | Esports',
    'Fluff',
    'Clips',
    'News',
    'Discussion',
    ' Complaint News',
    'EsportsArtwork',
  ]
  return (
    <div className="space-y-5 sticky top-0">
      <div className="divide-y rounded-md border p-5 shadow-sm">
        <div>
          <h2 className="text-[#818384]">About Community</h2>
          <div
            className="mt-5"
            dangerouslySetInnerHTML={{ __html: pageInfo.public_description }}
          ></div>
          <div className="mt-5 flex items-center gap-2 pb-5 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
              />
            </svg>
            Created Oct 13, 2010
          </div>
        </div>
        <div className="flex items-center  gap-5 py-5 text-start">
          <div>
            <p>1.3KM</p>
            <p className="text-xs">MMR lost</p>
          </div>
          <div>
            <p className="noti">4.2km</p>
            <p className="text-xs">deaths to Tormentor</p>
          </div>
          <div>
            <p>top 10%</p>
            <p className="text-xs">Ranked by Size</p>
          </div>
        </div>
        <div className="py-5">
          <Button
            text="Create a Post"
            className="w-full justify-center border text-center text-black hover:bg-gray-100"
          />
        </div>
        <div className="py-5">
          <div className="flex items-center justify-between ">
            <p>Preveiw</p>
            <div className="rounded-full p-2 hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-5 border-b py-6">
            <div className="h-10 w-10 bg-gray-200"></div>
            <p>GovernmentOk8386</p>
          </div>
        </div>
      </div>

      <div className="rounded-md border p-5 shadow-sm">
        <p className="text-[#818384]">Filter by flair</p>
        <div className="mt-5 space-y-3">
          <div
            ref={contentElement}
            style={{ height: `${seeMore ? contentElement.current.scrollHeight : '130'}px` }}
            className={classNames(
              // seeMore ? 'h-[130px]' : 'h-full',
              'flex flex-wrap items-center gap-2 overflow-hidden transition-all duration-500'
            )}
          >
            {fitler.map((r, idx) => (
              <div key={idx}>
                <Button
                  text={r}
                  className=" w-full justify-center border text-center capitalize text-black hover:bg-gray-100"
                />
              </div>
            ))}
          </div>
          <p
            onClick={() => {
              setSeeMore(!seeMore)
            }}
            className="cursor-pointer"
          >
            See More
          </p>
        </div>
      </div>

      <div className="rounded-md border p-5 shadow-sm">
        <p className="text-[#818384]">r/DotA2 Rules</p>
        <div className="mt-5 space-y-3">
          {Rules.map((r, idx) => (
            <Accordion
              key={idx}
              title={r.title}
              className="w-full justify-center border text-center capitalize text-black hover:bg-gray-100"
            >
              {r.desc}
            </Accordion>
          ))}
        </div>
      </div>
      <div className="rounded-md border p-5 shadow-sm">
        <p className="text-[#818384]">Upcoming Events</p>
        <p className="mt-5 ">ESL One Kuala Lumpur 2023 December 11, 2023</p>
      </div>
      <div className="rounded-md border p-5 shadow-sm">
        <p className="text-[#818384]">Resources</p>
        <div className="mt-5 space-y-3">
          {buttonList.map((n, idx) => (
            <Button
              key={idx}
              text={n}
              className="w-full justify-center border text-center capitalize text-black hover:bg-gray-100"
            />
          ))}
        </div>
      </div>
      <div className="rounded-md border p-5 shadow-sm">
        <p className="text-[#818384]">Dota Subreddits</p>
        <div className=" mt-5 space-y-3">
          {buttonList.map((n, idx) => (
            <div key={idx} className=" flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                <div className="text-xs">
                  <p>r/Dota2anime</p>
                  <p>12,480 Members</p>
                </div>
              </div>
              <Button
                text={'Join'}
                className="min-w-[100px] justify-center border text-center capitalize text-black hover:bg-gray-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notification
