import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import "bootstrap/dist/css/bootstrap.min.css";
import SalesDashboard from './SalesDashboard';
import ScheduleDashboard12 from './ScheduleDashboard3';
import FeedPage from './FeedDashboard';

const HomeDashboard = () => {
  return (
    <div className= "page-wrapper">
        <div className='container-fuild'>
        <div className="row mb-3 me-2">
        <div className='col'>
          <h3 className="fw-bold">
            My Dashboard <span style={{ color: "#83cad3" }}>Benjamin Price</span>
          </h3>
        </div>
        <div className="text-end col">
          <a href="#" style={{ color: "#83cad3" }}>
            Got feedback? We'd love to hear it
          </a>
        </div>
      </div>
        </div>
        
        <Tabs>
            
    <TabList>
      <Tab>Summary</Tab>
      <Tab> Schedule</Tab>
      <Tab> Feed</Tab>
     
    </TabList>

    <TabPanel>
<SalesDashboard/>
    </TabPanel>
    <TabPanel>

<ScheduleDashboard12/>
    </TabPanel>
    <TabPanel>
<FeedPage/>
    </TabPanel>
    
   
  </Tabs>
    </div>
  )
}

export default HomeDashboard
