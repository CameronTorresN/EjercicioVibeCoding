// ── LINE METADATA ─────────────────────────────────────────────────────────────
const LM = {
  '123':  { color: '#EE352E', tc: '#fff', letters: ['1','2','3'],         name: '1 · 2 · 3'     },
  'ACE':  { color: '#2850AD', tc: '#fff', letters: ['A','C','E'],         name: 'A · C · E'     },
  '456':  { color: '#00933C', tc: '#fff', letters: ['4','5','6'],         name: '4 · 5 · 6'     },
  'L':    { color: '#A0A0A0', tc: '#fff', letters: ['L'],                 name: 'L'              },
  'NQRW': { color: '#C9A800', tc: '#111', letters: ['N','Q','R','W'],     name: 'N · Q · R · W' },
  'BDFM': { color: '#FF6319', tc: '#fff', letters: ['B','D','F','M'],     name: 'B · D · F · M' },
  '7':    { color: '#B933AD', tc: '#fff', letters: ['7'],                 name: '7'              },
  'JZ':   { color: '#8C6239', tc: '#fff', letters: ['J','Z'],             name: 'J · Z'          },
  'G':    { color: '#4EA83A', tc: '#fff', letters: ['G'],                 name: 'G'              },
};

// ── STATIONS ──────────────────────────────────────────────────────────────────
const S = [

  // 1/2/3 ─────────────────────────────────────────────────────────────────────
  { id: 'riverdale', name: '231 St · Riverdale', hood: 'Riverdale, Bronx',
    lg: '123', lines: ['1'], genres: ['Folk'], eras: ['1950s–60s','1970s–80s'],
    lat: 40.8888, lng: -73.8986,
    desc: 'The leafy northern edge of the Bronx, where the city exhales into wooded hills and quiet avenues. Riverdale kept a village feeling long after the rest of the borough urbanized, drawing musicians who wanted proximity to the city without the noise.',
    hist: 'Folk music found a Bronx foothold in coffeehouses and community centers near Riverdale through the 1950s and 60s — part of the wider urban folk revival stretching from the Village to the outer boroughs. The tradition of civic music-making persisted well into the 80s.',
    artists: ['Pete Seeger','The Weavers','Woody Guthrie'], sid: '3vvvSoOL5yfCZJDPaCWBpE' },

  { id: 'grandconcourse', name: '149 St · Grand Concourse', hood: 'South Bronx',
    lg: '123', lines: ['2','3'], genres: ['Hip-Hop'], eras: ['1970s–80s','1990s–2000s'],
    lat: 40.8226, lng: -73.9253,
    desc: 'Ground zero. The South Bronx in the 1970s was a borough in crisis — arson, disinvestment, social collapse — and out of that crucible came hip-hop. DJ Kool Herc\'s parties, Afrika Bambaataa\'s Zulu Nation, Grandmaster Flash\'s turntable science.',
    hist: 'Hip-hop was born in the Bronx. The genre emerged from block parties in the early 1970s, pioneered by first-generation Jamaican-American DJs who extended the breakbeat into something new. The Grand Concourse corridor was the canvas for an entirely new art form.',
    artists: ['DJ Kool Herc','Grandmaster Flash','Afrika Bambaataa','KRS-One'], sid: '34gCuhDCsBUNnMs9QUMpWn' },

  { id: '135th', name: '135 St · Harlem', hood: 'Harlem, Manhattan',
    lg: '123', lines: ['2','3'], genres: ['Jazz','Hip-Hop'], eras: ['Pre-1950','1990s–2000s'],
    lat: 40.8147, lng: -73.9408,
    desc: 'The spiritual center of Black cultural life in America for over a century. The Harlem Renaissance made 135th Street synonymous with creative ambition — the Apollo, the Cotton Club, the rent parties. Decades later, Harlem became a factory for 90s rap royalty.',
    hist: 'Harlem\'s musical identity spans from the jazz age through hip-hop. The 1920s–40s Renaissance produced Duke Ellington, Billie Holiday, and Ella Fitzgerald. In the 1990s, Cam\'ron, Big L, and Mase defined a new Harlem sound.',
    artists: ['Duke Ellington','Ella Fitzgerald','Billie Holiday','Big L'], sid: '3qP2n33FJTHB9T8FoZDHsp' },

  { id: '125th', name: '125 St · East Harlem', hood: 'East Harlem / El Barrio',
    lg: '123', lines: ['2','3'], genres: ['Latin','Jazz'], eras: ['1950s–60s','1970s–80s'],
    lat: 40.8079, lng: -73.9449,
    desc: 'El Barrio — Spanish Harlem — was the incubator of American Latin music. Puerto Rican and Cuban immigrants turned East Harlem into a laboratory for sound, blending African rhythm with Caribbean melody and jazz sophistication into something entirely new.',
    hist: 'From the 1940s onward, East Harlem pulsed with mambo, cha-cha, and salsa. Tito Puente grew up a few blocks from 125th Street. The Palladium Ballroom was the crucible where Latin jazz became an American art form.',
    artists: ['Tito Puente','Celia Cruz','Eddie Palmieri','Willie Colón'], sid: '5A7qlBaqlXJfMBhXbCRCmE' },

  { id: 'columbia', name: '116 St · Columbia University', hood: 'Morningside Heights',
    lg: '123', lines: ['1'], genres: ['Indie','Folk'], eras: ['1990s–2000s','Today'],
    lat: 40.8079, lng: -73.9641,
    desc: 'Where the Upper West Side meets academia, Morningside Heights became a seedbed for a particular strain of literary indie rock — brainy, reference-heavy, melodically sophisticated. The campus and its surroundings hum with an unusual kind of musical ambition.',
    hist: 'Vampire Weekend formed at Columbia. Grizzly Bear\'s early incarnations lived nearby. The neighborhood\'s mix of student idealism and bookish energy produced bands that made indie music think harder about itself.',
    artists: ['Vampire Weekend','Grizzly Bear','Chairlift','Tanlines'], sid: '2bKHczBRkbRJFKMPsh73Ls' },

  { id: '96th', name: '96 St · Upper West Side', hood: 'Upper West Side',
    lg: '123', lines: ['1','2','3'], genres: ['Latin','Jazz'], eras: ['1970s–80s'],
    lat: 40.7939, lng: -73.9726,
    desc: 'The gateway between Harlem and the Upper West Side — a cultural seam where salsa clubs once lined Broadway above 96th, and the neighborhood held onto that sound long after it faded elsewhere.',
    hist: 'The Upper West Side in the 1970s was rough, mixed, alive. Latin dance halls packed crowds every weekend. Music from El Barrio uptown mixed with jazz from the west side\'s club scene, producing a distinctive blend.',
    artists: ['Tito Rodriguez','Mon Rivera','Ray Barretto'], sid: '6JM26xQNb8NwYlRkJbhJij' },

  { id: '72nd', name: '72 St · Lincoln Center', hood: 'Lincoln Square',
    lg: '123', lines: ['1','2','3'], genres: ['Classical'], eras: ['1950s–60s','Today'],
    lat: 40.7775, lng: -73.9816,
    desc: 'Home to Lincoln Center — the Met Opera, the Philharmonic, the ballet, the jazz halls. New York\'s greatest concentration of formal musical infrastructure sits within a few blocks of this stop.',
    hist: 'Lincoln Center was built in the 1960s as a statement of New York\'s cultural ambition. Leonard Bernstein conducted the Philharmonic here for decades after writing West Side Story about the neighborhood demolished to build it.',
    artists: ['Leonard Bernstein','New York Philharmonic','Metropolitan Opera','Jazz at Lincoln Center'], sid: '72wT4EKOjhXCd3wCKOznBq' },

  { id: 'timessq', name: '42 St · Times Square', hood: 'Midtown / Theater District',
    lg: '123', lines: ['1','2','3'], genres: ['Jazz','Folk'], eras: ['Pre-1950','1950s–60s'],
    lat: 40.7549, lng: -73.9879,
    desc: 'The center of American musical theater for over a century, and before that, the heart of Tin Pan Alley. Every Broadway show, every Golden Age standard passed through these blocks.',
    hist: 'Irving Berlin, Cole Porter, the Gershwins — the American Songbook was written here. Broadway musicals developed into an art form at the theaters ringing Times Square, creating a repertoire performed worldwide ever since.',
    artists: ['George Gershwin','Cole Porter','Irving Berlin','Rodgers & Hammerstein'], sid: '3YcqXEBTgQ7GqGmw5KmvJ3' },

  { id: '14th', name: '14 St · Chelsea / Meatpacking', hood: 'Chelsea / Meatpacking District',
    lg: '123', lines: ['1','2','3'], genres: ['Disco'], eras: ['1970s–80s'],
    lat: 40.7378, lng: -74.0001,
    desc: 'Before luxury condos, this stretch of Manhattan was the world\'s dancefloor. Paradise Garage. The Loft. Underground clubs that invented disco — and later house — as a Black and queer liberation movement.',
    hist: 'Disco emerged in the early 1970s in gay clubs along the far west side. It was Black, queer, and transgressive. The clubs of Chelsea remained the true home of the genre as it evolved into house and garage through the 80s.',
    artists: ['Donna Summer','Gloria Gaynor','Larry Levan','Frankie Knuckles'], sid: '6KP0bxXFJmBGTNakI5Mzak' },

  { id: 'christopher', name: 'Christopher St · West Village', hood: 'West Village',
    lg: '123', lines: ['1'], genres: ['Folk'], eras: ['1950s–60s','1970s–80s'],
    lat: 40.7335, lng: -74.0027,
    desc: 'The West Village was the Greenwich Village folk scene — Bleecker Street coffeehouses, Washington Square Park jams, the Bitter End. Young Bob Dylan walked off a bus from Minnesota and changed American music forever.',
    hist: 'Greenwich Village folk was the defining subculture of early 60s New York. The coffeehouses of MacDougal and Bleecker Streets incubated political, acoustic, literary music that would electrify into rock by 1965.',
    artists: ['Bob Dylan','Joan Baez','Phil Ochs','Dave Van Ronk'], sid: '2rSdnRb6JHQZ8k7nkBtdE4' },

  { id: 'chambers', name: 'Chambers St · Tribeca', hood: 'Tribeca / Downtown',
    lg: '123', lines: ['1','2','3'], genres: ['Jazz'], eras: ['1970s–80s'],
    lat: 40.7149, lng: -74.0087,
    desc: 'In the 1970s, Tribeca\'s lofts were cheap and enormous. The result was a decade-long laboratory for experimental music — free jazz, minimalism, and noise colliding in spaces that didn\'t know what genre was.',
    hist: 'Loft jazz was born of necessity. Musicians like Ornette Coleman, Don Cherry, and Anthony Braxton rented entire floors and ran their own concerts. No label, no club, no intermediary — just music in rooms.',
    artists: ['Ornette Coleman','Don Cherry','Anthony Braxton','Cecil Taylor'], sid: '3YQKmKGau1PzlVlkL1iAx7' },

  { id: 'southferry', name: 'South Ferry · Battery Park', hood: 'Battery Park / Financial District',
    lg: '123', lines: ['1'], genres: ['Brass'], eras: ['Pre-1950'],
    lat: 40.7016, lng: -74.0134,
    desc: 'The southern tip of Manhattan, where the harbor opens and the city becomes water. South Ferry has always been a place of arrivals and departures. The music here is older, more ceremonial.',
    hist: 'Before recorded music, the harbor was musical — brass bands on piers, military ensembles at the Battery. The immigrant experience, channeled through the European brass band tradition, gave American popular music some of its earliest forms.',
    artists: ['John Philip Sousa','Patrick Gilmore','Salvation Army Band'], sid: '3AIJ0MlxNWiJONLAWiJgBz' },

  { id: 'atlantic', name: 'Atlantic Av · Barclays Center', hood: 'Prospect Heights, Brooklyn',
    lg: '123', lines: ['2','3'], genres: ['Indie'], eras: ['1990s–2000s','Today'],
    lat: 40.6845, lng: -73.9776,
    desc: 'Before the arena, Atlantic Avenue was the spine of Brooklyn\'s indie music scene — the last great pre-streaming scene, built in apartments and small clubs a few blocks from this stop.',
    hist: 'LCD Soundsystem, Yeah Yeah Yeahs, TV on the Radio, and Grizzly Bear were all working within a few miles of each other, cross-pollinating sounds in a borough liberated from Manhattan\'s expectations.',
    artists: ['LCD Soundsystem','Yeah Yeah Yeahs','TV on the Radio','Grizzly Bear'], sid: '5ByAIlEEnxYdvpnezg7HTX' },

  { id: 'franklin', name: 'Franklin Av · Crown Heights', hood: 'Crown Heights, Brooklyn',
    lg: '123', lines: ['2','3'], genres: ['Reggae'], eras: ['1970s–80s','1990s–2000s'],
    lat: 40.6699, lng: -73.9579,
    desc: 'Crown Heights is the center of New York\'s West Indian community — and by extension, the American home of Caribbean music. Reggae, dancehall, soca, and calypso all found permanent homes here.',
    hist: 'Sound systems, the delivery mechanism for reggae and dancehall in Jamaica, were transplanted wholesale to Brooklyn. By the 1980s, Crown Heights had absorbed R&B and hip-hop influences, creating a New York reggae entirely its own.',
    artists: ['Toots and the Maytals','Burning Spear','Junior Murvin','Barrington Levy'], sid: '2NXpbx2JrBqsrtVuI7M7Gv' },

  { id: 'flatbush', name: 'Flatbush Av · Brooklyn College', hood: 'Flatbush / East Flatbush',
    lg: '123', lines: ['2','3'], genres: ['Hip-Hop'], eras: ['1990s–2000s','Today'],
    lat: 40.6501, lng: -73.9496,
    desc: 'The end of the line. Flatbush gave the world Biggie Smalls — who turned Brooklyn street life into some of the most cinematic rapping ever recorded. Twenty years later, Pop Smoke emerged from the same streets.',
    hist: 'Biggie\'s 1994 debut Ready to Die is a novelistic portrait of Brooklyn ambition and danger. Pop Smoke arrived in 2019 with UK drill slowed to a Brooklyn swagger. Both stories end too soon.',
    artists: ['The Notorious B.I.G.','Pop Smoke','Bobby Shmurda','Rowdy Rebel'], sid: '5ByAIlEEnxYdvpnezg7HTX' },

  // A/C/E ──────────────────────────────────────────────────────────────────────
  { id: '207st', name: '207 St · Washington Heights', hood: 'Washington Heights, Manhattan',
    lg: 'ACE', lines: ['A'], genres: ['Latin'], eras: ['1970s–80s','1990s–2000s','Today'],
    lat: 40.8685, lng: -73.9199,
    desc: 'The Dominican capital of New York. Washington Heights is one of the most music-saturated neighborhoods in the city — bachata spills from bodegas, merengue bounces off apartment buildings, and every block feels like a soundsystem in waiting.',
    hist: 'Washington Heights became the epicenter of Dominican music in America through successive waves of immigration from the 1960s. Bachata — once considered too rural even in the Dominican Republic — found legitimacy here as artists like Juan Luis Guerra elevated it into a global phenomenon.',
    artists: ['Juan Luis Guerra','Aventura','Romeo Santos'], sid: '5A7qlBaqlXJfMBhXbCRCmE' },

  { id: '145st', name: '145 St · Sugar Hill', hood: 'Sugar Hill, Harlem',
    lg: 'ACE', lines: ['A','C'], genres: ['Hip-Hop','Jazz'], eras: ['Pre-1950','1970s–80s'],
    lat: 40.8232, lng: -73.9456,
    desc: 'Sugar Hill — named for the sweet life available to Harlem\'s Black professional class on the high ground above 145th Street. The Sugarhill Gang recorded "Rapper\'s Delight" nearby, and hip-hop entered mainstream American culture.',
    hist: '"Rapper\'s Delight" in 1979 was the first rap song to reach the top 40 — named for this neighborhood. But Sugar Hill\'s legacy predates hip-hop: Count Basie, Coleman Hawkins, and Fats Waller all lived here during the jazz era.',
    artists: ['Sugarhill Gang','Grandmaster Melle Mel','Kurtis Blow','Count Basie'], sid: '6GjwtEZcfenmOf6l18N7T7' },

  { id: 'canalace', name: 'Canal St · Chinatown', hood: 'Chinatown / Lower Manhattan',
    lg: 'ACE', lines: ['A','C','E'], genres: ['World'], eras: ['Pre-1950','Today'],
    lat: 40.7193, lng: -74.0042,
    desc: 'Chinatown\'s Canal Street is where the city becomes something older and more ceremonial. Chinese opera troupes, erhu players in Columbus Park — the music of Chinatown operates on its own timeline, parallel to the rest of New York.',
    hist: 'New York\'s Chinatown has maintained a distinct musical culture since the first waves of Chinese immigration in the mid-19th century. Cantonese opera was performed in neighborhood theaters as early as the 1880s. Today traditional Chinese music coexists with Fujianese folk and pan-Asian sounds.',
    artists: ['New York Chinese Opera Company','Columbus Park erhu players','Cantonese ensembles'], sid: '3AIJ0MlxNWiJONLAWiJgBz' },

  { id: 'jayst', name: 'Jay St · Downtown Brooklyn', hood: 'Downtown Brooklyn',
    lg: 'ACE', lines: ['A','C','F'], genres: ['Indie','Classical'], eras: ['1990s–2000s','Today'],
    lat: 40.6921, lng: -73.9872,
    desc: 'The civic heart of downtown Brooklyn, Jay Street sits ten minutes\' walk from the Brooklyn Academy of Music — one of the city\'s most important performing arts venues and a consistent home for avant-garde music since the 1980s.',
    hist: 'BAM\'s Next Wave Festival brought minimalists like Philip Glass and Steve Reich, and later hosted artists from every corner of the globe. BAM\'s willingness to program experimental and non-Western work in a borough overlooked by Manhattan institutions made it genuinely important.',
    artists: ['Philip Glass','Steve Reich','Brooklyn Academy of Music','Meshell Ndegeocello'], sid: '3YQKmKGau1PzlVlkL1iAx7' },

  { id: 'nostrand', name: 'Nostrand Av · Bed-Stuy', hood: 'Bedford-Stuyvesant, Brooklyn',
    lg: 'ACE', lines: ['A','C'], genres: ['Hip-Hop','R&B'], eras: ['1990s–2000s','Today'],
    lat: 40.6814, lng: -73.9506,
    desc: 'Bedford-Stuyvesant — Bed-Stuy — is the largest Black neighborhood in New York and one of the most important addresses in hip-hop history. The brownstone blocks here have produced an improbable concentration of music royalty.',
    hist: 'Jay-Z grew up in the Marcy Projects just east of here. Lil\' Kim, Mos Def, and Talib Kweli all built careers out of this neighborhood\'s cultural energy. Bed-Stuy\'s blend of Caribbean influence and Black American tradition created music that is tough, melodic, and self-aware.',
    artists: ['Jay-Z','Lil\'Kim','Mos Def','Talib Kweli'], sid: '5ByAIlEEnxYdvpnezg7HTX' },

  { id: 'euclid', name: 'Euclid Av · East New York', hood: 'East New York, Brooklyn',
    lg: 'ACE', lines: ['A','C'], genres: ['Hip-Hop','Gospel'], eras: ['1990s–2000s','Today'],
    lat: 40.6754, lng: -73.8726,
    desc: 'East New York sits at the end of the A and C lines, a neighborhood where music happened without industry attention — church gospel, street rap, and the sound of communities that feel overlooked.',
    hist: 'East New York\'s large Caribbean and Black American communities created dense church music traditions. In the 2010s, the neighborhood became associated with Brooklyn drill, as artists like Bobby Shmurda emerged from its housing projects.',
    artists: ['Bobby Shmurda','GS9','East New York gospel choirs'], sid: '34gCuhDCsBUNnMs9QUMpWn' },

  // 4/5/6 ──────────────────────────────────────────────────────────────────────
  { id: '161st', name: '161 St · Yankee Stadium', hood: 'South Bronx',
    lg: '456', lines: ['4','B','D'], genres: ['Hip-Hop','Latin'], eras: ['1990s–2000s','Today'],
    lat: 40.8277, lng: -73.9254,
    desc: 'The stadium stop in the South Bronx sits at the intersection of baseball and hip-hop. The neighborhood around Yankee Stadium is the cultural heart of the Bronx, where Puerto Rican and Dominican communities built a musical identity distinct from anything in Manhattan.',
    hist: 'The South Bronx around 161st was ground zero for Latin hip-hop in the 1990s — Big Pun, Fat Joe, and the Terror Squad defined a sound harder, more bilingual, and more Bronx than anything before it. Reggaeton, which became the dominant Latin music of the 21st century, was incubated here.',
    artists: ['Big Pun','Fat Joe','Terror Squad','Remy Ma'], sid: '34gCuhDCsBUNnMs9QUMpWn' },

  { id: '86st', name: '86 St · Upper East Side', hood: 'Upper East Side, Manhattan',
    lg: '456', lines: ['4','5','6'], genres: ['Classical'], eras: ['1950s–60s','Today'],
    lat: 40.7794, lng: -73.9558,
    desc: 'The Upper East Side stretching south from 86th Street contains New York\'s greatest concentration of classical music institutions. The 92nd Street Y, just up the block, has been a premier chamber music venue since the 1930s.',
    hist: 'Carnegie Hall is barely a mile south, and the 92nd Street Y has hosted virtually every significant classical musician of the 20th century. This corridor from 86th to 57th Street is the axis around which New York\'s formal concert life has organized itself for a century.',
    artists: ['Isaac Stern','Itzhak Perlman','92nd Street Y performers'], sid: '72wT4EKOjhXCd3wCKOznBq' },

  { id: 'grandcentral', name: 'Grand Central · 42 St', hood: 'Midtown East, Manhattan',
    lg: '456', lines: ['4','5','6','7'], genres: ['Jazz','Big Band'], eras: ['Pre-1950','1950s–60s'],
    lat: 40.7527, lng: -73.9772,
    desc: 'Grand Central Terminal isn\'t just a transit hub — it\'s a cathedral, and it sounds like one. The neighborhood around it was the jazz industry\'s headquarters through the mid-century, housing the offices of every major American record label.',
    hist: 'RCA Victor, Columbia, Decca, Mercury — the blocks around Grand Central housed the commercial infrastructure of American popular music in the 1940s and 50s. Jazz musicians who recorded for those labels lived nearby in midtown hotels, creating a rich informal community.',
    artists: ['Duke Ellington','Benny Goodman','RCA Victor sessions'], sid: '3qP2n33FJTHB9T8FoZDHsp' },

  { id: 'astorpl', name: 'Astor Pl · East Village', hood: 'East Village, Manhattan',
    lg: '456', lines: ['6'], genres: ['Punk','Indie'], eras: ['1970s–80s','1990s–2000s'],
    lat: 40.7303, lng: -73.9913,
    desc: 'CBGB, on the Bowery two blocks from Astor Place, was the room where American alternative music was born. The East Village in the 1970s and 80s was the city\'s most charged musical laboratory.',
    hist: 'CBGB opened in 1973 and incubated punk and new wave: Television, Patti Smith, Blondie, the Ramones, Talking Heads. The East Village simultaneously hosted the no wave scene of Sonic Youth and Glenn Branca. This is the most important two-block radius in American rock history.',
    artists: ['Patti Smith','The Ramones','Talking Heads','Sonic Youth'], sid: '2rSdnRb6JHQZ8k7nkBtdE4' },

  // L ──────────────────────────────────────────────────────────────────────────
  { id: 'bedford', name: 'Bedford Av · Williamsburg', hood: 'Williamsburg, Brooklyn',
    lg: 'L', lines: ['L'], genres: ['Indie','Electronic'], eras: ['1990s–2000s','Today'],
    lat: 40.7141, lng: -73.9615,
    desc: 'For roughly a decade in the early 2000s, Bedford Avenue was the most culturally fertile street in American indie music. Cheap lofts and a critical mass of musicians fleeing the Village created a scene that defined indie rock at the turn of the millennium.',
    hist: 'The Williamsburg indie explosion produced an unlikely roster: LCD Soundsystem, Yeah Yeah Yeahs, Interpol, TV on the Radio, Grizzly Bear, Beirut — all within a square mile. The scene collapsed when rents caught up around 2010. What it left was one of the richest documents of a moment in American music.',
    artists: ['LCD Soundsystem','Interpol','Beirut','The National'], sid: '3YQKmKGau1PzlVlkL1iAx7' },

  { id: 'jefferson', name: 'Jefferson St · Bushwick', hood: 'Bushwick, Brooklyn',
    lg: 'L', lines: ['L'], genres: ['Electronic'], eras: ['Today'],
    lat: 40.7069, lng: -73.9226,
    desc: 'Bushwick absorbed Williamsburg\'s creative overflow when rents made Bedford Avenue unaffordable, transforming it into something rawer and more electronic. The warehouses near Jefferson Street host DIY venues that are the underground heart of New York\'s techno and experimental scenes.',
    hist: 'Bushwick\'s music scene emerged roughly 2008–2015, as musicians priced out of Williamsburg moved east. Bossa Nova Civic Club, Elsewhere, Market Hotel — hosting a more underground, European-influenced electronic sound. Nicolas Jaar and Oneohtrix Point Never built careers in these spaces.',
    artists: ['Nicolas Jaar','Oneohtrix Point Never','Pictureplane'], sid: '3YQKmKGau1PzlVlkL1iAx7' },

  { id: 'canarsie', name: 'Canarsie · Rockaway Pkwy', hood: 'Canarsie, Brooklyn',
    lg: 'L', lines: ['L'], genres: ['Gospel','Reggae'], eras: ['1970s–80s','Today'],
    lat: 40.6464, lng: -73.9013,
    desc: 'The end of the L line. Canarsie is a working-class neighborhood where music happened without industry attention — gospel in the churches, Caribbean sound systems in the parks, hip-hop in the community centers.',
    hist: 'Canarsie\'s large Caribbean-American population — Jamaican, Haitian, Trinidadian — has maintained sound system culture since the 1970s. The local gospel tradition, anchored in Baptist and Pentecostal churches, is one of the richest in Brooklyn, largely undocumented and entirely alive.',
    artists: ['Canarsie gospel choirs','Caribbean sound systems'], sid: '2NXpbx2JrBqsrtVuI7M7Gv' },

  // N/Q/R/W ────────────────────────────────────────────────────────────────────
  { id: 'astoria', name: 'Astoria-Ditmars Blvd · Queens', hood: 'Astoria, Queens',
    lg: 'NQRW', lines: ['N','W'], genres: ['World','Jazz'], eras: ['Pre-1950','1950s–60s','Today'],
    lat: 40.7757, lng: -73.9124,
    desc: 'Astoria\'s position at the northern tip of Queens gave it an identity distinct from the rest of the borough — more Mediterranean, more European, more connected to old-world musical traditions that New York\'s immigrant communities kept alive into the 20th century.',
    hist: 'Greek immigration to Astoria peaked between the 1950s and 1970s, making it the largest Greek population center outside of Greece and Cyprus. Greek folk music — rebetiko, laïká — flourished in clubs and restaurants. Astoria has since diversified enormously, holding Egyptian, Yemeni, and Korean communities, each with distinct musical traditions.',
    artists: ['Greek folk musicians','Rebetiko performers','Yemeni oud players'], sid: '5A7qlBaqlXJfMBhXbCRCmE' },

  { id: 'jacksonhts', name: '74 St · Jackson Heights', hood: 'Jackson Heights, Queens',
    lg: 'NQRW', lines: ['E','F','M','R','7'], genres: ['Latin','World'], eras: ['1970s–80s','1990s–2000s','Today'],
    lat: 40.7461, lng: -73.8913,
    desc: 'One square mile containing more languages, cuisines, and musical traditions than most countries. Jackson Heights is where Colombian cumbia plays next door to Bangladeshi film music, and a Mexican norteño band might share a corner with a Tibetan throat singer.',
    hist: 'Jackson Heights absorbed wave after wave of Latin American immigration through the 1970s–90s — Colombians, Ecuadorians, Mexicans — while simultaneously receiving large South Asian communities. The Roosevelt Avenue elevated train is the roof over an extraordinary musical convergence with no parallel in the United States.',
    artists: ['Andean folk musicians','Colombian cumbia bands','Punjabi bhangra groups'], sid: '5A7qlBaqlXJfMBhXbCRCmE' },

  { id: 'coneyisland', name: 'Coney Island · Stillwell Av', hood: 'Coney Island, Brooklyn',
    lg: 'NQRW', lines: ['D','F','N','Q'], genres: ['Brass','Folk'], eras: ['Pre-1950','1950s–60s'],
    lat: 40.5776, lng: -73.9810,
    desc: 'The end of the line and the beginning of the ocean. Coney Island has been New York\'s escape valve for over a century. Brass bands, carousel organs, and fairground noise: the sound of the city on vacation.',
    hist: 'Coney Island\'s musical history runs from the calliopes of the 1890s amusement parks to hot jazz at the beach hotels to rock and roll boardwalk shows of the 1950s. Its diversity — Russian, Caribbean, Chinese, and African American communities — makes it a microcosm of New York\'s wider musical plurality.',
    artists: ['The Coasters','Boardwalk brass bands','Brighton Beach Russian ensembles'], sid: '3AIJ0MlxNWiJONLAWiJgBz' },

  // 7 ──────────────────────────────────────────────────────────────────────────
  { id: 'flushing', name: 'Flushing · Main St', hood: 'Flushing, Queens',
    lg: '7', lines: ['7'], genres: ['World'], eras: ['1990s–2000s','Today'],
    lat: 40.7597, lng: -73.8300,
    desc: 'Flushing is the most cosmopolitan neighborhood in the most cosmopolitan city on earth — a dense crossroads where Chinese, Korean, Taiwanese, and South Asian communities have built a complete immigrant city within a city. Its music ranges from K-pop shops to Cantonese opera in the parks.',
    hist: 'Flushing\'s Cantonese and Mandarin communities maintain traditional music — erhu, pipa, guqin — in cultural centers and parks. Korean immigration brought K-pop culture and its supporting infrastructure: studios, fan clubs, academies. The Flushing Town Hall hosts world music from across Asia, Africa, and Latin America.',
    artists: ['Traditional Chinese ensembles','K-pop scene','Taiwanese folk musicians'], sid: '5A7qlBaqlXJfMBhXbCRCmE' },

  { id: 'woodside', name: '61 St · Woodside', hood: 'Woodside, Queens',
    lg: '7', lines: ['7'], genres: ['World','Folk'], eras: ['Pre-1950','1950s–60s','Today'],
    lat: 40.7461, lng: -73.9027,
    desc: 'Woodside holds the memory of two great immigrant musical traditions — Irish and Filipino — that arrived in different eras but both made this neighborhood a living archive for music that might otherwise have been lost.',
    hist: 'Woodside\'s Irish community dates to the early 20th century. The neighborhood\'s bars hosted traditional Irish music sessions every weekend for generations. When Filipino immigration began in the 1970s, Woodside absorbed another tradition: rondalla string ensembles, kundiman folk songs, and OPM pop.',
    artists: ['Woodside Irish session musicians','Filipino rondalla ensembles','OPM artists'], sid: '3vvvSoOL5yfCZJDPaCWBpE' },

  // B/D/F/M ────────────────────────────────────────────────────────────────────
  { id: 'rockefeller', name: '47–50 Sts · Rockefeller Center', hood: 'Midtown Manhattan',
    lg: 'BDFM', lines: ['B','D','F','M'], genres: ['Big Band','Jazz'], eras: ['Pre-1950','1950s–60s'],
    lat: 40.7589, lng: -73.9806,
    desc: 'Radio City Music Hall sits one block from this stop, and the mid-century history of American popular music runs through every direction. This is where NBC broadcast radio made stars, where big band orchestras played for national audiences.',
    hist: 'The area around Rockefeller Center was the capital of American broadcast music from the 1930s through the 1960s. NBC Radio and TV studios broadcast live big band performances to the entire country, creating national stars overnight. Benny Goodman, Tommy Dorsey, and Glenn Miller played these stages for tens of millions.',
    artists: ['Benny Goodman','Tommy Dorsey','Glenn Miller','Radio City Orchestra'], sid: '3qP2n33FJTHB9T8FoZDHsp' },

  { id: 'west4', name: 'West 4 St · Washington Sq', hood: 'Greenwich Village',
    lg: 'BDFM', lines: ['A','C','E','B','D','F','M'], genres: ['Folk','Jazz'], eras: ['1950s–60s','1970s–80s'],
    lat: 40.7323, lng: -74.0002,
    desc: 'West 4th Street deposits you at the edge of Washington Square Park — the outdoor stage for New York\'s folk revival. On any Sunday in the late 1950s and early 60s, dozens of musicians played in the park\'s fountain area, including a young Bob Dylan before he had a record deal.',
    hist: 'Washington Square Park\'s Sunday folk jams were a defining institution of the urban folk revival. The city tried to ban amplified music in 1961, sparking the "Washington Square Riot." Pete Seeger, Dave Van Ronk, and Rambling Jack Elliott all played here. The tradition continues today.',
    artists: ['Pete Seeger','Dave Van Ronk','Rambling Jack Elliott'], sid: '2rSdnRb6JHQZ8k7nkBtdE4' },

  { id: 'dekalb', name: 'DeKalb Av · Fort Greene', hood: 'Fort Greene / Clinton Hill, Brooklyn',
    lg: 'BDFM', lines: ['B','D','N','Q','R'], genres: ['Hip-Hop','R&B'], eras: ['1990s–2000s','Today'],
    lat: 40.6900, lng: -73.9817,
    desc: 'Fort Greene and Clinton Hill form one of Brooklyn\'s most historically significant Black neighborhoods, with a cultural life shaped by proximity to the Brooklyn Academy of Music and the street-level creativity of its communities.',
    hist: 'In the 1990s, Fort Greene became a hub for neo-soul and hip-hop — Mos Def was from right here, as was Talib Kweli. The area\'s creative energy attracted filmmakers, writers, and musicians who valued Brooklyn\'s scale and community over Manhattan\'s pace.',
    artists: ['Mos Def','Talib Kweli','Meshell Ndegeocello'], sid: '34gCuhDCsBUNnMs9QUMpWn' },

  { id: 'prospectpark', name: 'Prospect Park · B/Q', hood: 'Prospect Heights / Park Slope, Brooklyn',
    lg: 'BDFM', lines: ['B','Q'], genres: ['Folk','R&B','Gospel'], eras: ['1970s–80s','Today'],
    lat: 40.6613, lng: -73.9718,
    desc: 'The great green lung of Brooklyn and its outdoor concert hall. Prospect Park\'s Bandshell hosts Celebrate Brooklyn!, one of the oldest free outdoor music festivals in the country, drawing 200,000 attendees a year.',
    hist: 'Celebrate Brooklyn! began in 1979 as a response to the fiscal crisis and urban decay — a statement that culture could survive austerity. It has since grown into one of the city\'s most beloved institutions, presenting world music, jazz, hip-hop, indie, and gospel acts on a single stage all summer.',
    artists: ['Celebrate Brooklyn! performers','Yo-Yo Ma','Erykah Badu','Brooklyn Tabernacle Choir'], sid: '2NXpbx2JrBqsrtVuI7M7Gv' },

  { id: 'brightonbeach', name: 'Brighton Beach · Little Odessa', hood: 'Brighton Beach, Brooklyn',
    lg: 'BDFM', lines: ['B','Q'], genres: ['World'], eras: ['1970s–80s','1990s–2000s'],
    lat: 40.5780, lng: -73.9612,
    desc: '"Little Odessa" — a neighborhood of Russian and Ukrainian Jewish immigrants that has maintained one of the most distinct cultural identities in New York. Boardwalk restaurants host Russian chanson singers, beach clubs play Soviet-era pop, and community centers keep klezmer alive.',
    hist: 'Large-scale Russian Jewish immigration to Brighton Beach began in the 1970s. They brought klezmer, Russian chanson, Soviet bard songs, and the Odessa-style musical theater that had flourished before the revolution. By the 1980s, Brighton Beach had its own recording industry producing Russian-language music for the diaspora.',
    artists: ['Russian chanson performers','Brighton Beach klezmer bands','Soviet bard tradition'], sid: '3AIJ0MlxNWiJONLAWiJgBz' },

  // J/Z ────────────────────────────────────────────────────────────────────────
  { id: 'jamaicactr', name: 'Jamaica Center · Queens', hood: 'Jamaica, Queens',
    lg: 'JZ', lines: ['J','Z'], genres: ['Hip-Hop','R&B'], eras: ['1990s–2000s','Today'],
    lat: 40.7026, lng: -73.8074,
    desc: 'Jamaica, Queens has an outsized claim on the hip-hop genealogy. The streets around Jamaica Center produced several of rap\'s defining figures — 50 Cent grew up in South Jamaica — and contributed to the Queens tradition that includes Run-DMC and LL Cool J from nearby Hollis.',
    hist: 'Queens hip-hop has its own distinct character: more suburban, more aspirational, focused on escape and reinvention. Run-DMC from Hollis, LL Cool J from St. Albans, Nas from Queensbridge, 50 Cent from South Jamaica — the geography of Queens produced artists who shared a particular relationship to New York\'s promise and limitations.',
    artists: ['50 Cent','Run-DMC','LL Cool J'], sid: '34gCuhDCsBUNnMs9QUMpWn' },

  { id: 'marcyav', name: 'Marcy Av · Bed-Stuy', hood: 'Williamsburg / Bedford-Stuyvesant',
    lg: 'JZ', lines: ['J','M','Z'], genres: ['Hip-Hop'], eras: ['1990s–2000s','Today'],
    lat: 40.7083, lng: -73.9560,
    desc: 'The Marcy Houses are a NYCHA project that produced the most commercially successful rapper in history. Jay-Z — Shawn Carter — grew up in Marcy, and the projects\' address runs through his entire discography as both origin story and point of triumph.',
    hist: 'Jay-Z\'s relationship to the Marcy Projects is the defining narrative of his career. The Marcy Houses appear across his albums as both prison and origin. His ascent from Marcy to billionaire is the most dramatic individual story in hip-hop.',
    artists: ['Jay-Z','Memphis Bleek','Beanie Sigel','Freeway'], sid: '5ByAIlEEnxYdvpnezg7HTX' },

  { id: 'broadwayjxn', name: 'Broadway Junction · East New York', hood: 'East New York / Bushwick, Brooklyn',
    lg: 'JZ', lines: ['A','C','J','L','Z'], genres: ['Hip-Hop','Electronic'], eras: ['1990s–2000s','Today'],
    lat: 40.6784, lng: -73.9053,
    desc: 'Broadway Junction is one of the most chaotic transit intersections in New York — four elevated lines converging in a neighborhood that rarely gets written about in cultural terms. But East New York and Bushwick have been formative for both hip-hop and Brooklyn\'s electronic underground.',
    hist: 'Broadway Junction sits at the border of East New York and Bushwick, two neighborhoods shaped by the same forces: poverty, isolation, and a creativity that operates below the media\'s radar. The J/Z corridor threads a particular kind of working-class New York hip-hop that rarely gets the documentation it deserves.',
    artists: ['Bobby Shmurda','GS9','Bushwick DIY artists'], sid: '34gCuhDCsBUNnMs9QUMpWn' },

  // G ──────────────────────────────────────────────────────────────────────────
  { id: 'courtsq', name: 'Court Sq · Long Island City', hood: 'Long Island City, Queens',
    lg: 'G', lines: ['E','G','M','7'], genres: ['Electronic','Indie'], eras: ['Today'],
    lat: 40.7470, lng: -73.9455,
    desc: 'Long Island City, just across the East River from Midtown, has transformed from an industrial wasteland into one of New York\'s most vibrant arts districts. PS1\'s Warm Up summer concert series has been a consistent showcase for underground electronic and experimental music since 1997.',
    hist: 'PS1\'s Warm Up series became one of New York\'s defining music events — a Saturday afternoon party in a concrete courtyard showcasing artists from DFA Records, Planet Mu, and hundreds of independent electronic labels. The series launched careers, defined sounds, and put Long Island City on the global underground music map.',
    artists: ['PS1 Warm Up performers','DFA Records artists','Kelela'], sid: '3YQKmKGau1PzlVlkL1iAx7' },

  { id: 'bednosG', name: 'Bedford/Nostrand Avs (G)', hood: 'Bedford-Stuyvesant / Crown Heights',
    lg: 'G', lines: ['G'], genres: ['Indie','R&B','Gospel'], eras: ['1990s–2000s','Today'],
    lat: 40.6896, lng: -73.9563,
    desc: 'The G train\'s Bedford/Nostrand stop sits in the heart of Bed-Stuy, surrounded by brownstones housing one of Brooklyn\'s most active independent music communities — where the legacy hip-hop tradition and a newer indie scene coexist block by block.',
    hist: 'Bed-Stuy\'s music scene runs on two parallel tracks: the legacy tradition rooted in its Black American community, and the indie/experimental scene that arrived with gentrification\'s overflow from Fort Greene. Gospel from a church and a noise band in a basement studio can coexist within a single block.',
    artists: ['Flatbush Zombies','Bed-Stuy gospel choirs','Independent Brooklyn producers'], sid: '5ByAIlEEnxYdvpnezg7HTX' },

  { id: 'smith9', name: 'Smith–9 Sts · Gowanus', hood: 'Gowanus / Red Hook, Brooklyn',
    lg: 'G', lines: ['F','G'], genres: ['Electronic','Indie'], eras: ['1990s–2000s','Today'],
    lat: 40.6741, lng: -73.9964,
    desc: 'The highest elevated subway station in New York, with a panoramic view over Gowanus and Red Hook — two neighborhoods that became crucibles for underground music. The industrial landscape has spawned DIY venues and music spaces that operate entirely outside conventional industry.',
    hist: 'Red Hook and Gowanus attracted artists in the 1990s for the same reason Tribeca attracted them in the 1970s: enormous cheap spaces and distance from gentrification. The Bell House anchors a DIY tradition tracing back to the early 2000s.',
    artists: ['The Bell House performers','Gowanus studio musicians','Red Hook experimental artists'], sid: '3YQKmKGau1PzlVlkL1iAx7' },
];

