import { AddModuleProps, Inputs } from "./AddModule.types";
import styles from './AddModule.module.scss';

import { useForm, SubmitHandler } from "react-hook-form"
import { postAddModule } from "../../services/Module.service";
import Button from "../UI components/Button/Button";
import CloseIcon from '@mui/icons-material/Close';

const AddModule = ({ setShowModal }: AddModuleProps) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      const response = await postAddModule(data);
      console.log(response);
    } catch (error) {
      console.log('Error :: AddModule :: ', error);
    }
  }

  return (
    <div className={styles.AddModule}>
      <form
        className={styles.Form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <CloseIcon
          className={styles.CloseIcon}
          onClick={() => setShowModal(false)}
        />
        <h2 className={styles.Header}>Add Module</h2>
        <div className={styles.FormDiv}>
          <div className={styles.FormInputWithError}>
            <input {...register("moduleTitle", {
              required: true,
              minLength: 5,
              maxLength: 20
            })}
              placeholder='Module title'
              className={styles.FormField}
            />
            {errors.moduleTitle?.type === 'required' && <p className={styles.ValidationAlert}>Module title is required</p>}
            {errors.moduleTitle && <p className={styles.ValidationAlert}>Input should be 5-20 characters</p>}
          </div>
          <div className={styles.FormInputWithError}>
            <input {...register("videoTitle", {
              required: true,
              minLength: 5,
              maxLength: 20
            })}
              placeholder='Video title'
              className={styles.FormField}
            />
            {errors.videoTitle?.type === 'required' && <p className={styles.ValidationAlert}>Video title is required</p>}
            {errors.videoTitle && <p className={styles.ValidationAlert}>Input should be 5-20 characters</p>}
          </div>
        </div>
        <div className={styles.FormDiv}>
          <div className={styles.FormInputWithError}>
            <input {...register("videoLink", {
              required: true,
              minLength: 5,
              maxLength: 100
            })}
              placeholder='Video link'
              className={styles.FormField}
            />
            {errors.videoLink?.type === 'required' && <p className={styles.ValidationAlert}>Video link is required</p>}
            {errors.videoLink && <p className={styles.ValidationAlert}>Input should be 5-100 characters</p>}
          </div>
          <div className={styles.FormInputWithError}>
            <input {...register("noOfQuestions", {
              required: true,
              valueAsNumber: true,
            })}
              placeholder='No of Questions'
              className={styles.FormField}
              type="number"
            />
            {errors.noOfQuestions?.type === 'required' && <p className={styles.ValidationAlert}>No of qustions is required</p>}
          </div>
        </div>
        <div className={styles.FormDiv}>
          <div className={styles.FormInputWithError}>
            <input {...register("minMarks", {
              required: true,
              valueAsNumber: true,
            })}
              placeholder='Min marks'
              className={styles.FormField}
              type="number"
            />
            {errors.minMarks?.type === 'required' && <p className={styles.ValidationAlert}>Min marks is required</p>}
          </div>
          <div className={styles.FormInputWithError}>
            <input {...register("addQuizBtn", {
              required: true,
            })}
              type="file"
              accept=".csv"
              onClick={() => {
              }}
              className={styles.CSV}
            />
            {errors.addQuizBtn?.type === 'required' && <p className={`${styles.CSVAlert} ${styles.ValidationAlert}`}>CSV file is required</p>}
          </div>
        </div>

        <div className={styles.Btn}>
          <Button
            text="Submit"
            type="submit"
            bgColor="success"
            handleClick={() => console.log('Submit form')}
          />
        </div>

      </form>
    </div>
  );
};

export default AddModule;  