import uid from 'uid'

export const mockData = {
  userId: 'Thea',
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
          name: ' Medien ',
          skillList: [
            {
              name: 'kritisches Denken',
              progress: 80,
            },
            { name: 'PC Bedienung', progress: 80 },
            { name: 'Kreativität ', progress: 80 },
          ],
        },
        {
          name: 'Persönlichkeit',
          skillList: [
            { name: 'Verantwortung', progress: 80 },
            { name: 'mit Rückschlägen umgehen', progress: 40 },
            { name: 'Neugier', progress: 50 },
          ],
        },
      ],
    },
    {
      title: 'Wir',
      categories: [
        {
          name: 'Kommunikation',
          skillList: [
            { name: 'Konflikt klären', progress: 0 },
            {
              name: 'respektvoller Umgang',
              progress: 0,
            },
            { name: 'Empatie', progress: 0 },
          ],
        },
        {
          name: 'Kooperation',
          skillList: [
            { name: 'Absprache', progress: 70 },
            { name: 'Zuhören', progress: 71 },
            {
              name: 'Investition in den Unterricht',
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
              name: 'Texte verstehen',
              progress: 80,
            },
            { name: 'Texte interpretieren', progress: 80 },
            { name: 'Grammatik', progress: 0 },
            { name: 'Richtig Schreiben', progress: 0 },
            { name: 'Berichten und Beschreiben', progress: 0 },
            { name: 'Nachschlagen', progress: 0 },
            { name: 'Nacherzählen', progress: 0 },
          ],
        },
        {
          name: 'Englisch',
          skillList: [
            {
              name: 'Sprechen',
              progress: 20,
            },
            { name: 'Hörverstehen', progress: 10 },
            { name: 'Lesen', progress: 10 },
            { name: 'Texte schreiben', progress: 10 },
          ],
        },
        {
          name: 'Gesellschaft',
          skillList: [
            {
              name: 'Erdkunde',
              progress: 20,
            },
            { name: 'Politik', progress: 10 },
            { name: 'Geschichte', progress: 10 },
            { name: 'Wirtschaft', progress: 10 },
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
