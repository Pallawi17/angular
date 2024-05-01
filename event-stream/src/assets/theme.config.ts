interface config {
  [key: string]: {
    'font-size': string;
    'background-color': string;
    color: string;
    'active-color': string;
    stroke: string;
    fill: string;
    'primary-color': string;
  };
}

const config: config = {
  dark: {
    'font-size': '16px',
    'background-color': '#000',
    color: '#b4b2b2',
    'active-color': '#fff',
    stroke: '#b4b2b2',
    fill: '#b4b2b2',
    'primary-color': '#091526',
  },
  light: {
    'font-size': '16px',
    'background-color': '#fff',
    color: '#3b3d40',
    'active-color': '#3b3d40',
    stroke: '#3b3d40',
    fill: '#3b3d40',
    'primary-color': '#e1e3e6',
  },
};

export default config