// ── ROUTE ORDER FOR POLYLINES ─────────────────────────────────────────────────
const ROUTES = {
  '123':  ['riverdale','grandconcourse','135th','125th','columbia','96th','72nd','timessq','14th','christopher','chambers','southferry','atlantic','franklin','flatbush'],
  'ACE':  ['207st','145st','canalace','jayst','nostrand','euclid'],
  '456':  ['161st','86st','grandcentral','astorpl'],
  'L':    ['bedford','jefferson','canarsie'],
  'NQRW': ['astoria','jacksonhts','coneyisland'],
  'BDFM': ['rockefeller','west4','dekalb','prospectpark','brightonbeach'],
  '7':    ['flushing','woodside'],
  'JZ':   ['jamaicactr','broadwayjxn','marcyav'],
  'G':    ['courtsq','bednosG','smith9'],
};

// ── STATE ─────────────────────────────────────────────────────────────────────
const byId = {};
S.forEach(s => byId[s.id] = s);

let sel = null, activeEl = null;
let jActive = false, jPaused = false, jIdx = 0, jTimer = null;
let gf = '', ef = '';
const activeLines = new Set(Object.keys(LM));
const JDUR = 9000;

function getFiltered() {
  return S.filter(s =>
    activeLines.has(s.lg) &&
    (!gf || s.genres.includes(gf)) &&
    (!ef || s.eras.includes(ef))
  );
}

