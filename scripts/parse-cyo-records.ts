/**
 * Script to parse CYO Track & Field Records from PDF data into JSON format
 */

interface Record {
  event: string;
  name: string;
  school: string;
  result: string;
  year: number;
}

interface GradeClassRecords {
  grade: string;
  class: string;
  events: Record[];
}

interface CYORecords {
  gender: 'boys' | 'girls';
  year: number;
  records: GradeClassRecords[];
}

// Boys records data
const boysRecords: CYORecords = {
  gender: 'boys',
  year: 2025,
  records: [
    {
      grade: '5th',
      class: 'A',
      events: [
        { event: '60 Meters', name: 'C. Steinlage', school: 'St. Paul', result: '8.60', year: 2022 },
        { event: '400 Meter Relay', name: 'Fiarkoski, Neenan, Dubinsky, Wright', school: 'St. Agnes', result: '1:02.29', year: 2016 },
        { event: '800 Meters', name: 'Vohs', school: 'Holy Rosary Wea', result: '2:42.67', year: 2019 },
        { event: '100 Meters', name: 'U. NAB', school: 'Holy Rosary Wea', result: '14.66', year: 2025 },
        { event: '400 Meters', name: 'C. MCGINNIS', school: 'Corpus Christi', result: '1:10.49', year: 2025 },
        { event: '200 Meters', name: 'M. Toner', school: 'St. John the Evangelist', result: '31.42', year: 2024 },
        { event: '120 Meters', name: 'J. Guetterman', school: 'Holy Rosary Wea', result: '17.83', year: 2021 },
        { event: 'Long Jump', name: 'J. SNELL', school: 'St. Paul', result: '13\' 6 3/4"', year: 2025 },
        { event: 'Shot Put', name: 'J. Guetterman', school: 'Holy Rosary Wea', result: '27\' 1"', year: 2021 },
        { event: 'Football Throw', name: 'C. Steinlage', school: 'St. Paul', result: '103\' 4"', year: 2022 },
        { event: '1600 Meters', name: 'L. Trausch', school: 'Holy Cross', result: '6:31.63', year: 2024 },
        { event: 'Dist. Med. Relay', name: 'K. Thomas, U. Nab, H. Martin, R. Wanjigi', school: 'Holy Rosary Wea', result: '2:22.58', year: 2025 },
        { event: 'High Jump', name: 'U. NAB', school: 'Holy Rosary Wea', result: '4\' 0"', year: 2025 },
      ]
    },
    {
      grade: '6th',
      class: 'A',
      events: [
        { event: '60 Meters', name: 'A. House', school: 'John Paull II', result: '8.02', year: 2022 },
        { event: '400 Meters', name: 'Keathley-Helms', school: 'Corpus Christi', result: '1:02.74', year: 2016 },
        { event: '800 Meters', name: 'Keathley-Helms', school: 'Corpus Christi', result: '2:33.83', year: 2016 },
        { event: '1600 Meters', name: 'Keathley-Helms', school: 'Corpus Christi', result: '5:38.34', year: 2016 },
        { event: '100 Meters', name: 'D. Blettner', school: 'Corpus Christi', result: '13.47', year: 2024 },
        { event: '200 Meters', name: 'J. Barr', school: 'St. John the Evangelist', result: '29.54', year: 2024 },
        { event: 'Medley Relay', name: 'S. Bateman, E. Halferty, B. Scott, D. Engelken', school: 'Corpus Christi', result: '1:01.70', year: 2023 },
        { event: '120 Meters', name: 'M. Lukert', school: 'St. Ann', result: '19', year: 2022 },
        { event: 'High Jump', name: 'A. House', school: 'John Paull II', result: '4\' 4"', year: 2022 },
        { event: 'High Jump', name: 'P. PEARCE', school: 'St. Ann', result: '4\' 4"', year: 2025 },
        { event: 'Long Jump', name: 'C. Reyes', school: 'Good Shepherd', result: '14\' 10\'\'', year: 2024 },
        { event: 'Shot Put', name: 'O. McGinnis', school: 'Corpus Christi', result: '32\' 3"', year: 2023 },
        { event: 'Football Throw', name: 'M. Bauer', school: 'Holy Rosary Wea', result: '94\' 6"', year: 2021 },
        { event: 'Dist. Med Relay', name: 'D. Calixto Morales, T. Skillman, K. Ramos, J. McLenon', school: 'Holy Cross', result: '2:23.45', year: 2024 },
        { event: '400 Meter Relay', name: 'No Names Listed', school: 'St. Ann', result: '58.86', year: 2025 },
      ]
    },
    {
      grade: '7th',
      class: 'A',
      events: [
        { event: '400 Meters', name: 'Keathley-Helms', school: 'Corpus Christi', result: '1:00.71', year: 2017 },
        { event: '800 Meters', name: 'Keathley-Helms', school: 'Corpus Christi', result: '2:22.86', year: 2017 },
        { event: '1600 Meters', name: 'Keathley-Helms', school: 'Corpus Christi', result: '5:04.05', year: 2017 },
        { event: '100 Meters', name: 'D. BLETTNER', school: 'Corpus Christi', result: '12.52', year: 2025 },
        { event: '60 Meters', name: 'P. Sexton', school: 'St. Ann', result: '8.02', year: 2022 },
        { event: '200 Meters', name: 'D. BLETTNER', school: 'Corpus Christi', result: '26.09', year: 2025 },
        { event: 'Medley Relay', name: 'Scott, Bateman, Halferty, Baldwin', school: 'Corpus Christi', result: '56.65', year: 2024 },
        { event: '120 Meters', name: 'B. Wondra', school: 'Corpus Christi', result: '17.42', year: 2022 },
        { event: 'High Jump', name: 'A. House', school: 'John Paul II', result: '5\'0"', year: 2023 },
        { event: 'Long Jump', name: 'A. Bowles', school: 'St. Paul', result: '15\' 7 1/2\'\'', year: 2024 },
        { event: 'Shot Put', name: 'C. WONDRA', school: 'Corpus Christi', result: '34\' 4\'\'', year: 2025 },
        { event: 'Football Throw', name: 'C. Schneider', school: 'Holy Rosary Wea', result: '147\' 7"', year: 2022 },
        { event: 'Dist. Med. Relay', name: 'R. Mulhern, N. Palmer, O. Schwartz, T. Urban', school: 'St. John the Evangelist', result: '2:07.16', year: 2022 },
        { event: '400 Meter Relay', name: 'X. Schreiner Cintron, L. Cronin, I. Baca, A. House', school: 'John Paul II', result: '56.04', year: 2023 },
      ]
    },
    {
      grade: '8th',
      class: 'A',
      events: [
        { event: '60 Meters', name: 'Barberena', school: 'Corpus Christi', result: '7.53', year: 2017 },
        { event: '100 Meters', name: 'A. BOWLES', school: 'St. Paul', result: '11.89', year: 2025 },
        { event: '200 Meters', name: 'A. House', school: 'John Paul II', result: '24.64', year: 2024 },
        { event: '400 Meters', name: 'S. BATEMAN', school: 'Corpus Christi', result: '57.14', year: 2025 },
        { event: '800 Meters', name: 'B. Vohs', school: 'Holy Rosary Wea', result: '2:17.39', year: 2022 },
        { event: '400 Meter Relay', name: 'E. Halferty, B. Scott, O. McGinnis, S. Bateman', school: 'Corpus Christi', result: '51.38', year: 2025 },
        { event: '1600 Meters', name: 'J. Keathley-Helms', school: 'Corpus Christi', result: '4:53.83', year: 2018 },
        { event: 'High Jump', name: 'C. STEINLAGE', school: 'St. Paul', result: '5\' 4"', year: 2025 },
        { event: 'Long Jump', name: 'A. BOWLES', school: 'St. Paul', result: '17\' 3 1/2"', year: 2025 },
        { event: 'Football Throw', name: 'C. Schneider', school: 'Holy Rosary Wea', result: '173\' 4"', year: 2023 },
        { event: 'Dist. Med. Relay', name: 'T. Urban, N. Palmer, R.Mulhern, O. Schwartz', school: 'St. John the Evangelist', result: '1:54.36', year: 2023 },
        { event: '120 Meters', name: 'H. Morgan', school: 'John Paul II', result: '16.63', year: 2022 },
        { event: 'Shot Put', name: 'O. MCGINNIS', school: 'Corpus Christi', result: '39\' 5"', year: 2025 },
        { event: 'Medley Relay', name: 'E. Halferty, B. Scott, D. Engelken, S. Bateman', school: 'Corpus Christi', result: '53.78', year: 2025 },
      ]
    },
    {
      grade: '5th',
      class: 'AA',
      events: [
        { event: 'Football Throw', name: 'Downing', school: 'Good Shepherd', result: '129\' 9"', year: 2009 },
        { event: 'Shot Put (6 lbs.)', name: 'B. DAVIS', school: 'St. Joseph', result: '34\' 8 1/2"', year: 2025 },
        { event: 'Long Jump', name: 'Rusconi', school: 'St. Ann', result: '14\' 11"', year: 1979 },
        { event: 'High Jump', name: 'Terrell', school: 'Sacred Heart', result: '4\' 9"', year: 2012 },
        { event: '1600 Meters', name: 'Kane', school: 'Holy Spirit', result: '5:48.96', year: 2004 },
        { event: '100 Meters', name: 'Ianni', school: 'St. Ann', result: '13.30', year: 2014 },
        { event: 'Dist. Med. Relay', name: 'McNellis, Moss, Schmidt, Salisbury', school: 'Prince of Peace', result: '2:15.53', year: 2007 },
        { event: '60 Meters', name: 'Terrell', school: 'Sacred Heart', result: '8.32', year: 2012 },
        { event: '400 Meters', name: 'Lucas', school: 'St. Ann', result: '1:04.42', year: 2016 },
        { event: '200 Meters', name: 'Morgan Puno', school: 'Prince of Peace', result: '28.16', year: 2018 },
        { event: 'Medley Relay', name: 'Bouler, Geha, Goodwin, Marler', school: 'Ascension', result: '1:03.62', year: 2003 },
        { event: '800 Meters', name: 'Magness', school: 'Ascension', result: '2:37.72', year: 2002 },
        { event: '120 Meters', name: 'Morgan Puno', school: 'Prince of Peace', result: '16.42', year: 2018 },
        { event: '400 Meter Relay', name: 'C. Mereghetti, N. Rosengren, H. Schonrock, I. Seefeldt', school: 'Ascension', result: '1:00.7', year: 2024 },
      ]
    },
    {
      grade: '6th',
      class: 'AA',
      events: [
        { event: 'Football Throw', name: 'Downing', school: 'Good Shepherd', result: '152\' 1"', year: 2010 },
        { event: 'Shot Put (6 lbs.)', name: 'Pavlich', school: 'St. Joseph', result: '39\' 8 1/2"', year: 1991 },
        { event: 'Shot Put (6 lbs.)', name: 'Culp', school: 'St. Joseph', result: '39\' 8 1/2"', year: 1992 },
        { event: 'Long Jump', name: 'Puno, Morgan', school: 'Prince of Peace', result: '16\' 9"', year: 2019 },
        { event: 'High Jump', name: 'Streeter', school: 'Sacred Heart', result: '5\' 1.00"', year: 2011 },
        { event: '1600 Meters', name: 'Mullen', school: 'Good Shepherd', result: '5:35.15', year: 2015 },
        { event: '100 Meters', name: 'Ramaekers', school: 'Good Shepherd', result: '12.78', year: 2010 },
        { event: 'Dist. Med. Relay', name: 'Zych, Suman, Lopez-Bormann, Mechler', school: 'Sacred Heart', result: '2:08.8', year: 2009 },
        { event: '60 Meters', name: 'Puno, Morgan', school: 'Prince of Peace', result: '7.85', year: 2019 },
        { event: '400 Meters', name: 'Barbour', school: 'Good Shepherd', result: '1:02.86', year: 2007 },
        { event: '200 Meters', name: 'Puno, Morgan', school: 'Prince of Peace', result: '27.29', year: 2019 },
        { event: 'Medley Relay', name: 'Wiley, Tritz, Wurtenburger, Richlin', school: 'Prince of Peace', result: '59.52', year: 2021 },
        { event: '800 Meters', name: 'Glatt', school: 'Holy Spirit', result: '2:35.61', year: 2002 },
        { event: '120 Meters', name: 'Kaifes', school: 'Sacred Heart', result: '16.06', year: 2011 },
        { event: '400 Meter Relay', name: 'Vanice, Doolittle, Staker, Warner', school: 'St. Ann', result: '57.26', year: 2016 },
      ]
    },
    {
      grade: '7th',
      class: 'AA',
      events: [
        { event: 'Football Throw', name: 'Downing', school: 'Good Shepherd', result: '162\' 4"', year: 2014 },
        { event: 'Shot Put (8 lbs.)', name: 'Chris Ellis', school: 'Holy Cross', result: '40\' 5"', year: 2005 },
        { event: 'Long Jump', name: 'Davila', school: 'St. Joseph', result: '17\' 6"', year: 1981 },
        { event: 'High Jump', name: 'Ramaekers', school: 'Good Shepherd', result: '5\' 8"', year: 2011 },
        { event: '1600 Meters', name: 'Hubbell', school: 'Holy Spirit', result: '5:17.45', year: 2017 },
        { event: '100 Meters', name: 'Ramaekers', school: 'Good Shepherd', result: '11.81', year: 2011 },
        { event: 'Dist. Med. Relay', name: 'Crank, Morrissey, Cahill, Gallagher', school: 'Holy Spirit', result: '1:58.89', year: 2015 },
        { event: '60 Meters', name: 'C. Kaufman', school: 'Prince of Peace', result: '7.42', year: 2022 },
        { event: '400 Meters', name: 'Hansen', school: 'NAT/SMA', result: '57.79', year: 2019 },
        { event: '200 Meters', name: 'Berger', school: 'Prince of Peace', result: '25.84', year: 2004 },
        { event: 'Medley Relay', name: 'J. Wenger, B. Tritz, H. Wiley, B. Hills', school: 'Prince of Peace', result: '55.55', year: 2022 },
        { event: '800 Meters', name: 'Nelson', school: 'St. Ann', result: '2:26.60', year: 2013 },
        { event: '120 Meters', name: 'Eisenberg', school: 'Holy Cross', result: '15.01', year: 2011 },
        { event: '400 Meter Relay', name: 'G. Duran, G. Richlin, B. Hills, C. Kaufman', school: 'Prince of Peace', result: '50.91', year: 2022 },
      ]
    },
    {
      grade: '8th',
      class: 'AA',
      events: [
        { event: 'Football Throw', name: 'Downing', school: 'Good Shepherd', result: '193\'', year: 2012 },
        { event: 'Shot Put (8 lbs.)', name: 'Culp', school: 'St. Joseph', result: '48\' 2 1/2"', year: 1994 },
        { event: 'Long Jump', name: 'Nelson', school: 'Holy Spirit', result: '20\' 0"', year: 2005 },
        { event: 'High Jump', name: 'Lewis', school: 'St. Ann', result: '6\' 0"', year: 2004 },
        { event: 'High Jump', name: 'Mann', school: 'Holy Cross', result: '6\' 0"', year: 2004 },
        { event: '1600 Meters', name: 'Williams', school: 'St. Agnes', result: '4:54.17', year: 2017 },
        { event: '100 Meters', name: 'Ramaekers', school: 'Good Shepherd', result: '11.68', year: 2012 },
        { event: 'Dist. Med. Relay', name: 'Cardador, Roberts, O\'Connor, Latenzer', school: 'St. Agnes', result: '1:53.68', year: 2024 },
        { event: '60 Meters', name: 'Kendrick', school: 'St. Joseph', result: '7.18', year: 2016 },
        { event: '400 Meters', name: 'Quinn', school: 'Holy Spirit', result: '56.47', year: 2004 },
        { event: '200 Meters', name: 'Berger', school: 'Prince of Peace', result: '24.02', year: 2005 },
        { event: 'Medley Relay', name: 'Madrigal, Truong, Mulvany, Camacho', school: 'St. Agnes', result: '51.82', year: 2001 },
        { event: '800 Meters', name: 'Barbour', school: 'Good Shepherd', result: '2:15.87', year: 2009 },
        { event: '120 Meters', name: 'Hill', school: 'St. Ann', result: '14.63', year: 2011 },
        { event: '400 Meter Relay', name: 'Schupp, Borquin, Bourquin, Nelson', school: 'Holy Spirit', result: '50.49', year: 2005 },
      ]
    },
    {
      grade: '5th',
      class: 'AAA',
      events: [
        { event: 'Football Throw', name: 'Kirby', school: 'Prince of Peace', result: '125\' 0"', year: 2014 },
        { event: 'Shot Put (6 lbs.)', name: 'Steilen', school: 'Cure of Ars', result: '32\' 5"', year: 2000 },
        { event: 'Long Jump', name: 'Kelly', school: 'Prince of Peace', result: '14\' 7 1/2"', year: 2003 },
        { event: 'High Jump', name: 'Barnthouse', school: 'Nativity', result: '4\' 11"', year: 2000 },
        { event: 'High Jump', name: 'Steilen', school: 'Cure of Ars', result: '4\' 11"', year: 2000 },
        { event: '1600 Meters', name: 'Wilkins', school: 'Cure of Ars', result: '5:38.85', year: 2004 },
        { event: '100 Meters', name: 'Jack Pace', school: 'St. Joseph', result: '13.77', year: 2017 },
        { event: 'Dist. Med. Relay', name: 'Melchior, Burns, Goodeyon, McElroy', school: 'Prince of Peace', result: '2:12:64', year: 2012 },
        { event: '60 Meters', name: 'Reed', school: 'Cure of Ars', result: '8.35', year: 2004 },
        { event: '400 Meters', name: 'Casey', school: 'Holy Spirit', result: '1:06.20', year: 1998 },
        { event: '200 Meters', name: 'Casey', school: 'Holy Spirit', result: '28.70', year: 1998 },
        { event: 'Medley Relay', name: 'Lewis, Hurla, Fredrick, Lysaught', school: 'St. Joseph', result: '1:02.52', year: 1999 },
        { event: '800 Meters', name: 'G. Barkemeyer', school: 'Prince of Peace', result: '2:40.32', year: 2024 },
        { event: '120 Meters', name: 'Heppner', school: 'Prince of Peace', result: '16.56', year: 2015 },
        { event: '400 Meter Relay', name: 'Stalp, Herbic, Kisgen, Kelly', school: 'Prince of Peace', result: '59.32', year: 2010 },
      ]
    },
    {
      grade: '6th',
      class: 'AAA',
      events: [
        { event: 'Football Throw', name: 'Smrt', school: 'Holy Trinity', result: '138\' 8"', year: 2014 },
        { event: 'Shot Put (6 lbs.)', name: 'Kirkman', school: 'Cure of Ars', result: '41\' 0"', year: 2000 },
        { event: 'Long Jump', name: 'Ballard', school: 'Cure of Ars', result: '16\' 8"', year: 2001 },
        { event: 'High Jump', name: 'Hollis', school: 'Cure of Ars', result: '5\' 3"', year: 2011 },
        { event: '1600 Meters', name: 'G. BARKEMEYER', school: 'Prince of Peace', result: '5:29.07', year: 2025 },
        { event: '100 Meters', name: 'Shuss', school: 'Cure of Ars', result: '12.66', year: 2003 },
        { event: 'Dist. Med. Relay', name: 'McCue, Moss, Schmidt, McNellis', school: 'Prince of Peace', result: '2:05.06', year: 2008 },
        { event: '60 Meters', name: 'Reed', school: 'St. Joseph', result: '7.79', year: 2005 },
        { event: '400 Meters', name: 'Lombardo', school: 'Nativity', result: '1:01.82', year: 2007 },
        { event: '200 Meters', name: 'Kelly', school: 'Prince of Peace', result: '26.82', year: 2011 },
        { event: 'Medley Relay', name: 'White, Younger, Barr, Leikem', school: 'Ascension', result: '58.03', year: 2010 },
        { event: '800 Meters', name: 'Lombardo', school: 'Nativity', result: '2:18.03', year: 2007 },
        { event: '120 Meters', name: 'Shuss', school: 'Cure of Ars', result: '14.97', year: 2003 },
        { event: '400 Meter Relay', name: 'J. Dreiling, T. Tumberger, G. Harper and L. Sapp', school: 'Holy Trinity', result: '55.65', year: 2024 },
      ]
    },
    {
      grade: '7th',
      class: 'AAA',
      events: [
        { event: 'Football Throw', name: 'R. Jackson', school: 'St. Joseph', result: '154\' 1"', year: 2022 },
        { event: 'Shot Put (8 lbs.)', name: 'Charles', school: 'Holy Trinity', result: '41\' 5"', year: 2005 },
        { event: 'Long Jump', name: 'S. RICHLIN', school: 'Prince of Peace', result: '16\' 11 1/2"', year: 2025 },
        { event: 'High Jump', name: 'Stellen', school: 'Cure of Ars', result: '5\' 8"', year: 2002 },
        { event: '1600 Meters', name: 'Embry', school: 'Nativity', result: '5:08.21', year: 2010 },
        { event: '100 Meters', name: 'Shuss', school: 'Cure of Ars', result: '11.70', year: 2004 },
        { event: 'Dist. Med. Relay', name: 'Accurso, N. , Accurso, D., Tassett, Miller', school: 'Nativity', result: '1:55.00', year: 2011 },
        { event: '60 Meters', name: 'Shuss', school: 'Cure of Ars', result: '7.35', year: 2004 },
        { event: '400 Meters', name: 'L. Cole', school: 'St. Agnes', result: '59.14', year: 2022 },
        { event: '200 Meters', name: 'L. SAPP', school: 'Holy Trinity', result: '25.10', year: 2025 },
        { event: 'Medley Relay', name: 'Jaworski, Gorczyca, Kellerman, Molman', school: 'Holy Spirit', result: '56.24', year: 1999 },
        { event: '800 Meters', name: 'Charlton', school: 'Holy Trinity', result: '2:18.44', year: 2019 },
        { event: '120 Meters', name: 'Shuss', school: 'Cure of Ars', result: '13.77', year: 2004 },
        { event: '400 Meter Relay', name: 'C. Struzina, T. Mortimer, T. Tumberger, L. Sapp', school: 'Holy Trinity', result: '50.80', year: 2025 },
      ]
    },
    {
      grade: '8th',
      class: 'AAA',
      events: [
        { event: 'Football Throw', name: 'True', school: 'St. Joseph', result: '172\' 1"', year: 1998 },
        { event: 'Shot Put (8 lbs.)', name: 'Charles', school: 'Holy Trinity', result: '46\' 2 1/4"', year: 2006 },
        { event: 'Long Jump', name: 'Ballard', school: 'Cure of Ars', result: '19\' 8 1/4"', year: 2003 },
        { event: 'High Jump', name: 'Piere', school: 'St. Joseph', result: '5\' 10"', year: 2001 },
        { event: '1600 Meters', name: 'Embry', school: 'Nativity', result: '4:55.81', year: 2011 },
        { event: '100 Meters', name: 'Schafer', school: 'Nativity', result: '11.43', year: 2003 },
        { event: 'Dist. Med. Relay', name: 'O\'Dwyer, Gutierrez, Tyrrell, Schmidt', school: 'Prince of Peace', result: '1:47.98', year: 2012 },
        { event: '60 Meters', name: 'Shuss', school: 'Cure of Ars', result: '7.22', year: 2005 },
        { event: '400 Meters', name: 'L. Cole', school: 'Saint Agnes', result: '53.83', year: 2023 },
        { event: '200 Meters', name: 'Schafer', school: 'Nativity', result: '23.94', year: 2003 },
        { event: 'Medley Relay', name: 'Moss,Watson,McNellis,Schmidt', school: 'Prince of Peace', result: '51.92', year: 2010 },
        { event: '800 Meters', name: 'Allen', school: 'Prince of Peace', result: '2:13.23', year: 2011 },
        { event: '120 Meters', name: 'Schafer', school: 'Nativity', result: '13.84', year: 2003 },
        { event: '400 Meter Relay', name: 'G. Duran, H. Wiley, J. Wenger, G. Richlin', school: 'Prince of Peace', result: '48.19', year: 2023 },
      ]
    },
  ]
};

