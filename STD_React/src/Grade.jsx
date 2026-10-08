import { useNavigate } from 'react-router-dom'
import './Grade.css'
import { QRCodeSVG } from 'qrcode.react'

function Grade() {

  const navigate = useNavigate()
  const name = '이선현'
  const studentId = '20210075'
  const department = '컴퓨터공학과'
  const qrData = '4.1/4.5'

  return (
    <main className="grade-page">
      <section className="grade-card">
        <p className="grade-label">MY GRADE</p>
        <h1>개인 성적 조회</h1>
        <div className="student-info">
          <p>
            <span>이름</span>
            <strong>{name}</strong>
          </p>

          <p>
            <span>학번</span>
            <strong>{studentId}</strong>
          </p>

          <p>
            <span>학과</span>
            <strong>{department}</strong>
          </p>
        </div>

        <div className="grade-divider"></div>
        <h2>수강 과목 성적</h2>
        <div className="subject-list">
          <div className="subject">
            <span>프론트앤드프로그래밍</span>
            <strong>A+</strong>
          </div>

          <div className="subject">
            <span>멀티미디어프로그래밍</span>
            <strong>A</strong>
          </div>

          <div className="subject">
            <span>데이터베이스</span>
            <strong>B+</strong>
          </div>
        </div>

        <div className="gpa-box">
          <span>평균 평점</span>
          <strong>4.1 / 4.5</strong>
        </div>
        <div className = "qr-area">
          <QRCodeSVG value = {qrData} size={100}
            />
            <p> 학점 QR </p>
        </div>

        <button onClick={() => navigate('/Profile')}>
          홈으로
        </button>
      </section>
    </main>
  )
}

export default Grade