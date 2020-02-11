const DEFAULT_OPTIONS = {
  maxJump: 50,
  unique: false,
  cheat: true,
};

const PLATES_1 = {
  45: 9,
  25: 1,
  10: 2,
};

const PLATES_2 = {
  ...PLATES_1,
  5: 1,
};

const PLATES_3 = {
  ...PLATES_2,
  2.5: 1,
};

const CHEAT_SHEET = [
  { workWeight: 135, warmups: [75, 95, 115] },
  { workWeight: 175, warmups: [85, 125, 155] },
  { workWeight: 225, warmups: [95, 135, 185] },
  { workWeight: 315, warmups: [185, 225, 275] },
];

const LOADS = [
  { load: 5, level: 3 },
  { load: 10, level: 3 },
  { load: 15, level: 3 },
  { load: 20, level: 3 },
  { load: 25, level: 3 },
  { load: 30, level: 3 },
  { load: 35, level: 3 },
  { load: 40, level: 3 },
  { load: 45, level: 1 },
  { load: 50, level: 3 },
  { load: 55, level: 2 },
  { load: 60, level: 3 },
  { load: 65, level: 1 },
  { load: 70, level: 3 },
  { load: 75, level: 2 },
  { load: 80, level: 3 },
  { load: 85, level: 1 },
  { load: 90, level: 3 },
  { load: 95, level: 1 },
  { load: 100, level: 3 },
  { load: 105, level: 2 },
  { load: 110, level: 3 },
  { load: 115, level: 1 },
  { load: 120, level: 3 },
  { load: 125, level: 2 },
  { load: 130, level: 3 },
  { load: 135, level: 1 },
  { load: 140, level: 3 },
  { load: 145, level: 2 },
  { load: 150, level: 3 },
  { load: 155, level: 1 },
  { load: 160, level: 3 },
  { load: 165, level: 2 },
  { load: 170, level: 3 },
  { load: 175, level: 1 },
  { load: 180, level: 3 },
  { load: 185, level: 1 },
  { load: 190, level: 3 },
  { load: 195, level: 2 },
  { load: 200, level: 3 },
  { load: 205, level: 1 },
  { load: 210, level: 3 },
  { load: 215, level: 2 },
  { load: 220, level: 3 },
  { load: 225, level: 1 },
  { load: 230, level: 3 },
  { load: 235, level: 2 },
  { load: 240, level: 3 },
  { load: 245, level: 1 },
  { load: 250, level: 3 },
  { load: 255, level: 2 },
  { load: 260, level: 3 },
  { load: 265, level: 1 },
  { load: 270, level: 3 },
  { load: 275, level: 1 },
  { load: 280, level: 3 },
  { load: 285, level: 2 },
  { load: 290, level: 3 },
  { load: 295, level: 1 },
  { load: 300, level: 3 },
  { load: 305, level: 2 },
  { load: 310, level: 3 },
  { load: 315, level: 1 },
  { load: 320, level: 3 },
  { load: 325, level: 2 },
  { load: 330, level: 3 },
  { load: 335, level: 1 },
  { load: 340, level: 3 },
  { load: 345, level: 2 },
  { load: 350, level: 3 },
  { load: 355, level: 1 },
  { load: 360, level: 3 },
  { load: 365, level: 1 },
  { load: 370, level: 3 },
  { load: 375, level: 2 },
  { load: 380, level: 3 },
  { load: 385, level: 1 },
  { load: 390, level: 3 },
  { load: 395, level: 2 },
  { load: 400, level: 3 },
  { load: 405, level: 1 },
  { load: 410, level: 3 },
  { load: 415, level: 2 },
  { load: 420, level: 3 },
  { load: 425, level: 1 },
  { load: 430, level: 3 },
  { load: 435, level: 2 },
  { load: 440, level: 3 },
  { load: 445, level: 1 },
  { load: 450, level: 3 },
  { load: 455, level: 1 },
  { load: 460, level: 3 },
  { load: 465, level: 2 },
  { load: 470, level: 3 },
  { load: 475, level: 1 },
  { load: 480, level: 3 },
  { load: 485, level: 2 },
  { load: 490, level: 3 },
  { load: 495, level: 1 },
  { load: 500, level: 3 },
  { load: 505, level: 2 },
  { load: 510, level: 3 },
  { load: 515, level: 1 },
  { load: 520, level: 3 },
  { load: 525, level: 2 },
  { load: 530, level: 3 },
  { load: 535, level: 1 },
  { load: 540, level: 3 },
  { load: 545, level: 1 },
  { load: 550, level: 3 },
  { load: 555, level: 2 },
  { load: 560, level: 3 },
  { load: 565, level: 1 },
  { load: 570, level: 3 },
  { load: 575, level: 2 },
  { load: 580, level: 3 },
  { load: 585, level: 1 },
  { load: 590, level: 3 },
  { load: 595, level: 2 },
  { load: 600, level: 3 },
  { load: 605, level: 1 },
  { load: 610, level: 3 },
  { load: 615, level: 2 },
  { load: 620, level: 3 },
  { load: 625, level: 1 },
  { load: 630, level: 3 },
  { load: 635, level: 1 },
  { load: 640, level: 3 },
  { load: 645, level: 2 },
  { load: 650, level: 3 },
  { load: 655, level: 1 },
  { load: 660, level: 3 },
  { load: 665, level: 2 },
  { load: 670, level: 3 },
  { load: 675, level: 1 },
  { load: 680, level: 3 },
  { load: 685, level: 2 },
  { load: 690, level: 3 },
  { load: 695, level: 1 },
  { load: 700, level: 3 },
  { load: 705, level: 2 },
  { load: 710, level: 3 },
  { load: 715, level: 1 },
  { load: 720, level: 3 },
  { load: 725, level: 1 },
  { load: 730, level: 3 },
  { load: 735, level: 2 },
  { load: 740, level: 3 },
  { load: 745, level: 1 },
  { load: 750, level: 3 },
  { load: 755, level: 2 },
  { load: 760, level: 3 },
  { load: 765, level: 1 },
  { load: 770, level: 3 },
  { load: 775, level: 2 },
  { load: 780, level: 3 },
  { load: 785, level: 1 },
  { load: 790, level: 3 },
  { load: 795, level: 2 },
  { load: 800, level: 3 },
  { load: 805, level: 1 },
  { load: 810, level: 3 },
  { load: 815, level: 1 },
  { load: 820, level: 3 },
  { load: 825, level: 2 },
  { load: 830, level: 3 },
  { load: 835, level: 1 },
  { load: 840, level: 3 },
  { load: 845, level: 2 },
  { load: 850, level: 3 },
  { load: 855, level: 1 },
  { load: 860, level: 3 },
  { load: 865, level: 2 },
  { load: 870, level: 3 },
  { load: 875, level: 1 },
  { load: 880, level: 3 },
  { load: 885, level: 2 },
  { load: 890, level: 3 },
  { load: 895, level: 1 },
  { load: 900, level: 3 },
  { load: 905, level: 1 },
  { load: 910, level: 3 },
  { load: 915, level: 2 },
  { load: 920, level: 3 },
  { load: 925, level: 1 },
  { load: 930, level: 3 },
  { load: 935, level: 2 },
  { load: 940, level: 3 },
  { load: 945, level: 1 },
  { load: 950, level: 3 },
  { load: 955, level: 2 },
  { load: 960, level: 3 },
  { load: 965, level: 3 },
  { load: 970, level: 3 },
  { load: 975, level: 3 },
  { load: 980, level: 3 },
  { load: 985, level: 3 },
  { load: 990, level: 3 },
  { load: 995, level: 3 },
  { load: 1000, level: 3 },
];

module.exports = {
  DEFAULT_OPTIONS,
  PLATES_1,
  PLATES_2,
  PLATES_3,
  LOADS,
  CHEAT_SHEET,
};