// ── MAP ───────────────────────────────────────────────────────────────────────
const map = L.map('map', { center: [40.72, -73.95], zoom: 11, zoomControl: false, attributionControl: true });
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 19, subdomains: 'abcd',
  attribution: '© <a href="https://carto.com/">Carto</a> © <a href="https://openstreetmap.org/">OSM</a>'
}).addTo(map);
L.control.zoom({ position: 'bottomleft' }).addTo(map);
setTimeout(() => map.invalidateSize(), 300);

// ── POLYLINES ─────────────────────────────────────────────────────────────────
const polylines = {};
Object.entries(ROUTES).forEach(([lg, ids]) => {
  const coords = ids.map(id => byId[id]).filter(Boolean).map(s => [s.lat, s.lng]);
  polylines[lg] = L.polyline(coords, {
    color: LM[lg].color, weight: 3.5, opacity: .78, lineCap: 'round', lineJoin: 'round'
  }).addTo(map);
});

// ── MARKERS ───────────────────────────────────────────────────────────────────
const dots = {};
S.forEach(s => {
  const icon = L.divIcon({
    className: '',
    html: `<div class="sdot" style="background:${LM[s.lg].color};border:2.5px solid rgba(255,255,255,.92);width:12px;height:12px"></div>`,
    iconSize: [12, 12], iconAnchor: [6, 6]
  });
  const m = L.marker([s.lat, s.lng], { icon }).addTo(map)
    .bindTooltip(s.name, { direction: 'top', offset: [0, -10] });
  m.on('click', () => pick(s));
  dots[s.id] = m;
});

