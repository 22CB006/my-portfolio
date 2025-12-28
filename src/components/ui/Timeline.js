import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Timeline.css';

export const Timeline = ({ data, title = "Work Experience", subtitle = "My professional journey in full-stack development and AI engineering" }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="timeline-wrapper" ref={containerRef}>
      <div className="timeline-container">
        <div className="timeline-header">
          <h2 className="timeline-title">{title}</h2>
          <p className="timeline-subtitle">{subtitle}</p>
        </div>

        <div ref={ref} className="timeline-content">
          {data.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-item-marker">
                <div className="timeline-marker-outer">
                  <div className="timeline-marker-inner" />
                </div>
                <h3 className="timeline-item-title-desktop">{item.title}</h3>
              </div>

              <div className="timeline-item-content">
                <h3 className="timeline-item-title-mobile">{item.title}</h3>
                {item.content}
              </div>
            </div>
          ))}

          <div className="timeline-line" style={{ height: height + 'px' }}>
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="timeline-line-progress"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