// Girls records data
const girlsRecords: CYORecords = {
  gender: 'girls',
  year: 2025,
  records: [
    {
      grade: '5th',
      class: 'A',
      events: [
        { event: '100 Meters', name: 'S. PORE', school: 'St. Ann', result: '13.93', year: 2025 },
        { event: '60 Meters', name: 'E. Hartter', school: 'Holy Rosary Wea', result: '8.75', year: 2022 },
        { event: '400 Meters', name: 'D. BATEMAN', school: 'Corpus Christi', result: '1:12:00', year: 2025 },
        { event: '200 Meters', name: 'O. Barto', school: 'Xavier', result: '32.95', year: 2023 },
        { event: '120 Meters', name: 'E. Hartter', school: 'Holy Rosary Wea', result: '18.85', year: 2022 },
        { event: 'Long Jump', name: 'E. Hartter', school: 'Holy Rosary Wea', result: '12\' 7"', year: 2022 },
        { event: 'Ball Throw', name: 'Z. WALDRON', school: 'Xavier', result: '104\' 8\'\'', year: 2025 },
        { event: '1600 Meters', name: 'E. JURGENSMEYER', school: 'St. Ann', result: '6:30.43', year: 2025 },
        { event: 'Medley Relay', name: 'No Names Listed', school: 'St. Ann', result: '1:19.99', year: 2022 },
        { event: '800 Meters', name: 'E. JURGENSMEYER', school: 'St. Ann', result: '3:00.53', year: 2025 },
        { event: '400 Meter Relay', name: 'No Names Listed', school: 'Good Shepherd', result: '1:10.20', year: 2022 },
        { event: 'High Jump', name: 'A. LEWIS', school: 'Corpus Christi', result: '4\' 2\'\'', year: 2025 },
        { event: 'Shot Put', name: 'D. BATEMAN', school: 'Corpus Christi', result: '23\' 1\'\'', year: 2025 },
        { event: 'Dist. Med. Relay', name: 'B. Brown, R. Lewis, A. Lewis, D. Bateman', school: 'Corpus Christi', result: '2:15.90', year: 2025 },
      ]
    },
    {
      grade: '6th',
      class: 'A',
      events: [
        { event: '200 Meters', name: 'Johnson', school: 'John Paul II', result: '29.88', year: 2014 },
        { event: '120 Meters', name: 'Reboulet', school: 'St. Paul', result: '16.57', year: 2017 },
        { event: '400 Meters', name: 'D. GLADES', school: 'St. John the Evangelist', result: '1:08.30', year: 2025 },
        { event: 'Shot Put', name: 'Lally', school: 'St. Patrick', result: '33\' 2"', year: 2014 },
        { event: '60 Meters', name: 'M. Thomas', school: 'John Paul II', result: '8.5', year: 2022 },
        { event: 'Medley Relay', name: 'No Names Listed', school: 'St. John the Evangelist', result: '1:01.24', year: 2025 },
        { event: '400 Meter Relay', name: 'Monty, Knutson, Kolarik, Lazarczyk', school: 'John Paul II', result: '1:02.66', year: 2017 },
        { event: '800 Meters', name: 'R. Kramer', school: 'Holy Spirit', result: '2:45.86', year: 2023 },
        { event: '1600 Meters', name: 'B. BLAZEWICZ', school: 'Holy Rosary Wea', result: '6:02.52', year: 2025 },
        { event: 'Long Jump', name: 'Morfeld', school: 'Holy Cross', result: '14\' 5"', year: 2019 },
        { event: '100 Meters', name: 'D. GLADES', school: 'St. John the Evangelist', result: '13.8', year: 2025 },
        { event: 'High Jump', name: 'M. THOMAS', school: 'Holy Rosary Wea', result: '4\' 4"', year: 2025 },
        { event: 'Ball Throw', name: 'N. CIANI', school: 'John Paul II', result: '106\' 1"', year: 2025 },
        { event: 'Dist. Med. Relay', name: 'M. Thomas, T. Bosley, A. Lemke, and B. Blazewics.', school: 'Holy Rosary Wea', result: '2:25.54', year: 2025 },
      ]
    },
    {
      grade: '7th',
      class: 'A',
      events: [
        { event: '400 Meters', name: 'Alvey', school: 'Our Lady of Unity', result: '1:02.39', year: 2013 },
        { event: '100 Meters', name: 'Johnson', school: 'John Paul II', result: '12.97', year: 2015 },
        { event: 'Distance Medley Relay', name: 'Saunders, Pham, Pham, Johnson', school: 'John Paul II', result: '58.32', year: 2015 },
        { event: '200 Meters', name: 'Johnson', school: 'John Paul II', result: '27.21', year: 2015 },
        { event: '120 Meters', name: 'Johnson', school: 'John Paul II', result: '15.8', year: 2015 },
        { event: '60 Meters', name: 'S. Miyares', school: 'Good Shepherd', result: '8.25', year: 2022 },
        { event: '800 Meters', name: 'S. Harper', school: 'Corpus Christi', result: '2:49.48', year: 2022 },
        { event: 'High Jump', name: 'T. Nover-Estes', school: 'St. John the Evangelist', result: '4\' 4"', year: 2022 },
        { event: 'High Jump', name: 'R. Becker', school: 'Good Shepherd', result: '4\' 4\'\'', year: 2024 },
        { event: 'Long Jump', name: 'M. Joyce', school: 'Good Shepherd', result: '13\' 7 1/2\'\'', year: 2024 },
        { event: 'Shot Put', name: 'M.Bishop', school: 'Good Shepherd', result: '31\' 3"', year: 2022 },
        { event: 'Ball Throw', name: 'A. Meder', school: 'Holy Rosary Wea', result: '131\' 3"', year: 2021 },
        { event: '1600 Meters', name: 'M. Gonzalez', school: 'Good Shepherd', result: '6:40.48', year: 2022 },
        { event: 'Medley Relay', name: 'No Names Listed', school: 'Good Shepherd', result: '1:02.86', year: 2022 },
        { event: '400 Meter Relay', name: 'No Names Listed', school: 'Corpus Christi', result: '1:03.73', year: 2024 },
        { event: 'Dist. Med. Relay', name: 'A. Trejo, L. Paul, X. Fernandez, B. O\'Brien', school: 'Holy Cross', result: '2:35.40', year: 2024 },
      ]
    },
    {
      grade: '8th',
      class: 'A',
      events: [
        { event: '60 Meters', name: 'Lewis', school: 'John Paul II', result: '8.04', year: 2015 },
        { event: '100 Meters', name: 'Johnson', school: 'John Paul II', result: '12.54', year: 2016 },
        { event: '120 Meters', name: 'Johnson', school: 'John Paul II', result: '15.26', year: 2016 },
        { event: '400 Meter Relay', name: 'Monty, Hernandez, Knutson, Lazarczyk', school: 'John Paul II', result: '57.05', year: 2019 },
        { event: 'Shot Put (6 lbs.)', name: 'Lally', school: 'St. Patrick', result: '40\' 4"', year: 2016 },
        { event: '1600 Meters', name: 'A. Morfeld', school: 'Holy Cross', result: '5:41.13', year: 2021 },
        { event: '200 Meters', name: 'O. Stevens', school: 'John Paul II', result: '30.21', year: 2023 },
        { event: '800 Meters', name: 'A. Morfeld', school: 'Holy Cross', result: '2:34.72', year: 2021 },
        { event: 'High Jump', name: 'A. Morfeld', school: 'Holy Cross', result: '4\' 6"', year: 2021 },
        { event: 'Long Jump', name: 'A. Morfeld', school: 'Holy Cross', result: '15\' 0 1/2"', year: 2021 },
        { event: 'Ball Throw', name: 'A. Meder', school: 'Holy Rosary', result: '150\' 9"', year: 2022 },
        { event: '400 Meters', name: 'L. Finan', school: 'Holy Spirit', result: '1:07.32', year: 2023 },
        { event: 'Dist. Med Relay', name: 'E. Whichman, C. Hernandez, G. Smith, R. Trausch', school: 'Holy Cross', result: '2:21.81', year: 2024 },
        { event: 'Medley Relay', name: 'L. Troy, E. Wichman, C. Hernandez, R. Trausch', school: 'Holy Cross', result: '1:05.07', year: 2024 },
      ]
    },
    {
      grade: '5th',
      class: 'AA',
      events: [
        { event: 'Ball Throw', name: 'Rosner', school: 'St. Joseph', result: '139\' 4 1/4"', year: 1980 },
        { event: 'Shot Put (6lb.)', name: 'Greving', school: 'Prince of Peace', result: '27\' 3"', year: 2003 },
        { event: 'Long Jump', name: 'Alena', school: 'St. Joseph', result: '14\' 8 3/4"', year: 1990 },
        { event: 'High Jump', name: 'Boring', school: 'St. Agnes', result: '4\' 6"', year: 1977 },
        { event: '1600 Meters', name: 'Lucas', school: 'St. Ann', result: '5:50.19', year: 2019 },
        { event: '100 Meters', name: 'Russell', school: 'Good Shepherd', result: '13.66', year: 2014 },
        { event: 'Dist. Med. Relay', name: 'Richards, Leiker, Lord, Timmons', school: 'Prince of Peace', result: '2:21.36', year: 2005 },
        { event: '60 Meters', name: 'Russell', school: 'Good Shepherd', result: '8.53', year: 2014 },
        { event: '400 Meters', name: 'Nelson', school: 'St. Ann', result: '1:09.02', year: 2013 },
        { event: '200 Meters', name: 'Russell', school: 'Good Shepherd', result: '29.48', year: 2014 },
        { event: 'Medley Relay', name: 'Nelson, Kinkade, Peacock, Washington', school: 'Holy Spirit', result: '1:03.00', year: 2001 },
        { event: '800 Meters', name: 'Lucas', school: 'St. Ann', result: '2:36.77', year: 2019 },
        { event: '120 Meters', name: 'Russell', school: 'Good Shepherd', result: '16.51', year: 2014 },
        { event: '400 Meter Relay', name: 'Goodpaster, Yunger, Brandl, Moylan', school: 'St. Joseph', result: '1:03.22', year: 2013 },
      ]
    },
    {
      grade: '6th',
      class: 'AA',
      events: [
        { event: 'Ball Throw', name: 'Wheeler', school: 'Holy Spirit', result: '165\' 5"', year: 2014 },
        { event: 'Shot Put (6 lbs.)', name: 'Dratt', school: 'Holy Trinity', result: '31\' 6 1/4"', year: 1989 },
        { event: 'Long Jump', name: 'Schroeder', school: 'St. Joseph', result: '15\' 3/4"', year: 1977 },
        { event: 'High Jump', name: 'M. Kruse', school: 'Good Shepherd', result: '4\' 10"', year: 2023 },
        { event: '1600 Meters', name: 'Goetz', school: 'Sacred Heart', result: '5:53.1', year: 2012 },
        { event: '100 Meters', name: 'Nelson', school: 'St. Ann', result: '13.11', year: 2014 },
        { event: 'Dist. Med. Relay', name: 'Weybrew, Kuhl, Phelps, Jett', school: 'Sacred Heart', result: '2:09.34', year: 2016 },
        { event: '60 Meters', name: 'Russell', school: 'Good Shepherd', result: '8.38', year: 2015 },
        { event: '400 Meters', name: 'Russell', school: 'Good Shepherd', result: '1:05.44', year: 2015 },
        { event: '200 Meters', name: 'Nelson', school: 'St. Ann', result: '28', year: 2014 },
        { event: 'Medley Relay', name: 'Robinson, Kaplan, Taylor, Nelson', school: 'St. Ann', result: '59.45', year: 2014 },
        { event: '800 Meters', name: 'Keaveny', school: 'St. Ann', result: '2:40.35', year: 2002 },
        { event: '120 Meters', name: 'Russell', school: 'Good Shepherd', result: '16.6', year: 2015 },
        { event: '400 Meter Relay', name: 'Lewis, Smith, Keeney, Riley', school: 'Holy Spirit', result: '59.25', year: 2003 },
      ]
    },
    {
      grade: '7th',
      class: 'AA',
      events: [
        { event: 'Ball Throw', name: 'Hewitt', school: 'Good Shepherd', result: '167\' 11"', year: 2014 },
        { event: 'Shot Put (6 lbs.)', name: 'Moore', school: 'Queen of the Holy Rosary (OP)', result: '35\' 4 1/2"', year: 1979 },
        { event: 'Long Jump', name: 'Wastler', school: 'Holy Trinity', result: '15\' 8 1/2"', year: 1981 },
        { event: 'High Jump', name: 'Kolarik', school: 'St. Ann', result: '5\' 2"', year: 1980 },
        { event: '1600 Meters', name: 'Keaveny', school: 'St. Ann', result: '5:35.72', year: 2003 },
        { event: '100 Meters', name: 'Marchio', school: 'St. Joseph', result: '13.08', year: 2012 },
        { event: '100 Meters', name: 'Lee', school: 'Good Shepherd', result: '13.08', year: 2015 },
        { event: '100 Meters', name: 'Russell', school: 'Good Shepherd', result: '13.08', year: 2016 },
        { event: 'Dist. Med. Relay', name: 'Ventura, Timmons, Lord, Ewert', school: 'Prince of Peace', result: '2:09.72', year: 2007 },
        { event: '60 Meters', name: 'Stella Kneidel', school: 'Nativity', result: '8', year: 2018 },
        { event: '400 Meters', name: 'Nelson', school: 'St. Ann', result: '1:03.85', year: 2015 },
        { event: '200 Meters', name: 'Russell', school: 'Good Shepherd', result: '27.36', year: 2016 },
        { event: 'Medley Relay', name: 'Vasquez, Wallace, Brown, Withrow', school: 'Holy Spirit', result: '59.6', year: 2001 },
        { event: '800 Meters', name: 'Coppinger', school: 'St. Ann', result: '2:41.12', year: 2008 },
        { event: '120 Meters', name: 'Nelson', school: 'St. Ann', result: '15.95', year: 2015 },
        { event: '400 Meter Relay', name: 'Yunger, Creach, Illum, Marchio', school: 'St. Joseph', result: '56.54', year: 2012 },
      ]
    },
    {
      grade: '8th',
      class: 'AA',
      events: [
        { event: 'Ball Throw', name: 'Connolly', school: 'St. Ann', result: '181\' 8"', year: 1979 },
        { event: 'Shot Put (6 lbs.)', name: 'Mischlich', school: 'Holy Trinity', result: '38\' 1 1/4"', year: 1982 },
        { event: 'Long Jump', name: 'Wiley', school: 'Prince of Peace', result: '16\' 1.5"', year: 2021 },
        { event: 'High Jump', name: 'Kolarik, J.', school: 'St. Ann', result: '5\' 2"', year: 1981 },
        { event: '1600 Meters', name: 'Keaveny', school: 'St. Ann', result: '5:30.17', year: 2004 },
        { event: '100 Meters', name: 'Russell', school: 'Good Shepherd', result: '12.77', year: 2017 },
        { event: 'Dist. Med. Relay', name: 'Keaveny, Roth, Stern, Campbell', school: 'St. Ann', result: '2:01.56', year: 2004 },
        { event: '60 Meters', name: 'Marchio', school: 'St. Joseph', result: '7.77', year: 2013 },
        { event: '400 Meters', name: 'Gossman', school: 'Sacred Heart', result: '1:03.56', year: 2014 },
        { event: '200 Meters', name: 'Russell', school: 'Good Shepherd', result: '26.25', year: 2017 },
        { event: 'Medley Relay', name: 'Shartzer, Sweet, Burch, Watkins', school: 'St. Agnes', result: '56.94', year: 2003 },
        { event: '800 Meters', name: 'Campbell', school: 'St. Ann', result: '2:27.57', year: 2004 },
        { event: '120 Meters', name: 'Tripp', school: 'Sacred Heart', result: '15.36', year: 2009 },
        { event: '400 Meter Relay', name: 'Robinson, Kaplan, Nelson, Taylor', school: 'St. Ann', result: '54.97', year: 2016 },
      ]
    },
    {
      grade: '5th',
      class: 'AAA',
      events: [
        { event: 'Ball Throw', name: 'O. Mallory', school: 'Holy Trinity', result: '145\' 10"', year: 2023 },
        { event: 'Shot Put (6 lbs.)', name: 'Teahan', school: 'Cure of Ars', result: '29\' 10"', year: 2005 },
        { event: 'Long Jump', name: 'Pyle', school: 'Holy Trinity', result: '13\' 7 1/2"', year: 2006 },
        { event: 'High Jump', name: 'Romme', school: 'Holy Trinity', result: '4\' 5\'\'', year: 2006 },
        { event: '1600 Meters', name: 'S. Moos', school: 'Prince of Peace', result: '5:55.41', year: 2023 },
        { event: '100 Meters', name: 'Leah Phelps', school: 'Sacred Heart', result: '13.45', year: 2017 },
        { event: 'Dist. Med. Relay', name: 'L. Walchshauser/C. Arnold/L. Matthews/A.V. Pham', school: 'Cure of Ars', result: '2:17.30', year: 2025 },
        { event: '60 Meters', name: 'Brinkman', school: 'St. Michael', result: '8.61', year: 2017 },
        { event: '60 Meters', name: 'A. Brinkman', school: 'St. Michael', result: '8.61', year: 2022 },
        { event: '400 Meters', name: 'Donnelly', school: 'Cure of Ars', result: '1:08.17', year: 2005 },
        { event: '200 Meters', name: 'Leah Phelps', school: 'Sacred Heart', result: '29.02', year: 2017 },
        { event: 'Medley Relay', name: 'Names Not Available', school: 'St. Joseph', result: '1:00.04', year: 1999 },
        { event: '800 Meters', name: 'Donnelly', school: 'Cure of Ars', result: '2:31.52', year: 2005 },
        { event: '120 Meters', name: 'Heilman', school: 'Nativity', result: '17.42', year: 2004 },
        { event: '120 Meters', name: 'Cobb', school: 'Holy Trinity', result: '17.42', year: 2005 },
        { event: '400 Meter Relay', name: 'Kelly, Benge, McCue, Buchanan', school: 'Prince of Peace', result: '59.59', year: 2010 },
      ]
    },
    {
      grade: '6th',
      class: 'AAA',
      events: [
        { event: 'Ball Throw', name: 'Pyle', school: 'Holy Trinity', result: '155\' 8"', year: 2007 },
        { event: 'Shot Put (6 lbs.)', name: 'Buchanan', school: 'Prince of Peace', result: '32\' 4.5"', year: 2011 },
        { event: 'Long Jump', name: 'Covillo', school: 'Nativity', result: '14\' 5 1/2"', year: 2001 },
        { event: 'High Jump', name: 'Mayfield', school: 'Holy Trinity', result: '4\' 6"', year: 2002 },
        { event: 'High Jump', name: 'McCarthy', school: 'Cure of Ars', result: '4\' 6"', year: 2003 },
        { event: 'High Jump', name: 'Prince', school: 'Holy Trinity', result: '4\' 6"', year: 2005 },
        { event: 'High Jump', name: 'Keating', school: 'St. Joseph', result: '4\' 6"', year: 2005 },
        { event: 'High Jump', name: 'Emma Novosel', school: 'St. Joseph', result: '4\' 6"', year: 2018 },
        { event: '1600 Meters', name: 'Sovereign', school: 'Holy Trinity', result: '5:46.73', year: 2013 },
        { event: '100 Meters', name: 'Leah Phelps', school: 'Sacred Heart', result: '12.95', year: 2018 },
        { event: 'Dist. Med. Relay', name: 'Ellwanger, Scherzer, Holton, Goodenow', school: 'Holy Trinity', result: '2:10.32', year: 2017 },
        { event: '60 Meters', name: 'Leah Phelps', school: 'Sacred Heart', result: '7.99', year: 2018 },
        { event: '400 Meters', name: 'Donnelly', school: 'Cure of Ars', result: '1:05.47', year: 2006 },
        { event: '200 Meters', name: 'C. McEvoy', school: 'Holy Trinity', result: '27.67', year: 2024 },
        { event: 'Medley Relay', name: 'Mangornchai, Simpson, Hermes, Mantel', school: 'St. Joseph', result: '1:01.84', year: 2000 },
        { event: '800 Meters', name: 'Donnelly', school: 'Holy Trinity', result: '2:31.7', year: 2006 },
        { event: '120 Meters', name: 'Leah Phelps', school: 'Sacred Heart', result: '16', year: 2018 },
        { event: '400 Meter Relay', name: 'A. Gansen, H. Burritt, O. Mallory and C. McEvoy', school: 'Holy Trinity', result: '56.99', year: 2024 },
      ]
    },
    {
      grade: '7th',
      class: 'AAA',
      events: [
        { event: 'Ball Throw', name: 'Davila', school: 'St. Joseph', result: '169\' 3"', year: 2003 },
        { event: 'Shot Put (6 lbs.)', name: 'Benson', school: 'Holy Trinity', result: '35\' 4"', year: 2013 },
        { event: 'Long Jump', name: 'Clark', school: 'Prince of Peace', result: '15\' 5 1/4"', year: 2010 },
        { event: 'High Jump', name: 'Mayfield', school: 'Holy Trinity', result: '5\' 2"', year: 2003 },
        { event: '1600 Meters', name: 'Sovereign', school: 'Holy Trinity', result: '5:40.95', year: 2014 },
        { event: '100 Meters', name: 'Phelps', school: 'Sacred Heart', result: '12.66', year: 2019 },
        { event: 'Dist. Med. Relay', name: 'Weybrew, Kuhl, Phelps, Jett', school: 'Sacred Heart', result: '2:05.76', year: 2017 },
        { event: '60 Meters', name: 'White', school: 'Nativity', result: '7.73', year: 2002 },
        { event: '400 Meters', name: 'Donnelly', school: 'Cure of Ars', result: '1:02.15', year: 2007 },
        { event: '200 Meters', name: 'Phelps', school: 'Sacred Heart', result: '26.78', year: 2019 },
        { event: 'Medley Relay', name: 'Allen, Conway, Meyers, Rawson', school: 'Cure of Ars', result: '57.16', year: 2014 },
        { event: '800 Meters', name: 'Donnelly', school: 'Cure of Ars', result: '2:24.58', year: 2007 },
        { event: '120 Meters', name: 'White', school: 'Nativity', result: '15.83', year: 2002 },
        { event: '400 Meter Relay', name: 'O. Mallory, A. Gansen, A. DeCoursey, C. McEvoy', school: 'Holy Trinity', result: '54.95', year: 2025 },
      ]
    },
    {
      grade: '8th',
      class: 'AAA',
      events: [
        { event: 'Ball Throw', name: 'Davila', school: 'St. Joseph', result: '193\' 7"', year: 2004 },
        { event: 'Shot Put (6 lbs.)', name: 'Benson', school: 'Holy Trinity', result: '37\' 7"', year: 2014 },
        { event: 'Long Jump', name: 'Smith', school: 'Holy Trinity', result: '16\' 4 3/4"', year: 2003 },
        { event: 'High Jump', name: 'Mayfield', school: 'Holy Trinity', result: '5\' 7"', year: 2004 },
        { event: '1600 Meters', name: 'Murrow', school: 'Prince of Peace', result: '5:25.42', year: 2016 },
        { event: '100 Meters', name: 'White', school: 'Nativity', result: '12.9', year: 2003 },
        { event: 'Dist. Med. Relay', name: 'Weybrew, Kuhl, Phelps, Jett', school: 'Sacred Heart', result: '2:02.97', year: 2018 },
        { event: '60 Meters', name: 'White', school: 'Nativity', result: '7.76', year: 2003 },
        { event: '400 Meters', name: 'Donnelly', school: 'Cure of Ars', result: '1:02.77', year: 2008 },
        { event: '200 Meters', name: 'Ruffalo', school: 'Prince of Peace', result: '26.72', year: 2015 },
        { event: 'Medley Relay', name: 'Meyers, Conway, Allen, Rawson', school: 'Cure of Ars', result: '58.33', year: 2015 },
        { event: '800 Meters', name: 'Donnelly', school: 'Cure of Ars', result: '2:23.28', year: 2008 },
        { event: '120 Meters', name: 'White', school: 'Nativity', result: '15.45', year: 2003 },
        { event: '400 Meter Relay', name: 'Kelly, Feuerborn, Buchanon, Mirich', school: 'Prince of Peace', result: '54.66', year: 2013 },
      ]
    },
  ]
};

// Write output files
import { writeFileSync } from 'fs';
import { join } from 'path';

const outputDir = join(process.cwd(), 'data');

writeFileSync(
  join(outputDir, '2025_cyo_track_records_boys.json'),
  JSON.stringify(boysRecords, null, 2),
  'utf-8'
);

writeFileSync(
  join(outputDir, '2025_cyo_track_records_girls.json'),
  JSON.stringify(girlsRecords, null, 2),
  'utf-8'
);

console.log('✅ Successfully generated JSON files:');
console.log('  - data/2025_cyo_track_records_boys.json');
console.log('  - data/2025_cyo_track_records_girls.json');