// ── PICK / PANEL ──────────────────────────────────────────────────────────────
function pick(s) {
  sel = s;
  if (activeEl) { activeEl.style.transform = ''; activeEl.style.boxShadow = ''; }
  const el = dots[s.id].getElement()?.querySelector('.sdot');
  if (el) {
    el.style.transform = 'scale(1.65)';
    el.style.boxShadow = `0 0 0 5px ${LM[s.lg].color}33`;
    activeEl = el;
  }
  map.flyTo([s.lat, s.lng], 14, { duration: 1.1 });
  renderPanel(s);
  document.getElementById('empty').style.display = 'none';
  document.getElementById('panel').classList.add('open');
}

function renderPanel(s) {
  const lm = LM[s.lg];
  document.getElementById('pname').textContent = s.name;
  document.getElementById('pbadges').innerHTML =
    s.lines.map(l => `<span class="bl" style="background:${lm.color};color:${lm.tc}">${l}</span>`).join('') +
    s.genres.map(g => `<span class="bg">${g}</span>`).join('') +
    `<span class="be">${s.eras[0]}</span>`;
  document.getElementById('pbody').innerHTML = `
    <div class="sl">Neighborhood</div>
    <div class="st">${s.desc}</div>
    <div class="sl">Genre History</div>
    <div class="st">${s.hist}</div>
    <div class="sl">Defining Artists</div>
    <div class="ats">${s.artists.map(a => `<span class="ac">${a}</span>`).join('')}</div>
    <div class="sl">Listen</div>
    <div class="sw"><iframe src="https://open.spotify.com/embed/track/${s.sid}?utm_source=generator&theme=0"
      height="80" allow="autoplay;clipboard-write;encrypted-media;fullscreen;picture-in-picture" loading="lazy"></iframe></div>`;
}

