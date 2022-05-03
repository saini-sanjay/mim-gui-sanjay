import './App.css';
import {formatDate,nextUpdateForUpdate,selectElementContents} from './Dateformat';


function Update(props) {
    const formik=props.data;
    const incCreatedDate=new Date(formik.values.incident_start_time);
    const impStartDate=new Date(formik.values.service_impact_start_time);
    const next=nextUpdateForUpdate(formik);
 
  return (
      <div>
      <div id='copyupdate'>
      <h3>Update : Incident #{formik.values.incident}-{formik.values.severity}-{formik.values.country}- {formik.values.incident_description}</h3>
      <br></br>    
      <table className='mytable'>
    <tbody>
    <tr className='top-row' id='update'>
    <th colSpan={2}>Major Incident Update Notification</th>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='update'>Incident #</td>
    <td>{formik.values.incident}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='update'>Incident Reported By</td>
    <td>{formik.values.reporter}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='update'>Incident Severity/Priority Reported</td>
    <td>{formik.values.severity}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='update'>Location(OPCO)</td>
    <td>{formik.values.country}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='update'>Incident Reported Time(OPCO)</td>
    <td>{formatDate(incCreatedDate)}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='update'>Service Impact Start Time(OPCO)</td>
    <td>{formatDate(impStartDate)}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='update'>Incident Description</td>
    <td>{formik.values.incident_description}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='update'>Business / IT Services Impacted</td>
    <td>{formik.values.business_service_impact}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='update'>Device / CI /Application /IP Details</td>
    <td>{formik.values.ip_details}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='update'>Domain </td>
    <td>{formik.values.domain}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='update'>Domain Owner</td>
    <td>{formik.values.domain_owner}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='update'>Incident Status</td>
    <td>{formik.values.incident_status}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='update'>Current Status of Impacted Services and Action details</td>
    <td>{formik.values.comments}</td>
    </tr>
    <tr className='my-row bottom-row'>
    <td className='mycolumn'>Incident Manager (Contact Details)</td>
    <td style={{color:'rgb(5,99,193)'}}><u>Incident-Management@africa.airtel.com</u></td>
    </tr>
    </tbody>
    </table>
    <br></br>
    <b style={{backgroundColor:'yellow'}}>Next Update@{next}</b>
    </div>
    <div className='d-flex justify-content-center'>
  <button type="button" className="btn btn-success" onClick={()=>selectElementContents(document.getElementById('copyupdate'))}>Copy Update Notification</button>
  </div>
    <hr></hr>
    <br></br>
  </div>
  );
}
 
export default Update;