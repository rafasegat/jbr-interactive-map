/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import ArrowRight from '../Icons/ArrowRight';
import ArrowLeft from '../Icons/ArrowLeft';
import './LeftSidebar.scss';
import { appMetadata } from '../../helpers/constants';
import { useAppContext } from '../../context/useAppContext';
import { expandFilters } from '../../context/context';
import Info from '../Icons/Info';
import RoundedArrowLeft from '../Icons/RoundedArrowLeft';
import RoundedArrowRight from '../Icons/RoundedArrowRight';
import { Topic, Filter } from '../../types/map';

const LeftSidebar = () => {
  const {
    state,
    setTopicActive,
    setZoneOptionsSelected,
    setFilterOptionsSelected,
    openModal,
  } = useAppContext();
  const { topicActive } = state;
  const [activeLevel, setActiveLevel] = useState<string>('level-one');

  const topicActiveData = appMetadata.topics.find(
    (item) => item.slug === topicActive,
  );

  useEffect(() => {
    if (topicActive === 'default') {
      setActiveLevel('level-one');
    }
  }, [topicActive]);

  // Get menu topics only
  const menuTopics = appMetadata.topics.filter((item) => item.isOnMenu);
  const currentIndex = menuTopics.findIndex(
    (item) => item.slug === topicActive,
  );
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < menuTopics.length - 1;
  const previousTopic = hasPrevious ? menuTopics[currentIndex - 1] : null;
  const nextTopic = hasNext ? menuTopics[currentIndex + 1] : null;

  const navigateToTopic = (topic: Topic | null) => {
    if (!topic) return;
    setTopicActive(topic.slug);
    const filterValues =
      topic.filters?.map((option: Filter) => option.value) || [];
    setFilterOptionsSelected(expandFilters(filterValues, topic.slug));
  };

  return (
    <aside className={`left-sidebar ${activeLevel}`}>
      <div className="left-sidebar-container">
        <div className="left-sidebar-wrapper">
          {/* LEVEL TWO */}
          <div className="sidebar-level sidebar-level-two">
            <div className="sidebar-level-two-core">
              <div className="sidebar-level-two-core-inner">
                <div className="header">
                  <a
                    rel="nofollow"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveLevel('level-one');

                      // Delay clearing the content until after the animation completes
                      setTimeout(() => {
                        setTopicActive('default');
                        const defaultFilters = [
                          'concept-design',
                          'local-government-area',
                        ];
                        setFilterOptionsSelected(
                          expandFilters(defaultFilters, 'default'),
                        );
                        setZoneOptionsSelected([]);
                      }, 500); // Match the animation duration (0.5s)
                    }}
                    aria-label="Back to topic selection"
                  >
                    <ArrowLeft />
                  </a>
                  <h2>{topicActiveData?.title}</h2>
                </div>
                <div className="content">{topicActiveData?.content}</div>
                <div className="footer">
                  <div className="footer-inner">
                    <div className="footer-wrapper">
                      <button
                        onClick={() => navigateToTopic(previousTopic)}
                        disabled={!hasPrevious}
                        aria-label={
                          previousTopic
                            ? `Previous topic: ${previousTopic.title}`
                            : 'Previous topic'
                        }
                      >
                        <RoundedArrowLeft />
                        <span>Previous Topic</span>
                      </button>
                      <button
                        onClick={() => navigateToTopic(nextTopic)}
                        disabled={!hasNext}
                        aria-label={
                          nextTopic
                            ? `Next topic: ${nextTopic.title}`
                            : 'Next topic'
                        }
                      >
                        <span>Next Topic</span>
                        <RoundedArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
                {/* )}  */}
              </div>
            </div>
          </div>

          {/* LEVEL ONE */}
          <div className="sidebar-level sidebar-level-one">
            <div className="title-topic">
              <h2>Select a topic</h2>
            </div>
            <div className="sidebar-level-one-header">
              <a
                href="#"
                className="how-to-use"
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
              >
                <Info />
                <span>How to use this interactive map</span>
              </a>
              <p className="description">
                Select topics below to change what's displayed on the map and
                learn more about the project.
              </p>
            </div>

            <ul className="menu-items">
              {appMetadata.topics
                .filter((item) => item.isOnMenu)
                .map((item) => (
                  <li key={item.title}>
                    <a
                      href="#"
                      rel="nofollow"
                      style={{ borderColor: item.color }}
                      onClick={(e) => {
                        e.preventDefault();
                        // active level two
                        setActiveLevel('level-two');
                        // set the topic active to show the content
                        setTopicActive(item.slug);
                        // set the filter options selected to show the layers on the map
                        const filterValues =
                          item.filters?.map((option: Filter) => option.value) ||
                          [];
                        setFilterOptionsSelected(
                          expandFilters(filterValues, item.slug),
                        );
                      }}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
