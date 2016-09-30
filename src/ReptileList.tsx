import React = require('react');
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24
  },
};

const tilesData = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Coast_Garter_Snake.jpg',
    species: 'Garter Snake',
    name: 'jill111',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/originals/5a/fa/a9/5afaa942271609922a1aa3d6ecf76453.jpg',
    species: 'Green Mamba',
    name: 'Greeny',
  },
  {
    img: 'http://www.407bugfree.com/images/insects/snakes.jpg',
    species: 'Green Tree Python',
    name: 'Other Greeny',
  },
  {
    img: 'https://www.vanaqua.org/files/6113/1716/6670/spot-snakes-python.jpg',
    species: 'Royal Python',
    name: 'bally',
  },
  {
    img: 'http://pngimg.com/upload/snake_PNG4079.png',
    species: 'Cobra',
    name: 'hoody',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/originals/d9/4c/ea/d94ceaa368e6bf453c227238ff9f3912.jpg',
    species: 'Emerald Tree Boa',
    name: 'Emmy',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/564x/08/0a/2d/080a2dd6bb393101b1b818470ce674e5.jpg',
    species: 'California Kingsnake',
    name: 'Stripey',
  },
  {
    img: 'http://data.wildlifetrusts.org/sites/default/files/imagecache/reserve_web_large/sites/data.live.wt.precedenthost.co.uk/files/Grass%20snake%20ctpt%20David%20Chamberlain.jpg',
    species: 'Grass Snake',
    name: 'grassy',
  },
];


interface ReptileListProps {
  name: string;
}

interface ReptileListState {
  checked: boolean;
}

class ReptileList extends React.Component<ReptileListProps, ReptileListState> {
  state = {
    checked: true
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
        cellHeight={200}
        style={styles.gridList}
        >
        <Subheader>{this.props.name}</Subheader>
        {tilesData.map((tile) => (
            <GridTile
            key={tile.img}
            title={tile.name}
            subtitle={<span>{tile.species}</span>}
            >
            <img src={tile.img} />
            </GridTile>
        ))}
        </GridList>
    </div>
    );
  }
}

export default ReptileList;