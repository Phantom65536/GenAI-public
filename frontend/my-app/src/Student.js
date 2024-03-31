import './student.css'

function Student({ name,studentClicked}) {
  return (
    <>
      <div className="student" onClick={studentClicked}>
        {name}
      </div>
      <div className="separator"></div>
    </>
  );
}

export default Student;