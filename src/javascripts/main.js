import 'bootstrap';
import '../styles/main.scss';
import grid from './components/grid/grid';
import paint from './components/paintBrush/paintbrush';

const init = () => {
  grid.makeGrid();
  paint.printColorPicker();
};

init();
