import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const DataCrud = () => {
  const { table, id } = useParams();
  const location = useLocation();
  const isAddingNewData = location.pathname.split("/")[3] === "add-data";
  const currentOperation = isAddingNewData ? "New Data" : "Update Data";

  const [data, setData] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!isAddingNewData) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/${table}/${id}`)
        .then((res) => {
          if (res.status === 200) {
            setData(res.data.data || {});
          } else {
            setMessage(res.data.message || "Unexpected response from server.");
          }
        })
        .catch((error) => {
          setMessage(
            error.response?.data?.message ||
              `Error: ${error.response?.status} - ${error.response?.statusText}`
          );
        });
    } else {
      setData({}); // Reset data for adding new entry
    }
  }, [table, id, isAddingNewData]);

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value, // Store file object for file inputs
    }));
  };

  const handleSubmit = () => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/${table}/${isAddingNewData ? "" : id}`;
    console.log(apiUrl);
    const method = isAddingNewData ? "post" : "put";

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios({
      method,
      url: apiUrl,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" }, // Ensure proper encoding
    })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setMessage(isAddingNewData ? "Added successfully!" : "Updated successfully!");
        } else {
          setMessage(res.data.message || "Unexpected response from server.");
        }
      })
      .catch((error) => {
        setMessage(
          error.response?.data?.message ||
            `Error: ${error.response?.status} - ${error.response?.statusText}`
        );
      });
  };

  const InputField = ({ label, name, type = "text"  }) => (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        defaultValue={data[name]} // Prevents auto-reset on re-render
        onBlur={handleChange} // Updates state only when focus leaves the field
        className="bg-boxground rounded-xl p-4"
        type={type}
      />
    </>
  );

  InputField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
  };

  InputField.defaultProps = {
    type: "text",
  };

  const InputFileField = ({ label, name }) => (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="file"
        name={name}
        accept="image/*"
        onChange={handleChange}
        className="bg-boxground rounded-xl p-4"
      />
    </>
  );

  const TextAreaField = ({ label, name }) => (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        defaultValue={data[name]} // Prevents auto-reset on re-render
        onBlur={handleChange} // Updates state only when focus leaves the field
        className="bg-boxground rounded-xl p-4"
      />
    </>
  );

  TextAreaField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  const SkillDashboard = () => (
    <div className="space-y-9">
      <div className="input-division space-y-4 flex flex-col">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          defaultValue={data.category}
          onBlur={handleChange}
          className="bg-boxground rounded-xl p-4"
        >
          <option value="language">Language</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="aiml">AI Tools</option>
          <option value="others">Others</option>
        </select>
        <InputField label="Name" name="name" />
        <InputField label="Icon Family" name="iconFamily" />
        <InputField label="Icon Name" name="iconName" />
      </div>
      <button onClick={handleSubmit} className="px-9 py-2 bg-primary rounded-xl capitalize">
        {isAddingNewData ? "Add" : "Update"}
      </button>
    </div>
  );

  const EducationDashboard = () => (
    <div className="space-y-9">
      <div className="input-division space-y-4 flex flex-col">
        <InputField label="Duration" name="duration" />
        <InputField label="Institution" name="institution" />
        <InputField label="Degree" name="degree" />
        <TextAreaField label="Description" name="description" />
        <InputFileField label="Upload Image" name="image" />
      </div>
      <button onClick={handleSubmit} className="px-9 py-2 bg-primary rounded-xl capitalize">
        {isAddingNewData ? "Add" : "Update"}
      </button>
    </div>
  );

  const ExperienceDashboard = () => (
    <div className="space-y-9">
      <div className="input-division space-y-4 flex flex-col">
        <InputField label="Duration" name="duration" />
        <InputField label="Company Name" name="companyName" />
        <InputField label="Job Role" name="jobRole" />
        <TextAreaField label="Description" name="description" />
        <InputFileField label="Upload Image" name="image" />
      </div>
      <button onClick={handleSubmit} className="px-9 py-2 bg-primary rounded-xl capitalize">
        {isAddingNewData ? "Add" : "Update"}
      </button>
    </div>
  );

  const ProjectDashboard = () =>{
    return(
      null
    )
  }

  const BlogDashboard = () =>{
    return(
      <div className="space-y-9">
      <div className="input-division space-y-4 flex flex-col">
        <InputField label="Title" name="title" />
        <InputField label="Content" name="content" />
        <InputField label="Message" name="message" />
        <TextAreaField label="Description" name="description" />
        <InputField label="Conclusion" name="conclusion" />
        <InputFileField label="Upload Image" name="image" />
      </div>
      <button onClick={handleSubmit} className="px-9 py-2 bg-primary rounded-xl capitalize">
        {isAddingNewData ? "Add" : "Update"}
      </button>
    </div>
    )
  }

  const renderDashboard = () => {
    switch (table) {
      case "education":
        return <EducationDashboard />;
      case "experience":
        return <ExperienceDashboard />;
      case "skill":
        return <SkillDashboard />;
      case "project":
        return <ProjectDashboard />;
      case "blog":
        return <BlogDashboard/>
      default:
        return <h1>Select a category</h1>;
    }
  };

  return (
    <main className="text-heading pt-28 xl:pt-10">
      <div className="main">
        <section className="space-y-5">
          <div className="flex justify-between items-center">
            <h1>{table}</h1>
            <h1>{currentOperation}</h1>
          </div>
        </section>
        <section className="input-section">{renderDashboard()}</section>
      </div>
    </main>
  );
};

export default DataCrud;
