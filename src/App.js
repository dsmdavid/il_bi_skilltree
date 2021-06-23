import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SkillProvider, SkillTreeGroup, SkillTree } from 'beautiful-skill-tree';
import { tableau} from "./data/data";
import theme from './data/theme';


function App() {
  return (
    <div className="App">
      <div style={{ width: "500px", height: "150px", margin: "0 auto" }}>
        <img
          style={{ width: "500px", height: "200px" }}
          src={logo}
          alt="borderlands logo."
        />

        <SkillProvider>
        <SkillTreeGroup theme = "theme">

          {() => {
            return (
              <React.Fragment>
                <SkillTree treeId="tableau" title="Tableau" data={tableau} /> 
              </React.Fragment>

              // <SkillTree treeId="basic-birch" title="First Skill Tree" data=
              // {[{
              //   id: 'first-skill',
              //   title: 'The root node',
              //   tooltip: {
              //     description : "The parent node, all of the descendants will be locked until it's selected",
              //   },
              //   children: [
              //   // rinse and repeat; always repeat.
              // ]}]} />
            )
          }}
        </SkillTreeGroup>
      </SkillProvider>
      </div>
    </div>
  );
}

export default App;
