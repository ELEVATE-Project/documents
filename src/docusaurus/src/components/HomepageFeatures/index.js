import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Mentoring',
    Svg: require('@site/static/img/mentoring-logo.svg').default,
    description: (
      <>
       This building block enables virtual mentorship in the sphere of education at scale. 
       The objective is to create a transparent eco-system to learn, connect, solve, and share. 
      </>
    ),
    linkUrl: 'docs/latest/intro',
    linkUrlText: 'Click here to learn more',
  },
  {
    title: 'Observations/Surveys',
    Svg: require('@site/static/img/observations.svg').default,
    description: (
      <>
        This building enables mentors to seek observations and conduct surveys using different types of questions 
        and provides the ability to access and record data, using they can derive learnings and plan improvement journeys.
      </>
    ),
    linkUrl: '',
    linkUrlText: '',
  },
  {
    title: 'Projects',
    Svg: require('@site/static/img/projects.svg').default,
    description: (
      <>
       This building block enables you to create, track, and update tasks, subtasks, and upload evidence 
       to manage and monitor improvements.
      </>
    ),
    linkUrl: '',
    linkUrlText: '',
  },
  {
    title: 'Reports',
    Svg: require('@site/static/img/reports.svg').default,
    description: (
      <>
       This building block enables you to make data-driven decisions in your improvement journeys through data collected 
       using Surveys and Projects.The reports can be represented in multiple formats and can be accessed by 
       a wide range of requirements
      </>
    ),
    linkUrl: '',
    linkUrlText: '',
  },
];

function Feature({Svg, title, description, linkUrl, linkUrlText}) {
  return (
    <div className={clsx('col col--6')}>
      <Link 
          to={linkUrl}>
          <div className="text--center">
                  <Svg className={styles.featureSvg} role="img" />
          </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
