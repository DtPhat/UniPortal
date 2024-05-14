import { Link } from "react-router-dom"

const Missing = () => {
  return (
    <article style={{ padding: "100px" }}>
      <h1>Ồ!</h1>
      <p>Không tìm thấy trang</p>
      <div className="">
        <Link to="/" className="font-bold text-accent">Quay về trang chủ</Link>
      </div>
    </article>
  )
}

export default Missing