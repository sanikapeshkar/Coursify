import { ModuleListProps } from "./ModuleList.types.ts";
import styles from "./ModuleList.module.scss";

import { Roles } from "../../constants.ts";
import { useState } from "react";
import Module from "../Module/Module.tsx";
import Button from "../UI components/Button/Button.tsx";
import AddModule from "../AddModule/AddModule.tsx";
import ProgressBar from "../ProgressBar/ProgressBar.tsx";

const ModuleList = ({ modules, type }: ModuleListProps) => {
  const [showModule, setShowModule] = useState(false);

  const adminButtons = (
    <>
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
    </>
  );
  const userButtons = (
    <>
      <Button
        text={"Enroll"}
        type={"submit"}
        bgColor={""}
        handleClick={() => setShowModule(!showModule)}
      />
      <Button
        text={"Re-enroll"}
        type={"submit"}
        bgColor={""}
        handleClick={() => setShowModule(!showModule)}
      />
      <Button
        text={"Certificate"}
        type={"submit"}
        bgColor={""}
        handleClick={() => setShowModule(!showModule)}
      />
    </>
  )

  return (
    <div className={styles.ModuleList}>
     {type === Roles.USER && <ProgressBar progress={30}/>}
      <div className={type === Roles.ADMIN ? `${styles.SaveSequenceButton}` : `${styles.UserButtons}`}>
        {type === Roles.ADMIN && adminButtons}
        {type === Roles.USER && userButtons}
      </div>
      <div className={styles.List}>
        {showModule && <AddModule setShowModal={setShowModule} />}
        {modules.map((data, index) => {
          return (
            <Module
              key={index}
              moduleTitle={data.moduleTitle}
              videoTitle={data.videoTitle}
              videoLink={data.videoLink}
              minPassingMarks={data.minPassingMarks}
              noOfQuestions={data.noOfQuestions}
              id={data.id}
              type={type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ModuleList;
