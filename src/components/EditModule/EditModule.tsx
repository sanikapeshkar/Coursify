import { Action, EditModuleProps, Inputs, State } from "./EditModule.types";
import styles from './EditModule.module.scss';

import { useEffect, useReducer } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { postEditModule, getEditModule } from "../../services/Module.service";
import Button from "../UI components/Button/Button";
import CloseIcon from '@mui/icons-material/Close';

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'GET_FORM':
      return {
        ...state,
        moduleTitle: action.moduleTitle,
        videoTitle: action.videoTitle,
        videoLink: action.videoLink,
        noOfQuestions: action.noOfQuestions,
        minMarks: action.minMarks,
      }

    default:
      break;
  }
}

const initialState = {
  moduleTitle: '',
  videoTitle: '',
  videoLink: '',
  noOfQuestions: 0,
  minMarks: 0,
}

const EditModule = ({ moduleId, setShowModal }: EditModuleProps) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      moduleTitle: '',
      videoTitle: '',
      videoLink: '',
      noOfQuestions: 0,
      minMarks: 0,
    }
  })
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      const response = await postEditModule(data);
      console.log(response);
    } catch (error) {
      console.log('Error :: EditModule :: ', error);
    }
  }

  const getEditModuleFromAPI = async () => {
    try {
      const data = await getEditModule(moduleId);
      dispatch({
        type: 'GET_FORM',
        moduleTitle: data?.moduleTitle,
        videoTitle: data?.videoTitle,
        videoLink: data?.videoLink,
        noOfQuestions: data?.noOfQuestions,
        minMarks: data?.minMarks,
      })
    } catch (error) {
      console.log("Error :: getEditModuleFromAPI :: ", error);
    }
  }

  useEffect(() => {
    getEditModuleFromAPI();
  }, [])

  return (
    <div className={styles.EditModule}>
      <form
        className={styles.Form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <CloseIcon
          className={styles.CloseIcon}
          onClick={() => setShowModal(false)}
        />
        <h2 className={styles.Header}>Edit Module</h2>
        <div className={styles.FormDiv}>
          <div className={styles.FormInputWithError}>
            <input {...register("moduleTitle", {
              required: true,
              minLength: 5,
              maxLength: 20
            })}
              placeholder='Module title'
              className={styles.FormField}
              value={state.moduleTitle}
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
              value={state.videoTitle}
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
              value={state.videoLink}
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
              type="number"
              className={styles.FormField}
              value={state.noOfQuestions}
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
              type="number"
              className={styles.FormField}
              value={state.minMarks}
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
            bgColor="blue"
            handleClick={() => console.log('Submit form')}
          />
        </div>

      </form>
    </div>
  );
};

export default EditModule;  