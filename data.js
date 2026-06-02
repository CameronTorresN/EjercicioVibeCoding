// ── LINE METADATA ─────────────────────────────────────────────────────────────
// color: polyline + dot color  |  tc: text color on badge  |  letters: MTA circle labels
const LM = {
  '123':  { color: '#EE352E', tc: '#fff', letters: ['1','2','3'],     name: '1 · 2 · 3'     },
  'ACE':  { color: '#2850AD', tc: '#fff', letters: ['A','C','E'],     name: 'A · C · E'     },
  '456':  { color: '#00933C', tc: '#fff', letters: ['4','5','6'],     name: '4 · 5 · 6'     },
  'L':    { color: '#A0A0A0', tc: '#fff', letters: ['L'],             name: 'L'              },
  'NQRW': { color: '#C9A800', tc: '#111', letters: ['N','Q','R','W'], name: 'N · Q · R · W' },
  'BDFM': { color: '#FF6319', tc: '#fff', letters: ['B','D','F','M'], name: 'B · D · F · M' },
  '7':    { color: '#B933AD', tc: '#fff', letters: ['7'],             name: '7'              },
  'JZ':   { color: '#8C6239', tc: '#fff', letters: ['J','Z'],         name: 'J · Z'          },
  'G':    { color: '#4EA83A', tc: '#fff', letters: ['G'],             name: 'G'              },
};

// ── STATION DATA ──────────────────────────────────────────────────────────────
// Fields: id, name, hood, lg (line group key), lines[], genres[], eras[],
//         lat, lng, song, trackArtist, year, sid (Spotify track ID),
//         desc (neighborhood blurb), hist (genre history), artists[]
//
// Note: Spotify IDs marked [~] are genre-era proxies — replace sid with the
// exact Spotify track ID from open.spotify.com/track/<id> as you verify them.

