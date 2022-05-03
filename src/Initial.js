import './App.css';
import {formatDate,nextUpdateForInitial,selectElementContents} from './Dateformat';




function Initial(props) {
    const formik=props.data;
    const myDate=new Date(formik.values.incident_start_time);
    const time=formatDate(myDate);
    const next=nextUpdateForInitial(formik);
    

  return (
      <div>
      <div id='copytable'>
      <h3>Initial : Incident #{formik.values.incident}-{formik.values.severity}-{formik.values.country}- {formik.values.incident_description}</h3>
      <br></br> 
         
      <table className='mytable'>
    <tbody>
    <tr className='top-row' id='initial'>
    <th colSpan={2}>Major Incident Alert Notification</th>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='initial'>Incident #</td>
    <td>{formik.values.incident}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='initial'>Incident Reported By</td>
    <td>{formik.values.reporter}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='initial'>Incident Severity/Priority Reported</td>
    <td>{formik.values.severity}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='initial'>Location(OPCO)</td>
    <td>{formik.values.country}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='initial'>Incident Reported Time(OPCO)</td>
    <td>{time}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='initial'>Incident Description</td>
    <td>{formik.values.incident_description}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='initial'>Business / IT Services Impacted</td>
    <td>{formik.values.business_service_impact}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='initial'>Device / CI /Application /IP Details</td>
    <td>{formik.values.ip_details}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='initial'>Domain </td>
    <td>{formik.values.domain}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='initial'>Domain Owner</td>
    <td>{formik.values.domain_owner}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='initial'>Incident Status</td>
    <td>{formik.values.incident_status}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='initial'>Current Status of Impacted Services</td>
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
  <button type="button" className="btn btn-success" onClick={()=>selectElementContents(document.getElementById('copytable'))}>Copy Initial Notification</button>
  </div>
  
  <hr></hr>
    <br></br>
  </div>
  );
}
 
export default Initial;