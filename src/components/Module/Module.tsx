import { SetStateAction, useState } from "react";
import styles from "./Module.module.scss";
import { ModuleProps } from "./Module.types.ts";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Button from "../UI components/Button/Button.tsx";

const Module = ({
  id,
  moduleTitle,
  videoTitle,
  videoLink,
  minPassingMarks,
  noOfQuestions,
}: ModuleProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const toggle = (id: number) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  return (
    <div className={styles.Module}>
      <div onClick={() => toggle(id)} className={styles.ModuleName}>
        <h1>{moduleTitle}</h1>
        <span className={styles.Accordian}>
          {selected === id ? (
            <FaAngleDown style={{ color: "#2196f3" }} />
          ) : (
            <FaAngleUp style={{ color: "#2196f3" }} />
          )}
        </span>
      </div>
      <div
        className={
          selected === id ? styles.ModuleInfoVisible : styles.ModuleInfo
        }
      >
        <div className={styles.ModuleItems}>
          <div className={styles.ModuleItem}>
            <p>Video Title</p>
            <p>Video Link</p>
            <p>Minimum Passing Marks</p>
            <p>No Of Questions</p>
          </div>
          <div className={styles.ModuleItemValue}>
            <p>: {videoTitle}</p>
            <p>: {videoLink}</p>
            <p>: {minPassingMarks}</p>
            <p>: {noOfQuestions}</p>
          </div>
        </div>
        {selected === id && ( 
          <div className={styles.EditButton}>
            <Button
              text={"Edit Module"}
              type={"submit"}
              bgColor={""}
              handleClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Module;
