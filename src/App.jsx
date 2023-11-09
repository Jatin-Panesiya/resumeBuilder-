import PersonalData from "./components/PersonalData";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EducationData from "./components/EducationData";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Interests from "./components/Interests";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Summary from "./components/Summary";
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
          <Tab>Profile Summary</Tab>
          <Tab>Resume</Tab>
        </TabList>

        <TabPanel><PersonalData /></TabPanel>
        <TabPanel><EducationData/></TabPanel>
        <TabPanel><Skills/></TabPanel>
        <TabPanel><Interests/></TabPanel>
        <TabPanel><Experience/></TabPanel>
        <TabPanel><Projects/></TabPanel>
        <TabPanel><Summary/></TabPanel>
        <TabPanel><Resume/></TabPanel>
        
      </Tabs>



    </div>
  );
}

export default App;