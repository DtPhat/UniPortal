import { Navigate} from "react-router-dom"

const Admin = () => {
  return (
    <div className="pt-4">
      <Navigate to={'/admin/users'}/>
    </div>
  )
}

export default Admin