document.getElementById('xbtn').addEventListener('click', () => {
  document.getElementById('panel').classList.remove('open');
  document.getElementById('empty').style.display = 'flex';
  if (activeEl) { activeEl.style.transform = ''; activeEl.style.boxShadow = ''; activeEl = null; }
  sel = null;
});

// ── LINE FILTER BAR ───────────────────────────────────────────────────────────
const linebar = document.getElementById('linebar');
Object.entries(LM).forEach(([key, meta]) => {
  const btn = document.createElement('button');
  btn.className = 'lg-btn';
  btn.dataset.lg = key;
  btn.innerHTML =
    meta.letters.map(l => `<span class="lc" style="background:${meta.color};color:${meta.tc}">${l}</span>`).join('') +
    `<span class="lg-name">${meta.name}</span>`;
  btn.addEventListener('click', () => toggleLine(key, btn));
  linebar.appendChild(btn);
});

function toggleLine(key, btn) {
  if (activeLines.has(key)) {
    if (activeLines.size === 1) return;
    activeLines.delete(key);
    btn.classList.add('off');
    polylines[key]?.setStyle({ opacity: 0 });
  } else {
    activeLines.add(key);
    btn.classList.remove('off');
    polylines[key]?.setStyle({ opacity: .78, color: LM[key].color });
  }
  updateDots();
}

