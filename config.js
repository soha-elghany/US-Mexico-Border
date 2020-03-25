var config = {
    style: 'mapbox://styles/soha/ck6kyhcfj170a1ipq3mx4dugl',
    accessToken: 'pk.eyJ1Ijoic29oYSIsImEiOiJjajY3cWo0OGgwOHE0MzJsZ3hwancwdDZ0In0.xyzmRZnFL097g6MkH1qxGg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'US - Mexico Border',
    subtitle: 'An exploration of the border that separates 2 countries',
    byline: 'By Soha Elghany',
    footer: 'Source: https://data.world/carlvlewis/border-fence-boundaries-u-s-mexico, Washington Post',
    chapters: [
        {
            id: 'slug-style-id',
            title: '',
            image: '',
            class: 'this is my class',
            description: 'Humans have occupied lands along the border for 10,000 years. In the four U.S. states that surround the border, people speak more than 50 languages. Here is apprehensions over time from US Customs and Border Protection, we see a peak in 2019',
            location: {
                center: [-107.77556, 30.14726],
                zoom: 4.05,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [
                 {
                     layer: 'Overall',
                     opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'satellite',
                     opacity: 1
                 }
            ]
        },
        {
            id: 'chap-2',
            title: 'San Diego',
            image: '',
            description: '1989: the first fence was built to stop illegal crossings from Mexico to the United States in San Diego, this is where the border begins. The border stretches for almost 2,000 miles.',
            location: {
                center: [-117.30660, 32.63507],
                zoom: 10.06,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [
              {
                  layer: 'San Diego',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer:'San Diego',
                  opacity: 1
              }
            ]
        },
        {
          id: 'chap-3',
          title: 'The Yuma Sector',
          image: '',
          description: 'Responsibility for securing the border is divided amongst 9 sectors. Migrant apprehensions in the Yuma sector, which spans parts of California and Arizona, decreased after the United States installed more than 100 miles of fencing and vehicle barriers. Much of the border in Arizona runs through federal, state or tribal land, and most of it is fenced.',
          location: {
          center: [-114.68328, 32.71273],
          zoom: 11,
          pitch: 45,
          bearing: 0
            },
            onChapterEnter: [
              {
                  layer: 'Yuma',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer:'Yuma',
                  opacity: 0.5
              }
            ]
        },
        {
          id: 'chap-4',
          title: 'Trump Administration',
          image: '',
          description: 'Trump’s solution to stop illegal migration: Replace the fences with a wall. 8 border wall prototypes commissioned by the U.S. government were constructed in 2017 in California. Tactical teams tested them and discovered, that nearly all of them could be breached.',
          location: {
          center: [-111.65566, 32.58766],
          zoom: 6.6,
          pitch: 45,
          bearing: 0
            },
            onChapterEnter: [
              {
                  layer: 'Arizona',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer:'Arizona',
                  opacity: 1
              }
            ]
        },
        {
          id: 'chap-5',
          title: 'Nogales',
          image: '',
          description: 'The cities of Nogales, Mexico, and Nogales, Ariz., are like twins separated at birth. Both are built right up to the tall slatted fence between them, and people go back and forth to work and to school.',
          location: {
          center: [-110.94377, 31.32897],
          zoom: 13.56,
          pitch: 45,
          bearing: 0
            },
            onChapterEnter: [
              {
                  layer: 'Nogales',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer:'Nogales',
                  opacity: 0.5
              }
            ]
        },
        {
          id: 'chap-6',
          title: 'Tornillo',
          image: '',
          description: 'This tent city appeared in June to house unaccompanied minors and children separated from their parents after crossing the border, under the Trump administration’s controversial zero-tolerance policy on illegal immigration. Currently there is 123 tents with 1,500 children waiting to be reunited with relatives.',
          location: {
          center: [-106.09149, 31.43904],
          zoom: 12.39,
          pitch: 45,
          bearing: 0
            },
            onChapterEnter: [
              {
                  layer: 'Tornillo',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer:'Tornillo',
                  opacity: 0.5
              }
            ]
        },
        {
        id: 'chap-7',
        title: 'Rio Grande River',
        image: '',
        description: 'A twisting stretch of the border along the Rio Grande River in Texas poses considerable challenges. Some barriers exist in this area, but they are set back far from the river and the floodplain, which leaves pockets of land on the “wrong side” of the fence.',
        location: {
        center: [-97.95012, 26.06304],
        zoom: 16.00,
        pitch: 45,
        bearing: -40.00
          },
          onChapterEnter: [
            {
                layer: 'Rio',
                opacity: 1
            }
          ],
          onChapterExit: [
            {
                layer:'Rio',
                opacity: 0.5
              }
            ]
        },
        {
            id: 'final',
            title: 'Final',
            image: '',
            description: 'The border has separated so many families from each other, in times like these',
            location: {
                center: [-103.49469, 27.24266],
                zoom: 4.54,
                pitch: 45.00,
                bearing: -40.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
