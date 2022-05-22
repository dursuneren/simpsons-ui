import React, { useEffect } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//Validations
import addSimpsonSchema from "../validations/simpsonSchema";

//Contexts
import { useSimpsons } from "../contexts/SimpsonsContext";

//Components
import Spinner from "../components/spinner";

let timer = null;

function Add() {
  let navigate = useNavigate();
  const { simpsons, setAllSimpsons } = useSimpsons();

  //for clearing timeout when component unmounts
  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  //When form is submitted, new simson's id is generated. (Max id is 100)
  const checkId = () => {
    let id = Math.floor(Math.random() * 100);
    let isIdExist = simpsons.find((simpson) => Number(simpson.id) === id);
    if (isIdExist) {
      checkId();
    } else {
      return id.toString();
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", job: "", description: "", avatar: "" }}
        validationSchema={addSimpsonSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          values.id = checkId();

          setAllSimpsons([...simpsons, values]);
          resetForm();
          setSubmitting(false);
          toast.success(`${values.name} added!`);
          timer = setTimeout(() => {
            navigate("/");
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="w-full justify-center items-center p-5" onSubmit={handleSubmit}>
            {/* Name Surname */}
            <div className="flex flex-wrap mb-6">
              <label
                className="font-comic font-bold text-gray-700 dark:text-gray-300 block uppercase tracking-wide text-xs mb-2"
                htmlFor="name-surname"
              >
                Name Surname
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-simpsons-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name-surname"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                type="text"
                placeholder="Please enter The Simpsons' character's name and surname..."
              />
              <p className="text-red-500 text-xs italic">
                {errors.name && touched.name && errors.name}
              </p>
            </div>
            {/* Job Title */}
            <div className="flex flex-wrap mb-6">
              <label
                className="font-comic font-bold text-gray-700 dark:text-gray-300 block uppercase tracking-wide text-xs mb-2"
                htmlFor="job-title"
              >
                Job Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-simpsons-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="job-title"
                name="job"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.job}
                type="text"
                placeholder="Please enter The Simpsons' character's job title..."
              />
              <p className="text-red-500 text-xs italic">
                {errors.job && touched.job && errors.job}
              </p>
            </div>
            {/* About Him/Her */}
            <div className="flex flex-wrap mb-6">
              <label
                className="font-comic font-bold text-gray-700 dark:text-gray-300 block uppercase tracking-wide text-xs mb-2"
                htmlFor="about-him-her"
              >
                About Him/Her
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-simpsons-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="about-him-her"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                rows={4}
                placeholder="Please enter The Simpsons' character's description..."
              />
              <p className="text-red-500 text-xs italic">
                {errors.description &&
                  touched.description &&
                  errors.description}
              </p>
            </div>
            {/* Image Link */}
            <div className="flex flex-wrap mb-6">
              <label
                className="font-comic font-bold text-gray-700 dark:text-gray-300 block uppercase tracking-wide text-xs mb-2"
                htmlFor="image-link"
              >
                Image Link
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-simpsons-blue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="image-link"
                name="avatar"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.avatar}
                type="text"
                placeholder="Please enter The Simpsons' character's image link..."
              />
              <p className="text-red-500 text-xs italic">
                {errors.avatar && touched.avatar && errors.avatar}
              </p>
            </div>
            {/* Submit Button */}
            <button
              className="w-full inline-flex items-center justify-center h-10 px-6 mb-5 font-comic dark:bg-amber-500 hover:dark:bg-amber-700 hover:bg-amber-500 bg-amber-400 text-gray-800 dark:text-gray-100  rounded focus:shadow-outline hover:bg-indigo-800"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting && <Spinner />}
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Add;