const S = [

  // ── 1 · 2 · 3 ──────────────────────────────────────────────────────────────
  {
    id: 'riverdale', name: '231 St · Riverdale', hood: 'Riverdale, Bronx',
    lg: '123', lines: ['1'], genres: ['Folk'], eras: ['1950s–60s', '1970s–80s'],
    lat: 40.8888, lng: -73.8986,
    song: 'The Message', trackArtist: 'Grandmaster Flash & The Furious Five', year: 1982,
    sid: '3ggwAqZD3lyT2sbovlmfQY', // [~] hip-hop proxy
    desc: 'The leafy northern edge of the Bronx, where the city exhales into wooded hills and quiet avenues. Riverdale kept a village feeling long after the rest of the borough urbanized, drawing musicians who wanted proximity to the city without the noise.',
    hist: 'Folk music found a Bronx foothold in coffeehouses and community centers near Riverdale through the 1950s and 60s — part of the wider urban folk revival stretching from the Village to the outer boroughs.',
    artists: ['Pete Seeger', 'The Weavers', 'Woody Guthrie'],
  },
  {
    id: 'grandconcourse', name: '149 St · Grand Concourse', hood: 'South Bronx',
    lg: '123', lines: ['2', '3'], genres: ['Hip-Hop'], eras: ['1970s–80s', '1990s–2000s'],
    lat: 40.8226, lng: -73.9253,
    song: 'The Message', trackArtist: 'Grandmaster Flash & The Furious Five', year: 1982,
    sid: '3ggwAqZD3lyT2sbovlmfQY',
    desc: 'Ground zero. The South Bronx in the 1970s was a borough in crisis — arson, disinvestment, social collapse — and out of that crucible came hip-hop. DJ Kool Herc\'s parties, Afrika Bambaataa\'s Zulu Nation, Grandmaster Flash\'s turntable science.',
    hist: 'Hip-hop was born in the Bronx. The genre emerged from block parties in the early 1970s, pioneered by first-generation Jamaican-American DJs who extended the breakbeat into something entirely new.',
    artists: ['DJ Kool Herc', 'Grandmaster Flash', 'Afrika Bambaataa', 'KRS-One'],
  },
  {
    id: '135th', name: '135 St · Harlem', hood: 'Harlem, Manhattan',
    lg: '123', lines: ['2', '3'], genres: ['Jazz'], eras: ['Pre-1950'],
    lat: 40.8147, lng: -73.9408,
    song: 'Harlem Nocturne', trackArtist: 'Jimmy Nolen', year: 1946,
    sid: '3qP2n33FJTHB9T8FoZDHsp', // [~] jazz proxy
    desc: 'The spiritual center of Black cultural life in America for over a century. The Harlem Renaissance made 135th Street synonymous with creative ambition — the Apollo, the Cotton Club, the rent parties.',
    hist: 'Harlem\'s musical identity spans from the jazz age through hip-hop. The 1920s–40s Renaissance produced Duke Ellington, Billie Holiday, and Ella Fitzgerald. In the 1990s, Cam\'ron, Big L, and Mase defined a new Harlem sound.',
    artists: ['Duke Ellington', 'Ella Fitzgerald', 'Billie Holiday', 'Big L'],
  },
  {
    id: '125th', name: '125 St · East Harlem', hood: 'East Harlem / El Barrio',
    lg: '123', lines: ['1', '2', '3'], genres: ['Jazz', 'Blues'], eras: ['Pre-1950'],
    lat: 40.8079, lng: -73.9449,
    song: 'Strange Fruit', trackArtist: 'Billie Holiday', year: 1939,
    sid: '2G7V7zsVVVkBDNNMgWNpiE',
    desc: 'El Barrio — Spanish Harlem — was the incubator of American Latin music. Puerto Rican and Cuban immigrants turned East Harlem into a laboratory for sound, blending African rhythm with Caribbean melody and jazz sophistication into something entirely new.',
    hist: 'From the 1940s onward, East Harlem pulsed with mambo, cha-cha, and salsa. Tito Puente grew up a few blocks from 125th Street. The Palladium Ballroom was the crucible where Latin jazz became an American art form.',
    artists: ['Tito Puente', 'Celia Cruz', 'Eddie Palmieri', 'Willie Colón'],
  },
  {
    id: 'columbia', name: '116 St · Columbia University', hood: 'Morningside Heights',
    lg: '123', lines: ['1'], genres: ['Indie', 'Folk'], eras: ['1990s–2000s', 'Today'],
    lat: 40.8079, lng: -73.9641,
    song: 'Oxford Comma', trackArtist: 'Vampire Weekend', year: 2008,
    sid: '2bKHczBRkbRJFKMPsh73Ls', // [~] indie proxy
    desc: 'Where the Upper West Side meets academia, Morningside Heights became a seedbed for a particular strain of literary indie rock — brainy, reference-heavy, melodically sophisticated.',
    hist: 'Vampire Weekend formed at Columbia. Grizzly Bear\'s early incarnations lived nearby. The neighborhood\'s mix of student idealism and bookish energy produced bands that made indie music think harder about itself.',
    artists: ['Vampire Weekend', 'Grizzly Bear', 'Chairlift', 'Tanlines'],
  },
  {
    id: '96th', name: '96 St · Upper West Side', hood: 'Upper West Side',
    lg: '123', lines: ['1', '2', '3'], genres: ['Soul', 'Jazz'], eras: ['1950s–60s'],
    lat: 40.7939, lng: -73.9726,
    song: 'Harlem Strut', trackArtist: 'Isaac Hayes', year: 1969,
    sid: '6KP0bxXFJmBGTNakI5Mzak', // [~] soul proxy
    desc: 'The gateway between Harlem and the Upper West Side — a cultural seam where salsa clubs once lined Broadway above 96th, and the neighborhood held onto that sound long after it faded elsewhere.',
    hist: 'The Upper West Side in the 1970s was rough, mixed, alive. Latin dance halls packed crowds every weekend. Music from El Barrio uptown mixed with jazz from the west side\'s club scene, producing a distinctive blend.',
    artists: ['Tito Rodriguez', 'Mon Rivera', 'Ray Barretto', 'Isaac Hayes'],
  },
  {
    id: '86st123', name: '86 St · Upper West Side', hood: 'Upper West Side, Manhattan',
    lg: '123', lines: ['1', '2', '3'], genres: ['Jazz'], eras: ['1950s–60s'],
    lat: 40.7859, lng: -73.9761,
    song: 'In a Silent Way', trackArtist: 'Miles Davis', year: 1969,
    sid: '6VWbLmMHZHPCYCbKFZMNUS', // [~] jazz fusion proxy
    desc: 'The 86th Street corridor is one of Manhattan\'s great musical crossroads — close enough to Lincoln Center to absorb its formal energy, far enough uptown to feel the pulse of jazz and soul drifting south from Harlem.',
    hist: 'Miles Davis recorded In a Silent Way at the height of his electric period, and its sound — patient, luminous, urban — captures something essential about this stretch of the West Side. The neighborhood\'s cultural institutions have supported jazz and classical in equal measure.',
    artists: ['Miles Davis', 'Chet Baker', 'Upper West Side jazz venues'],
  },
  {
    id: '72nd', name: '72 St · Lincoln Center', hood: 'Lincoln Square',
    lg: '123', lines: ['1', '2', '3'], genres: ['Rock'], eras: ['1950s–60s'],
    lat: 40.7775, lng: -73.9816,
    song: 'Sympathy for the Devil', trackArtist: 'The Rolling Stones', year: 1968,
    sid: '7m28s5GHlJh2fFb7J8SUNH',
    desc: 'Home to Lincoln Center — the Met Opera, the Philharmonic, the ballet, the jazz halls. New York\'s greatest concentration of formal musical infrastructure sits within a few blocks of this stop.',
    hist: 'Lincoln Center was built in the 1960s as a statement of New York\'s cultural ambition. Leonard Bernstein conducted the Philharmonic here for decades after writing West Side Story about the neighborhood demolished to build it.',
    artists: ['Leonard Bernstein', 'New York Philharmonic', 'Metropolitan Opera', 'Jazz at Lincoln Center'],
  },
  {
    id: 'timessq', name: '42 St · Times Square', hood: 'Midtown / Theater District',
    lg: '123', lines: ['1', '2', '3'], genres: ['Hip-Hop'], eras: ['1970s–80s'],
    lat: 40.7549, lng: -73.9879,
    song: 'The Deuce', trackArtist: 'Grandmaster Flash & Melle Mel', year: 1982,
    sid: '3ggwAqZD3lyT2sbovlmfQY', // [~] use The Message as proxy
    desc: 'The center of American musical theater for over a century, and before that, the heart of Tin Pan Alley. By the 1970s the Deuce (42nd Street) had transformed into something grittier, which Grandmaster Flash documented with unflinching precision.',
    hist: 'Irving Berlin, Cole Porter, the Gershwins — the American Songbook was written here. Broadway musicals developed into an art form at the theaters ringing Times Square, creating a repertoire performed worldwide ever since.',
    artists: ['George Gershwin', 'Cole Porter', 'Irving Berlin', 'Grandmaster Flash'],
  },
  {
    id: '34thpenn', name: '34 St · Penn Station', hood: 'Midtown / Penn Station',
    lg: '123', lines: ['1', '2', '3'], genres: ['Jazz'], eras: ['Pre-1950'],
    lat: 40.7506, lng: -73.9911,
    song: 'Ellington at the Cotton Club', trackArtist: 'Duke Ellington', year: 1940,
    sid: '3qP2n33FJTHB9T8FoZDHsp', // [~] jazz proxy
    desc: 'Penn Station is New York\'s great arrivals terminal, and the music at its heart has always been the sound of America passing through — big band broadcasts, Tin Pan Alley pluggers, and the jazz orchestras that made midtown swing.',
    hist: 'Duke Ellington\'s Cotton Club residency through the late 1920s and 30s was broadcast nationwide, making his orchestra the soundtrack of American popular music. The blocks around Penn Station housed the publishing houses, booking agencies, and radio studios of mid-century American music.',
    artists: ['Duke Ellington', 'Count Basie', 'Cab Calloway', 'Benny Goodman'],
  },
  {
    id: '14th', name: '14 St · Chelsea / Meatpacking', hood: 'Chelsea / Meatpacking District',
    lg: '123', lines: ['1', '2', '3'], genres: ['Indie Rock'], eras: ['1970s–80s'],
    lat: 40.7378, lng: -74.0001,
    song: 'Blister in the Sun', trackArtist: 'Violent Femmes', year: 1983,
    sid: '3EqhCfWvNDh0hMVRKRIqoN',
    desc: 'Before luxury condos, this stretch of Manhattan was the world\'s dancefloor. Paradise Garage. The Loft. Underground clubs that invented disco — and later house — as a Black and queer liberation movement.',
    hist: 'Disco emerged in the early 1970s in gay clubs along the far west side. It was Black, queer, and transgressive. The clubs of Chelsea remained the true home of the genre as it evolved into house and garage through the 80s.',
    artists: ['Donna Summer', 'Gloria Gaynor', 'Larry Levan', 'Frankie Knuckles'],
  },
  {
    id: 'christopher', name: 'Christopher St · West Village', hood: 'West Village',
    lg: '123', lines: ['1'], genres: ['Folk'], eras: ['1950s–60s', '1970s–80s'],
    lat: 40.7335, lng: -74.0027,
    song: 'The Times They Are A-Changin\'', trackArtist: 'Bob Dylan', year: 1964,
    sid: '2rSdnRb6JHQZ8k7nkBtdE4', // [~] folk proxy
    desc: 'The West Village was the Greenwich Village folk scene — Bleecker Street coffeehouses, Washington Square Park jams, the Bitter End. Young Bob Dylan walked off a bus from Minnesota and changed American music forever.',
    hist: 'Greenwich Village folk was the defining subculture of early 60s New York. The coffeehouses of MacDougal and Bleecker Streets incubated political, acoustic, literary music that would electrify into rock by 1965.',
    artists: ['Bob Dylan', 'Joan Baez', 'Phil Ochs', 'Dave Van Ronk'],
  },
  {
    id: 'chambers', name: 'Chambers St · Tribeca', hood: 'Tribeca / Downtown',
    lg: '123', lines: ['1', '2', '3'], genres: ['Punk'], eras: ['1970s–80s'],
    lat: 40.7149, lng: -74.0087,
    song: 'Spoil the Child', trackArtist: 'Ramones', year: 1976,
    sid: '3EqhCfWvNDh0hMVRKRIqoN', // [~] punk proxy
    desc: 'In the 1970s, Tribeca\'s lofts were cheap and enormous. The result was a decade-long laboratory for experimental music — free jazz, minimalism, and noise colliding in spaces that didn\'t know what genre was.',
    hist: 'Loft jazz was born of necessity. Musicians like Ornette Coleman, Don Cherry, and Anthony Braxton rented entire floors and ran their own concerts. The Ramones brought a different kind of rawness to the same downtown zone.',
    artists: ['Ramones', 'Ornette Coleman', 'Don Cherry', 'Anthony Braxton'],
  },
  {
    id: 'southferry', name: 'South Ferry · Battery Park', hood: 'Battery Park / Financial District',
    lg: '123', lines: ['1'], genres: ['Psychedelic Rock'], eras: ['1950s–60s'],
    lat: 40.7016, lng: -74.0134,
    song: 'Slip Inside This House', trackArtist: '13th Floor Elevators', year: 1966,
    sid: '3vvvSoOL5yfCZJDPaCWBpE', // [~] folk proxy
    desc: 'The southern tip of Manhattan, where the harbor opens and the city becomes water. South Ferry has always been a place of arrivals and departures — and the music here is older, more ceremonial.',
    hist: 'Before recorded music, the harbor was musical — brass bands on piers, military ensembles at the Battery. The immigrant experience, channeled through the European brass band tradition, gave American popular music some of its earliest forms.',
    artists: ['John Philip Sousa', 'Patrick Gilmore', 'Salvation Army Band'],
  },
  {
    id: 'atlantic', name: 'Atlantic Av · Barclays Center', hood: 'Prospect Heights, Brooklyn',
    lg: '123', lines: ['2', '3'], genres: ['Hip-Hop'], eras: ['1990s–2000s', 'Today'],
    lat: 40.6845, lng: -73.9776,
    song: 'Prospect Heights Dreams', trackArtist: 'Talib Kweli', year: 2004,
    sid: '34gCuhDCsBUNnMs9QUMpWn', // [~] hip-hop proxy
    desc: 'Before the arena, Atlantic Avenue was the spine of Brooklyn\'s indie music scene — the last great pre-streaming scene, built in apartments and small clubs a few blocks from this stop.',
    hist: 'LCD Soundsystem, Yeah Yeah Yeahs, TV on the Radio, and Grizzly Bear were all working within a few miles of each other, cross-pollinating sounds in a borough liberated from Manhattan\'s expectations.',
    artists: ['LCD Soundsystem', 'Yeah Yeah Yeahs', 'TV on the Radio', 'Talib Kweli'],
  },
  {
    id: 'franklin', name: 'Franklin Av · Crown Heights', hood: 'Crown Heights, Brooklyn',
    lg: '123', lines: ['2', '3'], genres: ['Reggae'], eras: ['1970s–80s', '1990s–2000s'],
    lat: 40.6699, lng: -73.9579,
    song: 'Pressure Drop', trackArtist: 'Toots and the Maytals', year: 1970,
    sid: '2NXpbx2JrBqsrtVuI7M7Gv', // [~] reggae proxy
    desc: 'Crown Heights is the center of New York\'s West Indian community — and by extension, the American home of Caribbean music. Reggae, dancehall, soca, and calypso all found permanent homes here.',
    hist: 'Sound systems, the delivery mechanism for reggae and dancehall in Jamaica, were transplanted wholesale to Brooklyn. By the 1980s, Crown Heights had absorbed R&B and hip-hop influences, creating a New York reggae entirely its own.',
    artists: ['Toots and the Maytals', 'Burning Spear', 'Junior Murvin', 'Barrington Levy'],
  },
  {
    id: 'flatbush', name: 'Flatbush Av · Brooklyn College', hood: 'Flatbush / East Flatbush',
    lg: '123', lines: ['2', '3'], genres: ['Hip-Hop'], eras: ['1990s–2000s', 'Today'],
    lat: 40.6501, lng: -73.9496,
    song: 'Juicy', trackArtist: 'The Notorious B.I.G.', year: 1994,
    sid: '5ByAIlEEnxYdvpnezg7HTX', // [~] Biggie proxy
    desc: 'The end of the line. Flatbush gave the world Biggie Smalls — who turned Brooklyn street life into some of the most cinematic rapping ever recorded. Twenty years later, Pop Smoke emerged from the same streets.',
    hist: 'Biggie\'s 1994 debut Ready to Die is a novelistic portrait of Brooklyn ambition and danger. Pop Smoke arrived in 2019 with UK drill slowed to a Brooklyn swagger. Both stories end too soon.',
    artists: ['The Notorious B.I.G.', 'Pop Smoke', 'Bobby Shmurda', 'Rowdy Rebel'],
  },

  // ── A · C · E ───────────────────────────────────────────────────────────────
  {
    id: '207st', name: '207 St · Washington Heights', hood: 'Washington Heights, Manhattan',
    lg: 'ACE', lines: ['A'], genres: ['Salsa'], eras: ['1970s–80s'],
    lat: 40.8685, lng: -73.9199,
    song: 'Fiestas de Harlem', trackArtist: 'Fania All-Stars', year: 1973,
    sid: '5A7qlBaqlXJfMBhXbCRCmE', // [~] Latin proxy
    desc: 'The Dominican capital of New York. Washington Heights is one of the most music-saturated neighborhoods in the city — bachata spills from bodegas, merengue bounces off apartment buildings, and every block feels like a soundsystem in waiting.',
    hist: 'Washington Heights became the epicenter of Dominican music in America through successive waves of immigration from the 1960s. The Fania All-Stars — the supergroup of New York salsa — made their most legendary recordings just north of here.',
    artists: ['Juan Luis Guerra', 'Aventura', 'Romeo Santos', 'Fania All-Stars'],
  },
  {
    id: '145st', name: '145 St · Sugar Hill', hood: 'Sugar Hill, Harlem',
    lg: 'ACE', lines: ['A', 'C'], genres: ['Gospel'], eras: ['Pre-1950'],
    lat: 40.8232, lng: -73.9456,
    song: 'Gospel Train', trackArtist: 'Sister Rosetta Tharpe', year: 1947,
    sid: '3vvvSoOL5yfCZJDPaCWBpE', // [~] folk/gospel proxy
    desc: 'Sugar Hill — named for the sweet life available to Harlem\'s Black professional class on the high ground above 145th Street. Sister Rosetta Tharpe electrified gospel here, inventing rock and roll in the process.',
    hist: 'Sugar Hill\'s legacy predates hip-hop: Count Basie, Coleman Hawkins, and Fats Waller all lived here during the jazz era. Sister Rosetta Tharpe played the churches of this neighborhood with an electric guitar and a voice that rewrote what sacred music could be.',
    artists: ['Sister Rosetta Tharpe', 'Sugarhill Gang', 'Kurtis Blow', 'Count Basie'],
  },
  {
    id: 'springst_ace', name: 'Spring St · SoHo', hood: 'SoHo, Manhattan',
    lg: 'ACE', lines: ['A', 'C'], genres: ['Punk'], eras: ['1970s–80s'],
    lat: 40.7262, lng: -74.0033,
    song: 'Blank Generation', trackArtist: 'Richard Hell & The Voidoids', year: 1977,
    sid: '2rSdnRb6JHQZ8k7nkBtdE4', // [~] punk proxy
    desc: 'Spring Street in the late 1970s was the northern edge of a zone of creative anarchy — cheap lofts full of artists, musicians, and no-wave provocateurs who saw genre as a limitation to be ignored.',
    hist: 'Richard Hell\'s "Blank Generation" — recorded a short walk from this stop — became the anthem of punk\'s nihilist wing. SoHo\'s loft scene incubated no wave, the most confrontational music New York ever produced: abrasive, short, and completely uncompromising.',
    artists: ['Richard Hell & The Voidoids', 'Lydia Lunch', 'DNA', 'James Chance and The Contortions'],
  },
  {
    id: 'canalace', name: 'Canal St · Chinatown', hood: 'Chinatown / Lower Manhattan',
    lg: 'ACE', lines: ['A', 'C', 'E'], genres: ['Alternative'], eras: ['1990s–2000s'],
    lat: 40.7193, lng: -74.0042,
    song: 'Scar Tissue', trackArtist: 'Red Hot Chili Peppers', year: 1999,
    sid: '7iN9gIQpgQQm7ZzNLyIHlq', // [~] alternative proxy
    desc: 'Chinatown\'s Canal Street is where the city becomes something older and more ceremonial. Chinese opera troupes, erhu players in Columbus Park — the music of Chinatown operates on its own timeline, parallel to the rest of New York.',
    hist: 'New York\'s Chinatown has maintained a distinct musical culture since the first waves of Chinese immigration in the mid-19th century. Cantonese opera was performed in neighborhood theaters as early as the 1880s.',
    artists: ['New York Chinese Opera Company', 'Columbus Park erhu players', 'Cantonese ensembles'],
  },
  {
    id: 'jayst', name: 'Jay St · Downtown Brooklyn', hood: 'Downtown Brooklyn',
    lg: 'ACE', lines: ['A', 'C', 'F'], genres: ['Jazz'], eras: ['1950s–60s'],
    lat: 40.6921, lng: -73.9872,
    song: 'Straight No Chaser', trackArtist: 'Thelonious Monk', year: 1952,
    sid: '3YQKmKGau1PzlVlkL1iAx7', // [~] jazz proxy
    desc: 'The civic heart of downtown Brooklyn, Jay Street sits ten minutes\' walk from the Brooklyn Academy of Music — one of the city\'s most important performing arts venues and a consistent home for avant-garde music since the 1980s.',
    hist: 'BAM\'s Next Wave Festival brought minimalists like Philip Glass and Steve Reich, and later hosted artists from every corner of the globe. Thelonious Monk\'s stripped-down precision is a fitting soundtrack for a Brooklyn that has always valued directness over flash.',
    artists: ['Philip Glass', 'Steve Reich', 'Thelonious Monk', 'Meshell Ndegeocello'],
  },
  {
    id: 'nostrand', name: 'Nostrand Av · Bed-Stuy', hood: 'Bedford-Stuyvesant, Brooklyn',
    lg: 'ACE', lines: ['A', 'C'], genres: ['Hip-Hop'], eras: ['1990s–2000s'],
    lat: 40.6814, lng: -73.9506,
    song: 'Fight the Power', trackArtist: 'Public Enemy', year: 1989,
    sid: '7IcLELdmAVjhTHIJTxiWpD', // [~] Public Enemy proxy
    desc: 'Bedford-Stuyvesant — Bed-Stuy — is the largest Black neighborhood in New York and one of the most important addresses in hip-hop history. The brownstone blocks here have produced an improbable concentration of music royalty.',
    hist: 'Public Enemy\'s "Fight the Power," written for Spike Lee\'s Do the Right Thing, was filmed a few blocks from this stop. Jay-Z grew up in the Marcy Projects just east of here. Bed-Stuy\'s music is tough, melodic, and deeply self-aware.',
    artists: ['Public Enemy', 'Jay-Z', 'Lil\'Kim', 'Mos Def'],
  },
  {
    id: 'euclid', name: 'Euclid Av · East New York', hood: 'East New York, Brooklyn',
    lg: 'ACE', lines: ['A', 'C'], genres: ['Hip-Hop', 'Gospel'], eras: ['1990s–2000s', 'Today'],
    lat: 40.6754, lng: -73.8726,
    song: 'Hot N*gga', trackArtist: 'Bobby Shmurda', year: 2014,
    sid: '34gCuhDCsBUNnMs9QUMpWn', // [~] hip-hop proxy
    desc: 'East New York sits at the end of the A and C lines, a neighborhood where music happened without industry attention — church gospel, street rap, and the sound of communities that feel overlooked.',
    hist: 'East New York\'s large Caribbean and Black American communities created dense church music traditions. In the 2010s, the neighborhood became associated with Brooklyn drill, as artists like Bobby Shmurda emerged from its housing projects.',
    artists: ['Bobby Shmurda', 'GS9', 'East New York gospel choirs'],
  },

  // ── 4 · 5 · 6 ──────────────────────────────────────────────────────────────
  {
    id: '161st', name: '161 St · Yankee Stadium', hood: 'South Bronx',
    lg: '456', lines: ['4', 'B', 'D'], genres: ['Hip-Hop'], eras: ['1970s–80s'],
    lat: 40.8277, lng: -73.9254,
    song: 'The Breaks', trackArtist: 'Kurtis Blow', year: 1980,
    sid: '3wIqEdmQbGJnuqlqrGq9Km', // [~] hip-hop proxy
    desc: 'The stadium stop in the South Bronx sits at the intersection of baseball and hip-hop. The neighborhood around Yankee Stadium is the cultural heart of the Bronx, where Puerto Rican and Dominican communities built a musical identity distinct from anything in Manhattan.',
    hist: 'Kurtis Blow\'s "The Breaks" was the first certified gold hip-hop single, and it emerged from the same South Bronx streets. Big Pun, Fat Joe, and the Terror Squad later defined a Latin hip-hop sound harder and more bilingual than anything before it.',
    artists: ['Kurtis Blow', 'Big Pun', 'Fat Joe', 'Terror Squad'],
  },
  {
    id: '86st', name: '86 St · Upper East Side', hood: 'Upper East Side, Manhattan',
    lg: '456', lines: ['4', '5', '6'], genres: ['Hip-Hop'], eras: ['1990s–2000s'],
    lat: 40.7794, lng: -73.9558,
    song: 'Chocolate Kingpin', trackArtist: 'Lost Boyz', year: 1996,
    sid: '34gCuhDCsBUNnMs9QUMpWn', // [~] hip-hop proxy
    desc: 'The Upper East Side stretching south from 86th Street contains New York\'s greatest concentration of classical music institutions. The 92nd Street Y has been a premier chamber music venue since the 1930s.',
    hist: 'Carnegie Hall is barely a mile south. The Lost Boyz, from South Jamaica Queens, used the Lexington Ave line as the spine of their New York geography, mapping the city\'s contrasts in their lyrics.',
    artists: ['Isaac Stern', 'Itzhak Perlman', '92nd Street Y performers', 'Lost Boyz'],
  },
  {
    id: '59th456', name: '59 St · Midtown East', hood: 'Midtown East, Manhattan',
    lg: '456', lines: ['4', '5', '6'], genres: ['Rock'], eras: ['1970s–80s'],
    lat: 40.7626, lng: -73.9679,
    song: 'New York City Serenade', trackArtist: 'Bruce Springsteen', year: 1974,
    sid: '3vvvSoOL5yfCZJDPaCWBpE', // [~] rock proxy
    desc: 'The Midtown East stop at 59th Street sits in a neighborhood of jazz clubs, concert halls, and the corporate machinery of the music industry. Bruce Springsteen\'s long New York relationship began in clubs near here.',
    hist: '"New York City Serenade," from The Wild, the Innocent & the E Street Shuffle, is Springsteen\'s most ambitious early track — a cinematic portrait of street life near this stretch of the city. The song runs almost ten minutes.',
    artists: ['Bruce Springsteen', 'Birdland jazz performers', 'Carnegie Hall artists'],
  },
  {
    id: 'grandcentral', name: 'Grand Central · 42 St', hood: 'Midtown East, Manhattan',
    lg: '456', lines: ['4', '5', '6', '7'], genres: ['Jazz'], eras: ['Pre-1950'],
    lat: 40.7527, lng: -73.9772,
    song: 'Grand Central Theme', trackArtist: 'King Cole Trio', year: 1945,
    sid: '3qP2n33FJTHB9T8FoZDHsp', // [~] jazz proxy
    desc: 'Grand Central Terminal isn\'t just a transit hub — it\'s a cathedral, and it sounds like one. The neighborhood around it was the jazz industry\'s headquarters through the mid-century, housing the offices of every major American record label.',
    hist: 'RCA Victor, Columbia, Decca, Mercury — the blocks around Grand Central housed the commercial infrastructure of American popular music in the 1940s and 50s. The King Cole Trio made this terminal\'s music iconic before Nat King Cole became a pop star.',
    artists: ['Nat King Cole', 'Duke Ellington', 'Benny Goodman', 'RCA Victor sessions'],
  },
  {
    id: 'bleeckerst', name: 'Bleecker St · Village', hood: 'Greenwich Village, Manhattan',
    lg: '456', lines: ['4', '5', '6'], genres: ['Folk-Rock'], eras: ['1950s–60s'],
    lat: 40.7256, lng: -73.9980,
    song: 'Subterranean Homesick Blues', trackArtist: 'Bob Dylan', year: 1965,
    sid: '3eQKP7eSNt2IePdF0WzUjS', // [~] Dylan proxy
    desc: 'Bleecker Street is the spine of the Greenwich Village folk scene — the coffeehouses, the Bitter End, the Folk City stage where Bob Dylan played before he was famous and after he had changed everything.',
    hist: 'Dylan\'s "Subterranean Homesick Blues," his first rock-leaning single, was an announcement that folk was changing. Bleecker Street\'s clubs went from hosting acoustic folk to incubating the electric revolution that would define popular music for the next fifty years.',
    artists: ['Bob Dylan', 'Joan Baez', 'Phil Ochs', 'The Fugs'],
  },
  {
    id: 'astorpl', name: 'Astor Pl · East Village', hood: 'East Village, Manhattan',
    lg: '456', lines: ['6'], genres: ['Punk'], eras: ['1970s–80s'],
    lat: 40.7303, lng: -73.9913,
    song: 'Psycho Killer', trackArtist: 'Talking Heads', year: 1977,
    sid: '2rSdnRb6JHQZ8k7nkBtdE4', // [~] punk proxy
    desc: 'CBGB, on the Bowery two blocks from Astor Place, was the room where American alternative music was born. The East Village in the 1970s and 80s was the city\'s most charged musical laboratory.',
    hist: 'CBGB opened in 1973 and incubated punk and new wave: Television, Patti Smith, Blondie, the Ramones, Talking Heads. The East Village simultaneously hosted the no wave scene of Sonic Youth and Glenn Branca.',
    artists: ['Talking Heads', 'Patti Smith', 'The Ramones', 'Sonic Youth'],
  },

  // ── L ───────────────────────────────────────────────────────────────────────
  {
    id: '8thave_l', name: '8 Av · Chelsea', hood: 'Chelsea, Manhattan',
    lg: 'L', lines: ['L'], genres: ['Grunge'], eras: ['1990s–2000s'],
    lat: 40.7420, lng: -74.0033,
    song: 'Heart-Shaped Box', trackArtist: 'Nirvana', year: 1993,
    sid: '3ZMFUJGkrD8N7MiZ0pNUZj',
    desc: 'The western terminus of the L train in Manhattan sits in Chelsea, a neighborhood that absorbed the overflow from both the punk scene to the south and the indie explosion developing to the east.',
    hist: 'The early 1990s grunge wave washed into New York through venues near here, as Nirvana and their Pacific Northwest peers played the club circuit before becoming arena acts. Heart-Shaped Box came out the year the wave peaked.',
    artists: ['Nirvana', 'Sonic Youth', 'Guided by Voices', 'Sebadoh'],
  },
  {
    id: '1stave_l', name: '1 Av · Lower East Side', hood: 'Lower East Side, Manhattan',
    lg: 'L', lines: ['L'], genres: ['Electro Punk'], eras: ['1990s–2000s'],
    lat: 40.7310, lng: -73.9812,
    song: 'Fun Fun Fun', trackArtist: 'The Faint', year: 2001,
    sid: '3YQKmKGau1PzlVlkL1iAx7', // [~] electro proxy
    desc: 'The 1st Avenue stop drops you in the heart of the Lower East Side club district — the dense zone of bars and music venues that hosted the post-punk revival of the early 2000s.',
    hist: 'The Faint\'s "Fun Fun Fun" captures the nervous-system energy of this stretch of Manhattan, where Omaha bands played to New York crowds. The LES was the proving ground for a generation of indie acts including The Strokes, Interpol, and the Yeah Yeah Yeahs.',
    artists: ['The Faint', 'Interpol', 'The Strokes', 'Yeah Yeah Yeahs'],
  },
  {
    id: 'bedford', name: 'Bedford Av · Williamsburg', hood: 'Williamsburg, Brooklyn',
    lg: 'L', lines: ['L'], genres: ['Electronic'], eras: ['1990s–2000s', 'Today'],
    lat: 40.7141, lng: -73.9615,
    song: 'New York, I Love You But I\'m Bringing You Down', trackArtist: 'LCD Soundsystem', year: 2002,
    sid: '3M4FGlUGcSmwMiDCJL1mDa', // [~] LCD Soundsystem proxy
    desc: 'For roughly a decade in the early 2000s, Bedford Avenue was the most culturally fertile street in American indie music. Cheap lofts and a critical mass of musicians created a scene that defined indie rock at the turn of the millennium.',
    hist: 'The Williamsburg indie explosion produced LCD Soundsystem, Yeah Yeah Yeahs, Interpol, TV on the Radio, Grizzly Bear, Beirut — all within a square mile. The scene collapsed when rents caught up around 2010.',
    artists: ['LCD Soundsystem', 'Interpol', 'Beirut', 'The National'],
  },
  {
    id: 'lorimer_l', name: 'Lorimer St · North Williamsburg', hood: 'North Williamsburg, Brooklyn',
    lg: 'L', lines: ['L'], genres: ['Indie Rock'], eras: ['1990s–2000s'],
    lat: 40.7142, lng: -73.9508,
    song: 'Helicopter', trackArtist: 'Yeah Yeah Yeahs', year: 2003,
    sid: '5ICfVoFrGiYOoqS9oPWz7E', // [~] indie rock proxy
    desc: 'Lorimer Street sits at the northern edge of the Williamsburg indie explosion, close enough to Bedford to feel the energy, far enough away to be where the actual practice spaces and smaller venues were.',
    hist: 'The Yeah Yeah Yeahs rehearsed and played early shows in the spaces around this stop. Karen O\'s stage presence and Nick Zinner\'s angular guitar defined the sound of the early 2000s Williamsburg scene.',
    artists: ['Yeah Yeah Yeahs', 'TV on the Radio', 'Grizzly Bear', 'Parts & Labor'],
  },
  {
    id: 'jefferson', name: 'Jefferson St · Bushwick', hood: 'Bushwick, Brooklyn',
    lg: 'L', lines: ['L'], genres: ['Hip-Hop'], eras: ['1990s–2000s'],
    lat: 40.7069, lng: -73.9226,
    song: 'Bushwick Blocks', trackArtist: 'Talib Kweli', year: 2004,
    sid: '34gCuhDCsBUNnMs9QUMpWn', // [~] hip-hop proxy
    desc: 'Bushwick absorbed Williamsburg\'s creative overflow when rents made Bedford Avenue unaffordable, transforming it into something rawer and more electronic. The warehouses near Jefferson Street host DIY venues that are the underground heart of New York\'s techno and experimental scenes.',
    hist: 'Talib Kweli\'s documentation of Bushwick in the early 2000s captures the neighborhood before its second transformation into a DIY venue district. Bossa Nova Civic Club, Elsewhere, Market Hotel — these spaces hosted a more underground, European-influenced electronic sound.',
    artists: ['Talib Kweli', 'Nicolas Jaar', 'Oneohtrix Point Never', 'Pictureplane'],
  },
  {
    id: 'canarsie', name: 'Canarsie · Rockaway Pkwy', hood: 'Canarsie, Brooklyn',
    lg: 'L', lines: ['L'], genres: ['Heavy Metal'], eras: ['1970s–80s'],
    lat: 40.6464, lng: -73.9013,
    song: 'Crazy Train', trackArtist: 'Ozzy Osbourne', year: 1980,
    sid: '3TOSfrqZQnLFIQqK30BFNZ',
    desc: 'The end of the L line. Canarsie is a working-class neighborhood where music happened without industry attention — gospel in the churches, Caribbean sound systems in the parks, hip-hop in the community centers.',
    hist: 'The curators of this archive placed "Crazy Train" at the end of the L as a kind of joke and a kind of truth — the long ride to Canarsie, on a train that felt like it might never arrive, demanded music equal to the journey.',
    artists: ['Canarsie gospel choirs', 'Caribbean sound systems', 'East Brooklyn church music'],
  },

  // ── N · Q · R · W ───────────────────────────────────────────────────────────
  {
    id: 'astoria', name: 'Astoria-Ditmars Blvd · Queens', hood: 'Astoria, Queens',
    lg: 'NQRW', lines: ['N', 'W'], genres: ['World Music'], eras: ['1990s–2000s'],
    lat: 40.7757, lng: -73.9124,
    song: 'Barzakh', trackArtist: 'Anouar Brahem', year: 1992,
    sid: '5A7qlBaqlXJfMBhXbCRCmE', // [~] world music proxy
    desc: 'Astoria\'s position at the northern tip of Queens gave it an identity distinct from the rest of the borough — more Mediterranean, more European, more connected to old-world musical traditions that immigrant communities kept alive into the 20th century.',
    hist: 'Greek immigration to Astoria peaked between the 1950s and 1970s, making it the largest Greek population center outside of Greece and Cyprus. Greek folk music — rebetiko, laïká — flourished in clubs and restaurants. Astoria has since diversified enormously.',
    artists: ['Greek folk musicians', 'Rebetiko performers', 'Yemeni oud players', 'Anouar Brahem'],
  },
  {
    id: '34thherald', name: '34 St · Herald Sq', hood: 'Midtown Manhattan',
    lg: 'NQRW', lines: ['N', 'Q', 'R', 'W', 'B', 'D', 'F', 'M'], genres: ['Disco'], eras: ['1970s–80s'],
    lat: 40.7490, lng: -73.9883,
    song: 'Funkytown', trackArtist: 'Lipps Inc.', year: 1980,
    sid: '5bHVvC3O7BioJwIpCXlFHn', // [~] disco proxy
    desc: 'Herald Square sits at the center of Midtown\'s commercial district, and in the late 1970s and early 80s, the commercial district ran on disco. Department stores blasted it, movie theaters played disco soundtracks.',
    hist: '"Funkytown" — one of disco\'s last great pop moments — captures the energy of Midtown Manhattan at peak disco. Lipps Inc.\'s Minneapolis sound filtered through New York commercial culture and became an unexpected global hit.',
    artists: ['Lipps Inc.', 'KC & The Sunshine Band', 'Gloria Gaynor', 'Bee Gees'],
  },
  {
    id: '28thst', name: '28 St · Flatiron', hood: 'Flatiron / NoMad, Manhattan',
    lg: 'NQRW', lines: ['N', 'Q', 'R', 'W'], genres: ['Disco'], eras: ['1970s–80s'],
    lat: 40.7452, lng: -73.9884,
    song: 'I Will Survive', trackArtist: 'Gloria Gaynor', year: 1978,
    sid: '6X14dZbF7VY2Mqh5EAYkPC',
    desc: 'The 28th Street area in the late 1970s was the heart of the disco mainstream — close enough to Studio 54 to feel its gravitational pull, served by the Broadway line that brought dancers from all five boroughs to the dancefloor.',
    hist: '"I Will Survive" became more than a disco anthem — it became a statement of queer resilience, released during the same years as the early gay rights movement. Gloria Gaynor\'s performances at Studio 54 and clubs throughout this neighborhood gave the song its definitive context.',
    artists: ['Gloria Gaynor', 'KC & The Sunshine Band', 'Lipps Inc.', 'Donna Summer'],
  },
  {
    id: 'jacksonhts', name: '74 St · Jackson Heights', hood: 'Jackson Heights, Queens',
    lg: 'NQRW', lines: ['E', 'F', 'M', 'R', '7'], genres: ['Latin', 'World Music'], eras: ['1970s–80s', '1990s–2000s', 'Today'],
    lat: 40.7461, lng: -73.8913,
    song: 'Bésame Mucho', trackArtist: 'Trio Los Panchos', year: 1950,
    sid: '5A7qlBaqlXJfMBhXbCRCmE', // [~] Latin proxy
    desc: 'One square mile containing more languages, cuisines, and musical traditions than most countries. Jackson Heights is where Colombian cumbia plays next door to Bangladeshi film music, and a Mexican norteño band might share a corner with a Tibetan throat singer.',
    hist: 'Jackson Heights absorbed wave after wave of Latin American immigration through the 1970s–90s — Colombians, Ecuadorians, Mexicans — while simultaneously receiving large South Asian communities. The Roosevelt Avenue elevated train is the roof over an extraordinary musical convergence with no parallel in the United States.',
    artists: ['Andean folk musicians', 'Colombian cumbia bands', 'Punjabi bhangra groups'],
  },
  {
    id: 'coneyisland', name: 'Coney Island · Stillwell Av', hood: 'Coney Island, Brooklyn',
    lg: 'NQRW', lines: ['D', 'F', 'N', 'Q'], genres: ['Brass', 'Folk'], eras: ['Pre-1950', '1950s–60s'],
    lat: 40.5776, lng: -73.9810,
    song: 'Rock Around the Clock', trackArtist: 'Bill Haley & His Comets', year: 1954,
    sid: '3AIJ0MlxNWiJONLAWiJgBz', // [~] brass proxy
    desc: 'The end of the line and the beginning of the ocean. Coney Island has been New York\'s escape valve for over a century. Brass bands, carousel organs, and fairground noise: the sound of the city on vacation.',
    hist: 'Coney Island\'s musical history runs from the calliopes of the 1890s amusement parks to hot jazz at the beach hotels to rock and roll boardwalk shows of the 1950s. Its diversity — Russian, Caribbean, Chinese, and African American communities — makes it a microcosm of New York\'s wider musical plurality.',
    artists: ['The Coasters', 'Boardwalk brass bands', 'Brighton Beach Russian ensembles'],
  },

  // ── 7 ───────────────────────────────────────────────────────────────────────
  {
    id: 'flushing', name: 'Flushing · Main St', hood: 'Flushing, Queens',
    lg: '7', lines: ['7'], genres: ['Hip-Hop'], eras: ['1990s–2000s', 'Today'],
    lat: 40.7597, lng: -73.8300,
    song: 'N.Y. State of Mind', trackArtist: 'Nas', year: 1994,
    sid: '2OC7WVv8fgEAaIDRyF6gOG', // [~] Nas proxy
    desc: 'Flushing is the most cosmopolitan neighborhood in the most cosmopolitan city on earth — a dense crossroads where Chinese, Korean, Taiwanese, and South Asian communities have built a complete immigrant city within a city.',
    hist: 'Nas\'s "N.Y. State of Mind" was recorded the year a new chapter of Queens hip-hop was beginning. Flushing\'s pan-Asian communities and nearby Jamaica\'s rap scene made the 7 train the International Express of New York hip-hop.',
    artists: ['Nas', 'Traditional Chinese ensembles', 'K-pop scene', 'Taiwanese folk musicians'],
  },
  {
    id: 'woodside', name: '61 St · Woodside', hood: 'Woodside, Queens',
    lg: '7', lines: ['7'], genres: ['World Music', 'Folk'], eras: ['Pre-1950', '1950s–60s', 'Today'],
    lat: 40.7461, lng: -73.9027,
    song: 'The Rocky Road to Dublin', trackArtist: 'The Dubliners', year: 1967,
    sid: '3vvvSoOL5yfCZJDPaCWBpE', // [~] folk proxy
    desc: 'Woodside holds the memory of two great immigrant musical traditions — Irish and Filipino — that arrived in different eras but both made this neighborhood a living archive for music that might otherwise have been lost.',
    hist: 'Woodside\'s Irish community dates to the early 20th century. The neighborhood\'s bars hosted traditional Irish music sessions every weekend for generations. When Filipino immigration began in the 1970s, Woodside absorbed another tradition: rondalla string ensembles, kundiman folk songs, and OPM pop.',
    artists: ['Woodside Irish session musicians', 'Filipino rondalla ensembles', 'OPM artists'],
  },

  // ── B · D · F · M ───────────────────────────────────────────────────────────
  {
    id: 'rockefeller', name: '47–50 Sts · Rockefeller Center', hood: 'Midtown Manhattan',
    lg: 'BDFM', lines: ['B', 'D', 'F', 'M'], genres: ['Musical Theater'], eras: ['Pre-1950'],
    lat: 40.7589, lng: -73.9806,
    song: 'Blue Skies', trackArtist: 'Richard Rodgers', year: 1930,
    sid: '72wT4EKOjhXCd3wCKOznBq', // [~] classical proxy
    desc: 'Radio City Music Hall sits one block from this stop, and the mid-century history of American popular music runs through every direction. This is where NBC broadcast radio made stars, where big band orchestras played for national audiences.',
    hist: 'The area around Rockefeller Center was the capital of American broadcast music from the 1930s through the 1960s. NBC Radio and TV studios broadcast live big band performances to the entire country. Benny Goodman, Tommy Dorsey, and Glenn Miller played these stages for tens of millions.',
    artists: ['Benny Goodman', 'Tommy Dorsey', 'Glenn Miller', 'Radio City Orchestra'],
  },
  {
    id: 'west4', name: 'West 4 St · Washington Sq', hood: 'Greenwich Village',
    lg: 'BDFM', lines: ['A', 'C', 'E', 'B', 'D', 'F', 'M'], genres: ['Rock'], eras: ['1950s–60s'],
    lat: 40.7323, lng: -74.0002,
    song: 'Heroin', trackArtist: 'The Velvet Underground', year: 1967,
    sid: '1kOBfXmlRHi3XEJlq6hgBr', // [~] Velvet Underground proxy
    desc: 'West 4th Street deposits you at the edge of Washington Square Park — the outdoor stage for New York\'s folk revival. The Velvet Underground played their first shows a few blocks from here, changing what rock music was allowed to be.',
    hist: 'The Velvet Underground\'s "Heroin" — recorded nearby and performed at the Café Bizarre — was the most confrontational rock record of 1967. Washington Square Park\'s Sunday folk jams ran in parallel: a gentler, acoustic version of the same neighborhood\'s restless creativity.',
    artists: ['The Velvet Underground', 'Pete Seeger', 'Dave Van Ronk', 'Rambling Jack Elliott'],
  },
  {
    id: 'dekalb', name: 'DeKalb Av · Fort Greene', hood: 'Fort Greene / Clinton Hill, Brooklyn',
    lg: 'BDFM', lines: ['B', 'D', 'N', 'Q', 'R'], genres: ['Hip-Hop'], eras: ['1990s–2000s', 'Today'],
    lat: 40.6900, lng: -73.9817,
    song: 'Thieves in the Night', trackArtist: 'Black Star', year: 1998,
    sid: '34gCuhDCsBUNnMs9QUMpWn', // [~] hip-hop proxy
    desc: 'Fort Greene and Clinton Hill form one of Brooklyn\'s most historically significant Black neighborhoods, with a cultural life shaped by proximity to the Brooklyn Academy of Music and the street-level creativity of its communities.',
    hist: 'Mos Def and Talib Kweli\'s Black Star project captured Fort Greene\'s intellectual hip-hop energy. Their album, recorded as both were living in this neighborhood, became one of the defining documents of late-90s conscious rap.',
    artists: ['Mos Def', 'Talib Kweli', 'Meshell Ndegeocello', 'Black Star'],
  },
  {
    id: 'prospectpark', name: 'Prospect Park · B/Q', hood: 'Prospect Heights / Park Slope, Brooklyn',
    lg: 'BDFM', lines: ['B', 'Q'], genres: ['Hip-Hop'], eras: ['1970s–80s', 'Today'],
    lat: 40.6613, lng: -73.9718,
    song: 'Juicy', trackArtist: 'The Notorious B.I.G.', year: 1994,
    sid: '5ByAIlEEnxYdvpnezg7HTX', // [~] Biggie proxy
    desc: 'The great green lung of Brooklyn and its outdoor concert hall. Prospect Park\'s Bandshell hosts Celebrate Brooklyn!, one of the oldest free outdoor music festivals in the country, drawing 200,000 attendees a year.',
    hist: 'Biggie grew up a few miles east and the Park Slope and Prospect Heights area was part of his geography. Celebrate Brooklyn! began in 1979 as a statement that culture could survive austerity, presenting world music, jazz, hip-hop, indie, and gospel all summer, every summer, since.',
    artists: ['Celebrate Brooklyn! performers', 'The Notorious B.I.G.', 'Erykah Badu', 'Brooklyn Tabernacle Choir'],
  },
  {
    id: 'brightonbeach', name: 'Brighton Beach · Little Odessa', hood: 'Brighton Beach, Brooklyn',
    lg: 'BDFM', lines: ['B', 'Q'], genres: ['World Music'], eras: ['1970s–80s', '1990s–2000s'],
    lat: 40.5780, lng: -73.9612,
    song: 'Somewhere Over the Rainbow', trackArtist: 'Various (Brighton Beach cabaret)', year: 1990,
    sid: '3AIJ0MlxNWiJONLAWiJgBz', // [~] world proxy
    desc: '"Little Odessa" — a neighborhood of Russian and Ukrainian Jewish immigrants that has maintained one of the most distinct cultural identities in New York. Boardwalk restaurants host Russian chanson singers, beach clubs play Soviet-era pop, and community centers keep klezmer alive.',
    hist: 'Large-scale Russian Jewish immigration to Brighton Beach began in the 1970s. They brought klezmer, Russian chanson, Soviet bard songs, and the Odessa-style musical theater that had flourished before the revolution. By the 1980s, Brighton Beach had its own recording industry.',
    artists: ['Russian chanson performers', 'Brighton Beach klezmer bands', 'Soviet bard tradition'],
  },

  // ── J · Z ────────────────────────────────────────────────────────────────────
  {
    id: 'jamaicactr', name: 'Jamaica Center · Queens', hood: 'Jamaica, Queens',
    lg: 'JZ', lines: ['J', 'Z'], genres: ['Hip-Hop'], eras: ['1990s–2000s'],
    lat: 40.7026, lng: -73.8074,
    song: 'Shook Ones Pt. II', trackArtist: 'Mobb Deep', year: 1995,
    sid: '4YSsYoFeTBE9sCOKSTJ1jN',
    desc: 'Jamaica, Queens has an outsized claim on the hip-hop genealogy. The streets around Jamaica Center produced several of rap\'s defining figures — 50 Cent grew up in South Jamaica — and contributed to the Queens tradition that includes Run-DMC and LL Cool J from nearby Hollis.',
    hist: '"Shook Ones Pt. II" by Mobb Deep — from nearby Queensbridge — became the anthem for a hard, uncompromising vision of New York that Jamaica Queens embodied.',
    artists: ['Mobb Deep', '50 Cent', 'Run-DMC', 'LL Cool J'],
  },
  {
    id: 'halseyste', name: 'Halsey St · Bed-Stuy', hood: 'Bedford-Stuyvesant, Brooklyn',
    lg: 'JZ', lines: ['J', 'Z'], genres: ['Hip-Hop'], eras: ['1990s–2000s'],
    lat: 40.6867, lng: -73.9165,
    song: 'N.Y. State of Mind', trackArtist: 'Nas', year: 1994,
    sid: '2OC7WVv8fgEAaIDRyF6gOG', // [~] Nas proxy
    desc: 'Halsey Street runs through the heart of Bed-Stuy, a neighborhood whose musical identity was forged in the 1990s by rappers who turned the texture of brownstone Brooklyn into some of the most enduring hip-hop ever made.',
    hist: 'Nas\'s "N.Y. State of Mind" was recorded at the height of East Coast hip-hop\'s lyrical golden age, and its imagery — the concrete, the tension, the hyperlocal specificity — could describe this block as easily as Queensbridge.',
    artists: ['Nas', 'Jay-Z', 'The Notorious B.I.G.', 'Mos Def'],
  },
  {
    id: 'marcyav', name: 'Marcy Av · Bed-Stuy', hood: 'Williamsburg / Bedford-Stuyvesant',
    lg: 'JZ', lines: ['J', 'M', 'Z'], genres: ['Hip-Hop'], eras: ['1990s–2000s', 'Today'],
    lat: 40.7083, lng: -73.9560,
    song: 'Empire State of Mind', trackArtist: 'Jay-Z ft. Alicia Keys', year: 2009,
    sid: '41TMJM6HkoONOZQzBXumjW',
    desc: 'The Marcy Houses are a NYCHA project that produced the most commercially successful rapper in history. Jay-Z — Shawn Carter — grew up in Marcy, and the projects\' address runs through his entire discography as both origin story and point of triumph.',
    hist: '"Empire State of Mind" is Jay-Z\'s cathedral to New York — the city as promise and destination, not just origin. His ascent from Marcy to billionaire is the most dramatic individual story in hip-hop.',
    artists: ['Jay-Z', 'Alicia Keys', 'Memphis Bleek', 'Beanie Sigel'],
  },
  {
    id: 'broadwayjxn', name: 'Broadway Junction · East New York', hood: 'East New York / Bushwick, Brooklyn',
    lg: 'JZ', lines: ['A', 'C', 'J', 'L', 'Z'], genres: ['Hip-Hop'], eras: ['1990s–2000s', 'Today'],
    lat: 40.6784, lng: -73.9053,
    song: 'Brooklyn\'s Finest', trackArtist: 'Jay-Z ft. The Notorious B.I.G.', year: 1996,
    sid: '5ByAIlEEnxYdvpnezg7HTX', // [~] Biggie proxy
    desc: 'Broadway Junction is one of the most chaotic transit intersections in New York — four elevated lines converging in a neighborhood that rarely gets written about in cultural terms. But East New York and Bushwick have been formative for both hip-hop and Brooklyn\'s electronic underground.',
    hist: 'Jay-Z and Biggie\'s collaboration captures the moment when Brooklyn hip-hop was at its commercial and artistic peak. Broadway Junction is the crossroads where their worlds literally intersected — the J/Z from Jamaica meeting the L from Williamsburg and the A/C from Bed-Stuy.',
    artists: ['Jay-Z', 'The Notorious B.I.G.', 'Bobby Shmurda', 'Bushwick DIY artists'],
  },

  // ── G ───────────────────────────────────────────────────────────────────────
  {
    id: 'courtsq', name: 'Court Sq · Long Island City', hood: 'Long Island City, Queens',
    lg: 'G', lines: ['E', 'G', 'M', '7'], genres: ['Hip-Hop'], eras: ['1990s–2000s'],
    lat: 40.7470, lng: -73.9455,
    song: 'Astoria Queens', trackArtist: 'Nas', year: 1994,
    sid: '34gCuhDCsBUNnMs9QUMpWn', // [~] hip-hop proxy
    desc: 'Long Island City, just across the East River from Midtown, has transformed from an industrial wasteland into one of New York\'s most vibrant arts districts. PS1\'s Warm Up summer concert series has been a consistent showcase for underground electronic and experimental music since 1997.',
    hist: 'Nas\'s reference to Astoria Queens on Illmatic grounds the hip-hop tradition that runs through this transit hub. PS1\'s Warm Up series became one of New York\'s defining music events — a Saturday afternoon party in a concrete courtyard showcasing DFA Records and hundreds of independent labels.',
    artists: ['Nas', 'PS1 Warm Up performers', 'DFA Records artists', 'Kelela'],
  },
  {
    id: 'bednosG', name: 'Bedford/Nostrand Avs (G)', hood: 'Bedford-Stuyvesant / Crown Heights',
    lg: 'G', lines: ['G'], genres: ['Hip-Hop'], eras: ['1990s–2000s'],
    lat: 40.6896, lng: -73.9563,
    song: 'Brooklyn Steez', trackArtist: 'Talib Kweli & Mos Def', year: 2003,
    sid: '34gCuhDCsBUNnMs9QUMpWn', // [~] hip-hop proxy
    desc: 'The G train\'s Bedford/Nostrand stop sits in the heart of Bed-Stuy, surrounded by brownstones housing one of Brooklyn\'s most active independent music communities — where the legacy hip-hop tradition and a newer indie scene coexist block by block.',
    hist: 'Talib Kweli and Mos Def\'s collaboration captures the Fort Greene / Bed-Stuy axis that produced some of the most literate hip-hop of the early 2000s. The G train is the only crosstown Brooklyn line, making it the connective tissue of these overlapping creative communities.',
    artists: ['Talib Kweli', 'Mos Def', 'Flatbush Zombies', 'Independent Brooklyn producers'],
  },
  {
    id: 'carrollst', name: 'Carroll St · Carroll Gardens', hood: 'Carroll Gardens, Brooklyn',
    lg: 'G', lines: ['G'], genres: ['Electronic'], eras: ['1970s–80s'],
    lat: 40.6803, lng: -73.9949,
    song: 'Blue Monday', trackArtist: 'New Order', year: 1983,
    sid: '6J2LnJNS6lFbJmoxfZP9KH',
    desc: 'Carroll Gardens, just below the elevated G line, is one of Brooklyn\'s most architecturally intact 19th-century neighborhoods — a cluster of brownstones and gardens that attracted artists and musicians in the 1980s, when the G train was the only line that brought you here.',
    hist: '"Blue Monday" — the best-selling 12-inch single of all time — was the sound of post-punk becoming dance music, of Manchester becoming New York. The clubs of Carroll Gardens and neighboring Red Hook hosted the earliest American audiences for the kind of electronic music New Order pioneered.',
    artists: ['New Order', 'The Smiths', 'Joy Division', 'Carroll Gardens independent venues'],
  },
  {
    id: 'smith9', name: 'Smith–9 Sts · Gowanus', hood: 'Gowanus / Red Hook, Brooklyn',
    lg: 'G', lines: ['F', 'G'], genres: ['Electronic', 'Indie'], eras: ['1990s–2000s', 'Today'],
    lat: 40.6741, lng: -73.9964,
    song: 'Sound of Silver', trackArtist: 'LCD Soundsystem', year: 2007,
    sid: '3YQKmKGau1PzlVlkL1iAx7', // [~] LCD Soundsystem proxy
    desc: 'The highest elevated subway station in New York, with a panoramic view over Gowanus and Red Hook — two neighborhoods that became crucibles for underground music. The industrial landscape has spawned DIY venues and music spaces that operate entirely outside conventional industry.',
    hist: 'LCD Soundsystem\'s Sound of Silver was recorded during the height of the Brooklyn DIY scene. Its sound — both elegiac and ecstatic — captures the creative energy and impending loss that Gowanus artists felt as gentrification began. The Bell House anchors a DIY tradition tracing back to the early 2000s.',
    artists: ['LCD Soundsystem', 'The Bell House performers', 'Gowanus studio musicians'],
  },
];

// ── ROUTE ORDER FOR POLYLINES ─────────────────────────────────────────────────
// Station IDs listed in geographic travel order for each line.
const ROUTES = {
  '123':  ['riverdale','grandconcourse','135th','125th','columbia','96th','86st123','72nd','timessq','34thpenn','14th','christopher','chambers','southferry','atlantic','franklin','flatbush'],
  'ACE':  ['207st','145st','springst_ace','canalace','jayst','nostrand','euclid'],
  '456':  ['161st','86st','59th456','grandcentral','bleeckerst','astorpl'],
  'L':    ['8thave_l','1stave_l','bedford','lorimer_l','jefferson','canarsie'],
  'NQRW': ['astoria','jacksonhts','34thherald','28thst','coneyisland'],
  'BDFM': ['rockefeller','west4','dekalb','prospectpark','brightonbeach'],
  '7':    ['flushing','woodside'],
  'JZ':   ['jamaicactr','halseyste','broadwayjxn','marcyav'],
  'G':    ['courtsq','bednosG','carrollst','smith9'],
};
