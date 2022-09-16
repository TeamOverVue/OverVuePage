// Accepts .jpg, .jpeg, and .png file extensions. File extension must be lowercase.

import ari from "./dev-pics/ari.jpg";
import aram from "./dev-pics/aram.jpg";
import meganN from "./dev-pics/MeganN.jpg";
import deanfchung from "./dev-pics/dean-chung.png";
import deano from "./dev-pics/deano.jpg";
import drew from "./dev-pics/drew.jpg";
import joseph from "./dev-pics/joseph.jpg";
import alex from "./dev-pics/alex.png";
import joju from "./dev-pics/joju.jpg";
import keriann from "./dev-pics/keri_overvue.png";
import allison from "./dev-pics/allison1.jpg";
import faraz from "./dev-pics/FarazPic.png";
import sean from "./dev-pics/SeanPic.png";
import nicholas from "./dev-pics/NicholasPic.jpeg";
import terry from "./dev-pics/TerryPic.jpg";
import alexlu from "./dev-pics/alexlu.jpg";
import jeffrey from "./dev-pics/jeffrey.jpeg";
import kenny from "./dev-pics/kenny.jpg";
import bender from "./dev-pics/bender.jpeg";
import sonny from "./dev-pics/sonny.jpg";
import ross from "./dev-pics/ross.jpg";
import gabby from "./dev-pics/gabby.jpg";
import shanon from "./dev-pics/shanon.jpeg";
import zoew from "./dev-pics/zoew.png";
import julia from "./dev-pics/julia.jpeg";
import kerolos from "./dev-pics/kerolos.jpg";
import bryanb from "./dev-pics/bryanb.png";
import keyla from "./dev-pics/keyla.jpeg";
import johnny from "./dev-pics/johnny.jpeg";
import jace from "./dev-pics/jace.jpeg";
import katherine from "./dev-pics/katherine.png";
import chris from "./dev-pics/chris.jpg";
import alexLaw from "./dev-pics/alexLaw.png";
import emmaG from "./dev-pics/EmmaG.png"; 
import honghaoS from "./dev-pics/honghaoS.jpeg";

