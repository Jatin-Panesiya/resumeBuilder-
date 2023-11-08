import PersonalData from "./components/PersonalData";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EducationData from "./components/EducationData";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
function App() {


  return (
    <div>

      <Tabs>
        <TabList>
          <Tab>Personal Details</Tab>
          <Tab>Education Details</Tab>
          <Tab>Skills</Tab>
          <Tab>Interest</Tab>
          <Tab>Experience</Tab>
          <Tab>Projects</Tab>
          <Tab>Objective</Tab>
          <Tab>Resume</Tab>
        </TabList>
        <TabPanel><PersonalData /></TabPanel>
        <TabPanel><EducationData/></TabPanel>
        <TabPanel><Skills/></TabPanel>
        <TabPanel>Tab2</TabPanel>
        <TabPanel>Tab2</TabPanel>
        <TabPanel>Tab2</TabPanel>
        <TabPanel>Tab2</TabPanel>
        <TabPanel><Resume/></TabPanel>
      </Tabs>



    </div>
  );
}

export default App;