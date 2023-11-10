import PersonalData from "./components/PersonalData";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import EducationData from "./components/EducationData";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Interests from "./components/Interests";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Summary from "./components/Summary";
import React from "react";
import AdditionalDetails from "./components/AdditionalDetails";
import { useSelector } from "react-redux";


function App() {

  const status = useSelector((state) => state.printedStatus)

  return (
    <React.Fragment>


      <Tabs>


        <TabList className={`${status ? 'hidden' : 'flex'} justify-center flex-wrap  `} >
          <Tab>Profile Summary</Tab>
          <Tab>Personal Details</Tab>
          <Tab>Additional Details</Tab>
          <Tab>Education Details</Tab>
          <Tab>Experience</Tab>
          <Tab>Projects</Tab>
          <Tab>Skills</Tab>
          <Tab>Interest</Tab>
          <Tab>Resume</Tab>
        </TabList>


        <TabPanel><Summary /></TabPanel>
        <TabPanel><PersonalData /></TabPanel>
        <TabPanel><AdditionalDetails /></TabPanel>
        <TabPanel><EducationData /></TabPanel>
        <TabPanel><Experience /></TabPanel>
        <TabPanel><Projects /></TabPanel>
        <TabPanel><Skills /></TabPanel>
        <TabPanel><Interests /></TabPanel>
        <TabPanel><Resume /></TabPanel>

      </Tabs>


    </React.Fragment>
  );
}

export default App;