import {
  Stage,
  Job,
  Education,
  ShowCase,
  Skill,
  SkillSet,
  State,
} from './data_types';

/********
* State *
********/

export const state = new State();

/*********
* Header *
*********/

export const myName = 'Radin Shayanfar';
export const profession = 'I speak Code';
export const education = 'BSc. Student of Computer Engineering';
export const studyingAt = 'Amirkabir University of Technology';
export const graduatedFrom = 'Helli 3 High School';
export const city = 'Tehran';
export const country = 'Iran';
export const emails: string[] = [
  'r@rshayanfar.ir',
  'radin.shayanfar@aut.ac.ir',
  'radin.shayanfar@gmail.com',
];
export const socialNetworks: { [key: string]: string } = {
  github: 'https://github.com/radinshayanfar',
  twitter: 'https://twitter.com/radinshayanfar',
  instagram: 'https://instagram.com/radinshayanfar',
};


/*********
* Skills *
*********/

// Web
// Web / Backend
export const php: Skill = { level: 0.7, name: 'PHP' };
export const mysql: Skill = { level: 0.4, name: 'MySQL' };

// Web / Frontend
export const html: Skill = { level: 0.8, name: 'HTML' };
export const css: Skill = { level: 0.6, name: 'CSS' };
export const javascript: Skill = { level: 0.2, name: 'JavaScript' };

// iOS
export const swift: Skill = { level: 0.5, name: 'Swift' };
export const objectivec: Skill = { level: 0.2, name: 'Objective-C' };

// C++
export const c: Skill = { level: 0.9, name: 'C' };
export const cpp: Skill = { level: 0.6, name: 'C++' };

// BASH
export const bash: Skill = { level: 0.3, name: 'BASH Scripting' };

// Git
export const git: Skill = { level: 0.3, name: 'Git' };

export const skills: SkillSet[] = [
  {
    title: 'Web',
    data: [
      {
        title: 'Backend',
        data: { php, mysql },
      },
      {
        title: 'Frontend',
        data: { html, css, javascript },
      },
    ],
  },
  {
    title: 'C++',
    data: { c, cpp },
  },
  {
    title: 'iOS',
    data: { swift, objectivec },
  },
  {
    title: 'BASH',
    data: { bash },
  },
  {
    title: 'Git',
    data: { git },
  },
];

/***********
* Projects *
***********/

export const projects: ShowCase[] = [
  {
    name: 'Konkur98',
    description: `
      Konkur98.ga is a simple countdown for Konkur exam.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('2019'),
    urls: [
      'http://konkur98.ga/',
    ],
    media: [],
    skills: {
      html,
      javascript,
      php,
    },
  },
];