// ── GENRE / ERA FILTERS ───────────────────────────────────────────────────────
document.getElementById('gf').addEventListener('change', e => { gf = e.target.value; updateDots(); });
document.getElementById('ef').addEventListener('change', e => { ef = e.target.value; updateDots(); });

function updateDots() {
  const ok = new Set(getFiltered().map(s => s.id));
  S.forEach(s => {
    const el = dots[s.id].getElement()?.querySelector('.sdot');
    if (el) el.classList.toggle('dim', !ok.has(s.id));
  });
}

// ── JOURNEY ───────────────────────────────────────────────────────────────────
const jbtn = document.getElementById('jbtn');
jbtn.addEventListener('click', () => jActive ? endJourney() : startJourney());

function startJourney() {
  const f = getFiltered(); if (!f.length) return;
  jActive = true; jPaused = false; jIdx = 0;
  jbtn.textContent = '✕ End Journey';
  document.getElementById('jc').classList.add('on');
  document.getElementById('jplay').textContent = '⏸ Pause';
  goTo(f, 0);
}

function goTo(f, i) {
  pick(f[i]);
  document.getElementById('jlbl').textContent = `${i + 1} / ${f.length}`;
  document.getElementById('pfill').style.width = `${((i + 1) / f.length) * 100}%`;
  const jbar = document.getElementById('jbar');
  jbar.textContent = `${i + 1} / ${f.length} — ${f[i].name}`;
  jbar.classList.add('on');
  clearTimeout(jTimer);
  if (!jPaused) jTimer = setTimeout(() => {
    if (i + 1 < f.length) { jIdx = i + 1; goTo(f, jIdx); } else endJourney();
  }, JDUR);
}

