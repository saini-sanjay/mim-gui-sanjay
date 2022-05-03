import './App.css';
import {formatDate,selectElementContents} from './Dateformat';

function Restoration(props) {
    const formik=props.data;
    const incCreatedDate=new Date(formik.values.incident_start_time);
    const impStartDate=new Date(formik.values.service_impact_start_time);
    const restorationDate=new Date(formik.values.service_restoration_time);
    const resolveDate=new Date(formik.values.ticket_resolution_time);
  return (
      <div>
      <div id='copyrestoration'>
      <h3>Restoration : Incident #{formik.values.incident}-{formik.values.severity}-{formik.values.country}- {formik.values.incident_description}</h3>
      <br></br>   
      <table className='mytable'>
    <tbody>
    <tr className='top-row' id='restoration'>
    <th colSpan={2}>Major Incident Restoration Notification</th>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='restoration'>Incident #</td>
    <td>{formik.values.incident}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='restoration'>Incident Reported By</td>
    <td>{formik.values.reporter}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='restoration'>Incident Severity/Priority Reported</td>
    <td>{formik.values.severity}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='restoration'>Location(OPCO)</td>
    <td>{formik.values.country}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='restoration'>Incident Reported Time(OPCO)</td>
    <td>{formatDate(incCreatedDate)}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='restoration'>Service Impact Start Time(OPCO)</td>
    <td>{formatDate(impStartDate)}</td>
    </tr>
<tr className='my-row'>
    <td className='mycolumn' id='restoration'>Service Restoration Time(OPCO)</td>
    <td>{formatDate(restorationDate)}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='restoration'>Ticket Resolution Time(OPCO)</td>
    <td>{formatDate(resolveDate)}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='restoration'>Incident Description</td>
    <td>{formik.values.incident_description}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='restoration'>Business / IT Services Impacted</td>
    <td>{formik.values.business_service_impact}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='restoration'>Device / CI /Application /IP Details</td>
    <td>{formik.values.ip_details}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='restoration'>Domain </td>
    <td>{formik.values.domain}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='restoration'>Domain Owner</td>
    <td>{formik.values.domain_owner}</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='restoration'>Incident Status</td>
    <td>Resolved</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='restoration'>Current Status of Impacted Services</td>
    <td>Restored</td>
    </tr>
    <tr className='my-row'>
    <td className='mycolumn' id='restoration'>Resolution / Action Steps Provided (Brief Details)</td>
    <td>{formik.values.comments}</td>
    </tr>
    <tr className='my-row bottom-row'>
    <td className='mycolumn'>Incident Manager (Contact Details)</td>
    <td style={{color:'rgb(5,99,193)'}}><u>Incident-Management@africa.airtel.com</u></td>
    </tr>
    </tbody>
    </table>
    </div>
    <br></br>
    <div className='d-flex justify-content-center'>
    <button type="button" className="btn btn-success" onClick={()=>selectElementContents(document.getElementById('copyrestoration'))}>Copy Restoration Notification</button>
    </div>
    <hr></hr>
    <br></br>
  </div>
  );
}

 

export default Restoration;