import uid from 'uid'

export const mockData = {
  chartList: [
    {
      title: 'Ich',
      categories: [
        {
          name: 'Organisation',
          skillList: [
            {
              name: 'Arbeitshaltung',
              progress: 70,
              changeHistory: [
                { changeDate: '2019-02-05', progress: 50 },
                { changeDate: '2019-04-01', progress: 70 },
              ],
            },
            { name: 'Pünktlichkeit', progress: 80 },
            { name: 'Zeitmanagement', progress: 30 },
            { name: 'Projekte planen', progress: 40 },
          ],
        },
        {
          name: 'Texte verstehen',
          skillList: [
            {
              name: 'Sinnerfassend lesen',
              progress: 80,
            },
            { name: 'Texte interpretieren', progress: 80 },
          ],
        },
      ],
    },
    {
      title: 'Wir',
      categories: [
        {
          name: 'Kommunikation',
          skillList: [{ name: 'Konflikt klären', progress: 80 }],
        },
        {
          name: 'Kooperation',
          skillList: [
            { name: 'Absprache', progress: 70 },
            {
              name: 'test',
              progress: 80,
            },
          ],
        },
      ],
    },
    {
      title: 'Welt',
      categories: [
        {
          name: 'Mathe',
          skillList: [
            { name: 'Grundrechenarten', progress: 30 },
            { name: 'Bruchrechnen', progress: 70 },
            { name: 'Dreisatz', progress: 80 },
            { name: 'Mengenlehre', progress: 40 },
          ],
        },
        {
          name: 'Deutsch',
          skillList: [
            {
              name: 'Sinnerfassend lesen',
              progress: 80,
            },
            { name: 'Texte interpretieren', progress: 80 },
          ],
        },
      ],
    },
  ],
}

export const mockCertificates = [
  {
    date: '2018-08-03',
    title: 'Liesmal 4',
    subject: 'Deutsch ',
    id: uid(),
  },
  {
    date: '2018-11-16',
    title: 'Liesmal 3',
    subject: 'Deutsch ',
    id: uid(),
  },
  {
    date: '2018-03-06',
    title: 'Liesmal 2',
    subject: 'Deutsch ',
    id: uid(),
  },
  {
    date: '2018-08-03',
    title: 'Liesmal 1 ',
    subject: 'Deutsch ',
    id: uid(),
  },
  {
    date: '2018-04-13',
    title: 'Blitzheft 1',
    subject: 'Rechnen ',
    id: uid(),
  },
  {
    date: '2018-09-20',
    title: 'Tinto ',
    subject: 'Deutsch ',
    id: uid(),
  },
  {
    date: '2018-09-14',
    title: 'Schreibschriftheft ',
    subject: 'Deutsch ',
    id: uid(),
  },
]
