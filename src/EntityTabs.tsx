import React = require('react');
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

import ReptileList from './ReptileList';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab: any) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

interface EntityTabsProps {
}

interface EntityTabsState {
}

class EntityTabs extends React.Component<EntityTabsProps, EntityTabsState> {
  constructor() {
    super();
  }
 render() {
    return (
        <Tabs>
    <Tab label="Reptiles" >
      <div>
        <h2 style={styles.headline}>Reptiles</h2>
        
        <ReptileList name={"Reptiles"}></ReptileList>
      </div>
    </Tab>
    <Tab label="Food Items" >
      <div>
        <h2 style={styles.headline}>Food Items</h2>
        <p>
         TODO:  I need to add some grub here
        </p>
      </div>
    </Tab>
  </Tabs>
    );
  }
}

export default EntityTabs;