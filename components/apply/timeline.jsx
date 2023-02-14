import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import ContentBlock from '../ContentBlock';

function Timeline({ steps }) {
  return (
    <VerticalTimeline>
      {steps &&
        steps.map(({ header, body }) => (
          <VerticalTimelineElement
            className="vertical-timeline-element-work"
            iconStyle={{ background: 'var(--accent-orange)', color: '#fff' }}
            key={header}>
            <ContentBlock content={body.json} />
          </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
  );
}

export default Timeline;
