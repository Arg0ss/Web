import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faTheaterMasks, faLandmark, faChartArea, faCoins, faRunning } from '@fortawesome/free-solid-svg-icons'


export const Tag = [
  {
    type: "Tudo",
    icon: <FontAwesomeIcon icon={faBorderAll} color="#fff" />,
  },
  {
    color: "#00a7ea",
    type: "Criptomoeda",
    icon: <FontAwesomeIcon icon={faTheaterMasks} color="#fff" />,
  },
  {
    color: "#8000ff",
    type: "BlockChain",
    icon: <FontAwesomeIcon icon={faLandmark} color="#fff" />,
  },
  {
    color: "#ff3e3efa",
    type: "Finanças",
    icon: <FontAwesomeIcon icon={faChartArea} color="#fff" />,
  },
  {
    color: "#008000",
    type: "Investimento",
    icon: <FontAwesomeIcon icon={faCoins} color="#fff" />,
  },
];

export const Timer = [
  {
    t: 5,
  },
  {
    t: 10,
  },
  {
    t: 15,
  },
  {
    t: 20,
  },
  {
    t: 25,
  },
];