const devData = {
  deano: {
    'dev-name': 'Dean Ohashi',
    'github-handle': '@dnohashi',
    'github-link': 'https://github.com/dnohashi',
    'img': deano
  },
  deanfchung: {
    'dev-name': 'Dean Chung',
    'github-handle': '@deanfchung',
    'github-link': 'https://github.com/deanfchung',
    'img': deanfchung
  },
  drew: {
    'dev-name': 'Drew Nguyen',
    'github-handle': '@drewngyen',
    'github-link': 'https://github.com/drewngyen',
    'img': drew
  },
  joseph: {
    'dev-name': 'Joseph Eisele',
    'github-handle': '@jeisele',
    'github-link': 'https://github.com/jeisele2',
    'img': joseph
  },
  alex: {
    'dev-name': 'Alexander Havas',
    'github-handle': '@LOLDragoon',
    'github-link': 'https://github.com/LOLDragoon',
    'img': alex 
  },
  keriann: {
    'dev-name': 'Keriann Lin',
    'github-handle': '@keliphan',
    'github-link': 'https://github.com/keliphan',
    'img': keriann
  },
  joju: {
    'dev-name': 'Joju Olaode',
    'github-handle': '@JojuOlaode',
    'github-link': 'https://github.com/JojuOlaode',
    'img': joju
  },
  allison: {
    'dev-name': 'Allison Pratt',
    'github-handle': '@allisons11',
    'github-link': 'https://github.com/allisons11',
    'img': allison
  },
  faraz: {
    'dev-name': 'Faraz Moallemi',
    'github-handle': '@farazmoallemi',
    'github-link': 'https://github.com/farazmoallemi',
    'img': faraz
  },
  sean: {
    'dev-name': 'Sean Grace',
    'github-handle': '@ziggrace',
    'github-link': 'https://github.com/ziggrace',
    'img': sean
  },
  terry: {
    'dev-name': 'Terry L. Tilley',
    'github-handle': '@codeByCandlelight',
    'github-link': 'https://github.com/codeByCandlelight',
    'img': terry
  },
  nicholas: {
    'dev-name': 'Nicholas Schillaci',
    'github-handle': '@Schillaci767',
    'github-link': 'https://github.com/Schillaci767',
    'img': nicholas
  },
  alexlu: {
    'dev-name': 'Alex Lu',
    'github-handle': '@aleckslu',
    'github-link': 'https://github.com/aleckslu',
    'img': alexlu
  },
  jeffrey: {
    'dev-name': 'Jeffrey Sul',
    'github-handle': '@jeffreysul',
    'github-link': 'https://github.com/jeffreysul',
    'img': jeffrey
  },
  kenny: {
    'dev-name': 'Kenneth Lee',
    'github-handle': '@kennyea',
    'github-link': 'https://github.com/kennyea',
    'img': kenny
  },
  bender: {
    'dev-name': 'Ryan Bender',
    'github-handle': '@rdbender',
    'github-link': 'https://github.com/rdbender',
    'img': bender
  },
  sonny: {
    'dev-name': 'Sonny Nguyen',
    'github-handle': '@sn163',
    'github-link': 'https://github.com/sn163',
    'img': sonny
  },
  shanon: {
    'dev-name': 'Shanon Lee',
    'github-handle': '@shanon98lee',
    'github-link': 'https://github.com/shanon98lee',
    'img': shanon
  },
  ross: {
    'dev-name': 'Ross Lamerson',
    'github-handle': '@lamerson28',
    'github-link': 'https://github.com/lamerson28',
    'img': ross
  },
  gabby: {
    'dev-name': 'Gabby Kokhabi',
    'github-handle': '@gkokhabi',
    'github-link': 'https://github.com/gkokhabi',
    'img': gabby
  },
  zoew: {
    'dev-name': 'Zoew McGrath',
    'github-handle': '@Z-McGrath',
    'github-link': 'https://github.com/Z-McGrath',
    'img': zoew
  },
  aram: {
    'dev-name': 'Aram Paparian',
    'github-handle': '@apaparian',
    'github-link': 'https://github.com/apaparian',
    'img': aram
  },
  bryanb: {
    'dev-name': 'Bryan Bart',
    'github-handle': '@MrBeeAreWhy',
    'github-link': 'https://github.com/MrBeeAreWhy',
    'img': bryanb
  },
  julia: {
    'dev-name': 'Julia Bakerink',
    'github-handle': '@jbbake',
    'github-link': 'https://github.com/jbbake',
    'img': julia
  },
  megan: {
    'dev-name': 'Megan Nadkarni',
    'github-handle': '@megatera',
    'github-link': 'https://github.com/megatera',
    'img': meganN
  },
  kerolos: {
    'dev-name': 'Kerolos Nesem',
    'github-handle': '@Kerolos-Nesem',
    'github-link': 'https://github.com/Kerolos-Nesem',
    'img': kerolos
  },
  keyla: {
    'dev-name': 'Keyla Koizumi Nishimura',
    'github-handle': '@keylakoizumin',
    'github-link': 'https://github.com/keylakoizumin',
    'img': keyla
  },
  johnny: {
    'dev-name': 'Johnny Chan',
    'github-handle': '@jchan444',
    'github-link': 'https://github.com/jchan444',
    'img': johnny
  },
  jace: {
    'dev-name': 'Jace Crowe',
    'github-handle': '@JaceCrowe',
    'github-link': 'https://github.com/JaceCrowe',
    'img': jace
  },
  katherine: {
    'dev-name': 'Katherine Kim',
    'github-handle': '@katherinek123',
    'github-link': 'https://github.com/katherinek123',
    'img': katherine
  },
  chris: {
    'dev-name': 'Chris Wong',
    'github-handle': '@Koregano73',
    'github-link': 'https://github.com/Koregano73',
    'img': chris
  },
  alexLaw: {
    'dev-name': 'Alex Law',
    'github-handle': '@alexlaw528',
    'github-link': 'https://github.com/alexlaw528',
    'img': alexLaw
  },
  emmaG: {
    'dev-name': 'Emma Genesen',
    'github-handle': '@EGenesen',
    'github-link': 'https://github.com/Egenesen',
    'img': emmaG
  },
  honghaoS: {
    'dev-name': 'Honghao Sun',
    'github-handle': '@sunhonghaoparis',
    'github-link': 'https://github.com/sunhonghaoparis',
    'img': honghaoS
  },
  ari: {
    'dev-name': 'Ari the Cat',
    'github-handle': '@DatAriLyfe',
    'github-link': 'https://github.com/MrBeeAreWhy',
    'img': ari
  },
};

export default devData;