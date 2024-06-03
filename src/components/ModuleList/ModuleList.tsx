import { SetStateAction, useState } from "react";
import Module from "../Module/Module.tsx";
import Button from "../UI components/Button/Button.tsx";
import styles from "./ModuleList.module.scss";
import { ModuleListProps } from "./ModuleList.types.ts";
import AddModule from "../AddModule/AddModule.tsx";

const ModuleList = ({ modules }: ModuleListProps) => {
const [showModule, setShowModule] = useState(false);


  return (
    <div className={styles.ModuleList}>
      <div className={styles.SaveSequenceButton}>
      <Button
          text={"Add Module"}
          type={"submit"}
          bgColor={""}
          handleClick={() => setShowModule(!showModule)}
        />
        <Button
          text={"Save Sequence"}
          type={"submit"}
          bgColor={""}
          handleClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <div className={styles.List}>
        {
          showModule && <AddModule setShowModal={setShowModule}/>
        }
        {modules.map((data, i) => {
          return (
            <Module
              key={i}
              moduleTitle={data.moduleTitle}
              videoTitle={data.videoTitle}
              videoLink={data.videoLink}
              minPassingMarks={data.minPassingMarks}
              noOfQuestions={data.noOfQuestions}
              id={data.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ModuleList;