document.getElementById('jplay').addEventListener('click', () => {
  const f = getFiltered();
  if (jPaused) {
    jPaused = false;
    document.getElementById('jplay').textContent = '⏸ Pause';
    jTimer = setTimeout(() => { if (jIdx + 1 < f.length) { jIdx++; goTo(f, jIdx); } else endJourney(); }, JDUR);
  } else {
    jPaused = true;
    document.getElementById('jplay').textContent = '▶ Play';
    clearTimeout(jTimer);
  }
});

document.getElementById('jprev').addEventListener('click', () => {
  const f = getFiltered(); clearTimeout(jTimer);
  if (jIdx > 0) { jIdx--; goTo(f, jIdx); }
});

document.getElementById('jnext').addEventListener('click', () => {
  const f = getFiltered(); clearTimeout(jTimer);
  if (jIdx < f.length - 1) { jIdx++; goTo(f, jIdx); } else endJourney();
});

function endJourney() {
  jActive = false; jPaused = false; clearTimeout(jTimer);
  jbtn.textContent = '▶ Start Journey';
  document.getElementById('jc').classList.remove('on');
  document.getElementById('jbar').classList.remove('on');
}

// ── HEIGHT FIX ────────────────────────────────────────────────────────────────
function fixHeight() {
  const h = document.getElementById('hdr').offsetHeight + document.getElementById('linebar').offsetHeight;
  document.getElementById('main').style.height = (window.innerHeight - h) + 'px';
}
fixHeight();
window.addEventListener('resize', () => { fixHeight(); map.invalidateSize(); });
